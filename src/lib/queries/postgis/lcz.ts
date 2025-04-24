'use server';

import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetLCZBayonne = async (): Promise<any[]> => {
  try {
    console.time(`Query Execution Time LCZ BAYONNE`);
    const value = await PrismaPostgres.$queryRaw<any[]>`
      SELECT 
      hre, 
      are,
      bur,
      ror,
      bsr, 
      war,
      ver,
      vhr,
      lcz,
      lcz_int,
      ST_AsGeoJSON(geometry) geometry 
      FROM postgis."lcz_bayonne_test";`;
    console.timeEnd(`Query Execution Time LCZ BAYONNE`);
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};
