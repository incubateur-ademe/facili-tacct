'use server';

import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetError = async () => {
  try {
    await PrismaPostgres.$queryRaw`SELECT * FROM non_existent_table`;
  } catch (error) {
    console.error('Forced error for testing:', error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
