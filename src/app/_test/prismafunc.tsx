import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const Get_Prisma = async () => {
  try {
    const get_request_from_pg = await PrismaPostgres.$queryRaw`SELECT pk, shape_length, shape_area, ST_AsText(geometry) geometry FROM postgis."clc_paris2" WHERE pk = ${1}`
    console.log('get_request_from_pg', get_request_from_pg)

  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await PrismaPostgres.$disconnect();
  }

  const value = await PrismaPostgres.clc_paris2.findMany({
    where: {
      pk: {
        lt: 4,
      },
    },
  });
  // console.log(value)
  return value;
};

// Get_Prisma()
//   .then(async () => {
//     await PrismaPostgres.$disconnect();
//   })
//   .catch(async e => {
//     console.error(e);
//     await PrismaPostgres.$disconnect();
//     process.exit(1);
//   });


