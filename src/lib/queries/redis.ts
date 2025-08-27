import { PrismaClient } from '@/generated/client';
import Redis from 'ioredis';
import { createPrismaRedisCache } from 'prisma-redis-middleware';
import { Any } from '../utils/types';

const ca = process.env.REDIS_CA?.replace(/\\n/g, '\n');
const redis = new Redis(process.env.SCALINGO_REDIS_URL!, {
  tls: {
    ca: ca ? [ca] : undefined,
    rejectUnauthorized: false
  }
});
export { redis };
export const prisma = new PrismaClient();

const cacheMiddleware = createPrismaRedisCache({
  models: [],
  storage: {
    type: 'redis',
    options: {
      client: redis,
      invalidation: { referencesTTL: 300 }
      // log: console
    }
  },
  cacheTime: 300,
  excludeModels: ['Product', 'Cart'],
  excludeMethods: ['count', 'groupBy'],
  // onHit: (key) => {
  //   console.log("hit");
  // },
  // onMiss: (key) => {
  //   console.log("miss");
  // },
  onError: (key) => {
    console.log('error', key);
  }
});

// redis.on('error', (err) => {
//   console.error('Redis connection error:', err);
// });

async function setupCacheMiddleware() {
  try {
    await redis.ping(); // Try a simple command to check connection
    (prisma as Any).$use(cacheMiddleware);
  } catch (err) {
    console.warn('Redis is not reachable, cache middleware not enabled.', err);
    redis.disconnect(); // Stop further connection attempts and error logs
  }
}

setupCacheMiddleware();
