import crypto from 'crypto';
import Redis from 'ioredis';

const redisUrl = process.env.SCALINGO_REDIS_URL || process.env.REDIS_URL || process.env.REDIS;
// optional TLS CA (for managed Redis like Scalingo) - stored with literal newlines escaped in env
const redisCaRaw = process.env.REDIS_CA;
const redisCa = redisCaRaw ? redisCaRaw.replace(/\\n/g, '\n') : undefined;

let redis: Redis | null = null;
// Do not create a persistent global client by default; instead prefer ephemeral clients
// to avoid reconnect storms in development or misconfigured TLS environments.
// If you want a global client, set REDIS_GLOBAL=true in env and a correct SCALINGO_REDIS_URL.
if (redisUrl && process.env.REDIS_GLOBAL === 'true') {
  try {
    const opts: any = {
      // increase retry attempts for transient network glitches
      maxRetriesPerRequest: 5,
      retryStrategy: (times: number) => Math.min(50 * times, 2000),
      reconnectOnError: (err: Error) => {
        const msg = (err as any)?.message || '';
        return /ECONNRESET|ECONNREFUSED|ETIMEDOUT|READONLY/.test(msg);
      },
      enableOfflineQueue: false,
      connectTimeout: 10000,
    };
    // If the URL indicates TLS or a CA was provided, enable TLS options
    if ((redisUrl && redisUrl.startsWith('rediss://')) || redisCa) {
      opts.tls = { ca: redisCa ? [redisCa] : undefined, rejectUnauthorized: false };
    }
    redis = new Redis(redisUrl, opts);
    // Minimal events
    redis.on('error', (err: any) => {
      try {
        const masked = maskUrl(redisUrl);
        console.warn('Redis warning:', (err as any)?.message || err, { url: masked, status: redis?.status, tls: !!opts.tls });
      } catch (e) { console.warn('Redis warning', (err as any)?.message || err); }
    });
  } catch (err) {
    console.warn('Failed to initialize global Redis client', err);
    redis = null;
  }
}

export function getPrefetchKey(params: { code?: string | null; libelle?: string | null; type?: string | null; thematique?: string | null }) {
  const payload = JSON.stringify({ code: params.code || '', libelle: params.libelle || '', type: params.type || '', thematique: params.thematique || '' });
  const hash = crypto.createHash('sha256').update(payload).digest('hex');
  return `prefetch:${hash}`;
}

export async function safeGet(key: string): Promise<string | null> {
  try { console.info('[redis] safeGet called', { keyPreview: key?.slice(0,8), url: maskUrl(redisUrl), hasGlobal: !!redis, globalStatus: redis?.status }); } catch(e){}
  // If a healthy global client exists, use it. Otherwise create a short-lived client.
  if (redis && (redis.status === 'ready')) {
    try {
      return await redis.get(key);
    } catch (err) {
      console.warn('[redis] safeGet failed (global)', (err as any)?.message || err);
      return null;
    }
  }
  if (!redisUrl) return null;
  // Allow offline queue for ephemeral clients so commands issued before 'ready' are buffered.
  const tmpOpts: any = {
    // ephemeral clients: allow a few more retries to avoid quick MaxRetriesPerRequestError
    maxRetriesPerRequest: 5,
    retryStrategy: (times: number) => Math.min(50 * times, 2000),
    reconnectOnError: (err: Error) => {
      const msg = (err as any)?.message || '';
      return /ECONNRESET|ECONNREFUSED|ETIMEDOUT|READONLY/.test(msg);
    },
    enableOfflineQueue: true,
    connectTimeout: 8000,
  };
  if ((redisUrl && redisUrl.startsWith('rediss://')) || redisCa) {
    tmpOpts.tls = { ca: redisCa ? [redisCa] : undefined, rejectUnauthorized: false };
  }
  const tmp = new Redis(redisUrl, tmpOpts);
  // Prevent unhandled 'error' events from terminating the server process.
  const tmpErrorHandler = (err: any) => {
    try {
      const masked = maskUrl(redisUrl);
      console.warn('[redis] ephemeral client error', (err as any)?.message || err, { url: masked, status: tmp?.status, tls: !!tmpOpts.tls });
    } catch (e) {}
  };
  tmp.on('error', tmpErrorHandler);
  try {
    // Wait for the ephemeral client to become ready (only 'ready', not 'connect').
    await waitForReady(tmp, 5000);
    const res = await tmp.get(key);
    try { await tmp.quit(); } catch (e) { try { tmp.disconnect(); } catch (_) {} }
    try { tmp.off('error', tmpErrorHandler); } catch (e) {}
    return res;
  } catch (err) {
    try { tmp.disconnect(); } catch (e) {}
    try { tmp.off('error', tmpErrorHandler); } catch (e) {}
    try {
      const masked = maskUrl(redisUrl);
      console.warn('[redis] safeGet failed (temp)', (err as any)?.message || err, { url: masked, tls: !!tmpOpts.tls });
    } catch (e) {
      console.warn('[redis] safeGet failed (temp)', (err as any)?.message || err);
    }
    return null;
  }
}

