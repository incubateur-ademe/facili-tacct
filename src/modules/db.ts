import { PrismaClient } from "@/generated/client";

export const db = new PrismaClient({
  datasourceUrl: process.env.SCALINGO_POSTGRESQL_URL,
});
