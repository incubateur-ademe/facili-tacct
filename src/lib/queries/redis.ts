import { Prisma, PrismaClient } from "@/generated/client";
import Redis from "ioredis";
import { createPrismaRedisCache } from "prisma-redis-middleware";

const ca = process.env.REDIS_CA?.replace(/\\n/g, '\n');
const redis = new Redis(process.env.SCALINGO_REDIS_URL!, {
  tls: {
    ca: ca ? [ca] : undefined,
    rejectUnauthorized: false, 
  }
}); 
export const prisma = new PrismaClient();

const cacheMiddleware: Prisma.Middleware = createPrismaRedisCache({
  models: [
    { model: "inconfort_thermique", cacheTime: 300 }, 
    { model: "agriculture", cacheTime: 300 },
    { model: "arretes_catnat", cacheTime: 300 },
    { model: "ressources_eau", cacheTime: 300 },
    { model: "consommation_espaces_naf", cacheTime: 300 },
    { model: "aot40", cacheTime: 300 },
    { model: "collectivites_searchbar", cacheTime: 300 },
    { model: "qualite_sites_baignade", cacheTime: 300 },
    { model: "agriculture_bio", cacheTime: 300 },
    { model: "feux_foret", cacheTime: 300 },
    { model: "communes_drom", cacheTime: 300 },
    { model: "clc_territoires", cacheTime: 300 },
    { model: "erosion_cotiere", cacheTime: 300 },
    { model: "etat_cours_d_eau", cacheTime: 300 },
    { model: "rga", cacheTime: 300 },
  ],
  storage: { 
    type: "redis",
    options: { 
      client: redis,
      invalidation: { referencesTTL: 300 },
      // log: console
    }
  },
  cacheTime: 300,
  excludeModels: ["Product", "Cart"],
  excludeMethods: ["count", "groupBy"],
  // onHit: (key) => {
  //   console.log("hit");
  // },
  // onMiss: (key) => {
  //   console.log("miss");
  // },
  onError: (key) => {
    console.log("error", key);
  },
});

// redis.on('error', (err) => {
//   console.error('Redis connection error:', err);
// });

async function setupCacheMiddleware() {
  try {
    await redis.ping(); // Try a simple command to check connection
    prisma.$use(cacheMiddleware);
  } catch (err) {
    console.warn("Redis is not reachable, cache middleware not enabled.", err);
    redis.disconnect(); // Stop further connection attempts and error logs
  }
}

setupCacheMiddleware();
