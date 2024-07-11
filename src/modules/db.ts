import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
  datasourceUrl: process.env.SCALINGO_POSTGRESQL_URL,

});


export default db;
