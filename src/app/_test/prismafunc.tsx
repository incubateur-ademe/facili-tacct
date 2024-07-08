import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const Get_Prisma = async() => {
  const value = await PrismaPostgres.clc_paris.findMany(({
    where: {
      pk: {
        lt: 9,
      },
    },
  }))

  return (value);
}

Get_Prisma()
  .then(async () => {
    await PrismaPostgres.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await PrismaPostgres.$disconnect()
    process.exit(1)
  })