export async function safeSet(key: string, value: string, exSeconds?: number): Promise<boolean> {
  try { console.info('[redis] safeSet called', { keyPreview: key?.slice(0,8), url: maskUrl(redisUrl), hasGlobal: !!redis, globalStatus: redis?.status }); } catch(e){}
  if (redis && (redis.status === 'ready')) {
    try {
      if (typeof exSeconds === 'number') {
        await redis.set(key, value, 'EX', exSeconds);
      } else {
        await redis.set(key, value);
      }
      return true;
    } catch (err) {
      console.warn('[redis] safeSet failed (global)', (err as any)?.message || err);
      return false;
    }
  }
  if (!redisUrl) return false;
  const tmpOpts: any = {
    // ephemeral clients: allow a few more retries to avoid quick MaxRetriesPerRequestError
    maxRetriesPerRequest: 5,
    retryStrategy: (times: number) => Math.min(50 * times, 2000),
    reconnectOnError: (err: Error) => {
      const msg = (err as any)?.message || '';
      return /ECONNRESET|ECONNREFUSED|ETIMEDOUT|READONLY/.test(msg);
    },
    enableOfflineQueue: true,
    connectTimeout: 8000,
  };
  if ((redisUrl && redisUrl.startsWith('rediss://')) || redisCa) {
    tmpOpts.tls = { ca: redisCa ? [redisCa] : undefined, rejectUnauthorized: false };
  }
  const tmp = new Redis(redisUrl, tmpOpts);
  const tmpErrorHandler = (err: any) => {
    try {
      const masked = maskUrl(redisUrl);
      console.warn('[redis] ephemeral client error', (err as any)?.message || err, { url: masked });
    } catch (e) {}
  };
  tmp.on('error', tmpErrorHandler);
  try {
    await waitForReady(tmp, 5000);
    if (typeof exSeconds === 'number') {
      await tmp.set(key, value, 'EX', exSeconds);
    } else {
      await tmp.set(key, value);
    }
    try { await tmp.quit(); } catch (e) { try { tmp.disconnect(); } catch (_) {} }
    try { tmp.off('error', tmpErrorHandler); } catch (e) {}
    return true;
  } catch (err) {
    try { tmp.disconnect(); } catch (e) {}
    try { tmp.off('error', tmpErrorHandler); } catch (e) {}
    try { console.warn('[redis] safeSet failed (temp)', (err as any)?.message || err, { url: maskUrl(redisUrl) }); } catch (e) { console.warn('[redis] safeSet failed (temp)', (err as any)?.message || err); }
    return false;
  }
}

function waitForReady(client: any, timeoutMs: number) {
  if (!client) return Promise.reject(new Error('no redis client'));
  if (client.status === 'ready' || client.status === 'connect') return Promise.resolve();
  return new Promise((resolve, reject) => {
    const onReady = () => { cleanup(); resolve(undefined); };
    const onError = (err: any) => { cleanup(); reject(err); };
    const timer = setTimeout(() => { cleanup(); reject(new Error('redis connect timeout')); }, timeoutMs);
    const cleanup = () => {
      clearTimeout(timer);
      try { client.off('ready', onReady); client.off('connect', onReady); client.off('error', onError); } catch (e) {}
    };
    try {
      client.once('ready', onReady);
      client.once('connect', onReady);
      client.once('error', onError);
    } catch (e) {
      cleanup();
      reject(e);
    }
  });
}

export { redis };

function maskUrl(u?: string | null) {
  if (!u) return 'no-url';
  try {
    // hide credentials if present
    return u.replace(/:\/\/(.*@)/, '://*****@');
  } catch (e) { return 'masked'; }
}
