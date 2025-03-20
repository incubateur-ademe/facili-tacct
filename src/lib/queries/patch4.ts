'use server';

import { Patch4 } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetPatch4 = async (code: string): Promise<Patch4[]> => {
  try {
    // console.time(`PATCH4`);
    const value = await PrismaPostgres.patch4c.findMany({
      where: {
        code_geographique: code
      }
    });
    // console.timeEnd(`PATCH4`);
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
