import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

//Paris lat : 48.864716 long : 2.349014

export const Get_Prisma = async () => {
  console.time("Query Execution Time");
// your database query here
  const value = await PrismaPostgres.$queryRaw`
  SELECT 
  pk, 
  label3, 
  ST_AsGeoJSON(geometry) geometry, 
  ST_AsText(ST_Centroid(geometry)) centroid
  FROM postgis."clc_2018" 
  WHERE label3=${'Salines'} ORDER BY geometry
  `
  console.timeEnd("Query Execution Time");

  //ST_DWithin(geometry, 'SRID=4326;POINT(42.349014 -79.864716)', 5)
  //ST_SetSRID(ST_MakePoint(2.349014, 48.864716),4326)
  //ST_DWithin(geometry, 'SRID=4326, Point(2.349014, 48.864716)', 1000)
  //label3=${'Salines'}
  // const value = await PrismaPostgres.$queryRaw`SELECT epci, code_commune, precarite_logement, ST_AsGeoJSON(geometry) geometry FROM postgis."communes_precarite" WHERE epci=${'200042497'}`
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


