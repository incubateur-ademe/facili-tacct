"use server"
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

//Paris lat : 48.864716 long : 2.349014

export const Get_Communes = async (code: string) => {
  try {
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
      FROM postgis."communes" WHERE epci=${code};`
    console.timeEnd("Query Execution Time");
    // console.log(code)
    // console.log(value)
    return value;
   } catch(error) {
      console.error(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
};
  


