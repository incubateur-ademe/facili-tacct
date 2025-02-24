'use server';

import { GestionRisques, IncendiesForet } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetGestionRisques = async (
  code: string
): Promise<GestionRisques[]> => {
  try {
    console.time('Query Execution Time GESTIONRISQUES');
    const value = await PrismaPostgres.gestion_risques.findMany({
      where: {
        OR: [{ epci: code }, { code_geographique: code }]
      }
    });
    console.timeEnd('Query Execution Time GESTIONRISQUES');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetIncendiesForet = async (
  code: string
): Promise<IncendiesForet[]> => {
  try {
    console.time('Query Execution Time GESTIONRISQUES');
    const value = await PrismaPostgres.incendies_foret.findMany({
      where: {
        OR: [{ epci: code }, { code_geographique: code }]
      }
    });
    console.timeEnd('Query Execution Time GESTIONRISQUES');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
