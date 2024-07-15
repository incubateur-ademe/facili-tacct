"use server"
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

//Paris lat : 48.864716 long : 2.349014

export const Get_Communes = async () => {
  console.time("Query Execution Time");
  const value = await PrismaPostgres.$queryRaw`
    SELECT 
    epci, 
    libelle_epci,
    libelle_commune,
    code_commune, 
    precarite_logement,
    densite_bati,
    ST_AsGeoJSON(geometry) geometry 
    FROM postgis."communes" WHERE epci=${'200069193'}`
  console.timeEnd("Query Execution Time");

  return value;
};

Get_Communes()
  .then(async () => {
    await PrismaPostgres.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  });


