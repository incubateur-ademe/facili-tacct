import { PrismaClient } from "@/generated/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const PrismaPostgres =
  globalForPrisma.prisma ||
  new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = PrismaPostgres;
