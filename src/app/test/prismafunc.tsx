import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const Get_Prisma = async () => {

  // const moule = await PrismaPostgres.$queryRaw`WITH src as (select geometry::text) select st_asText(trim(txt)) from src;`
  const moule = await PrismaPostgres.$queryRaw`SELECT (geometry::text) AS src FROM databases.clc_paris WHERE pk = ${1}`
  
  // const moule = await PrismaPostgres.$queryRaw`SELECT cast(geometry.ST_AsText AS varchar(150)) AS wkt FROM databases.clc_paris WHERE pk = ${1};`

  // const moule = await PrismaPostgres.$queryRaw`SELECT 'SRID=4;POINT(0 0)'::geometry;`
  console.log('moule', moule)

  const value = await PrismaPostgres.clc_paris.findMany({
    where: {
      pk: {
        lt: 9,
      },
    },
  });
  // console.log(value)
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


