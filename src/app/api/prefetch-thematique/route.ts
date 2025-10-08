import { GetInconfortThermique } from '@/lib/queries/databases/inconfortThermique';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { getPrefetchKey, redis, safeGet, safeSet } from '@/lib/redisClient';
import { NextResponse } from 'next/server';

const TTL_SECONDS = Number(process.env.PREFETCH_TTL_SECONDS || 60 * 10); // default 10 min

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const libelle = url.searchParams.get('libelle');
  const type = url.searchParams.get('type');
  const thematique = url.searchParams.get('thematique');

  const key = getPrefetchKey({ code, libelle, type, thematique });

  if (!redis) {
    // Redis not configured or unavailable — log and proceed without caching.
    console.warn('[prefetch] redis not configured, proceeding without cache');
  }

  try {
    const t0 = Date.now();
    // If already cached, return quickly (use safeGet)
    const existing = await safeGet(key);
    // prepare Set-Cookie header so the browser will send the key back to the server on next navigation
    const cookieParts: string[] = [`prefetchCacheKey=${key}`, `Path=/`, `Max-Age=${TTL_SECONDS}`, `SameSite=Lax`, `HttpOnly`];
    if (process.env.NODE_ENV === 'production') cookieParts.push('Secure');
    const cookieHeader = cookieParts.join('; ');

    if (existing) {
      return NextResponse.json({ ok: true, cached: true, key }, { headers: { 'Set-Cookie': cookieHeader } });
    }

  // Run the heavy queries (coerce null to empty string to match function signatures)
  const _code = code || '';
  const _libelle = libelle || '';
  const _type = type || '';
  const carteCommunes = await GetCommunes(_code, _libelle, _type);
  const dbInconfortThermique = await GetInconfortThermique(_code, _libelle, _type);

    const replacer = (_key: string, value: any) => {
      if (typeof value === 'bigint') return value.toString();
      if (value instanceof Date) return value.toISOString();
      return value;
    };
    const payload = JSON.stringify({ carteCommunes, dbInconfortThermique }, replacer);
  // Store in redis with TTL (use safeSet)
  await safeSet(key, payload, TTL_SECONDS);

    const duration = Date.now() - t0;
    // Log stored payload info (truncated preview for large payloads)
    try {
      console.info('[prefetch] stored', { key, durationMs: duration, bytes: Buffer.byteLength(payload, 'utf8') });
      const preview = payload.length > 5000 ? payload.slice(0, 5000) + '...<truncated>' : payload;
      console.info('[prefetch] payload preview', preview);
    } catch (e) {
      // In case Buffer isn't available or logging fails, ignore
      console.info('[prefetch] stored key', key);
    }

  return NextResponse.json({ ok: true, cached: false, key }, { headers: { 'Set-Cookie': cookieHeader } });
  } catch (err) {
    console.error('prefetch error', err);
    return NextResponse.json({ ok: false, message: String(err) }, { status: 500 });
  }
}
