'use server';

import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetError = async () => {
  if (process.env.NODE_ENV !== 'production') {
    try {
      await PrismaPostgres.$queryRaw`SELECT * FROM non_existent_table`;
    } catch (error) {
      console.error('Forced error for testing:', error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
    }
  } else {
    console.warn('Skipping error test query in production environment.');
  }
};
