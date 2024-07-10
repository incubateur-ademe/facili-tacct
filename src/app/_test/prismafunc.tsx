import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const Get_Prisma = async () => {
  const value = await PrismaPostgres.$queryRaw`SELECT epci, code_commune, precarite_logement, ST_AsGeoJSON(geometry) geometry FROM postgis."communes_precarite" WHERE epci=${'200042497'}`
  return value;
};

Get_Prisma()
  .then(async () => {
    await PrismaPostgres.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  });


