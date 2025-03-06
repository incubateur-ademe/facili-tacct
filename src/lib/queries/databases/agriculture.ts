'use server';
import { Agriculture } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetAgriculture = async (code: string): Promise<Agriculture[]> => {
  try {
    console.time('Query Execution Time AGRICULTURE');
    const value = await PrismaPostgres.agriculture.findMany({
      where: {
        EPCI: code
      }
    });
    console.timeEnd('Query Execution Time AGRICULTURE');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
