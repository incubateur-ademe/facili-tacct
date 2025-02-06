'use server';

import { QualiteSitesBaignade, RessourcesEau } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();
export const GetRessourceEau = async (
  code: string
): Promise<RessourcesEau[]> => {
  try {
    console.time('Query Execution Time QUALITE EAUX BAIGNADE');
    const departement = await PrismaPostgres.ressources_eau.findFirst({
      where: {
        epci: code
      }
    });
    const value = await PrismaPostgres.ressources_eau.findMany({
      where: {
        departement: departement?.departement
      }
    });
    console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetQualiteEauxBaignade = async (
  code: string
): Promise<QualiteSitesBaignade[]> => {
  try {
    console.time('Query Execution Time QUALITE EAUX BAIGNADE');
    const departement = await PrismaPostgres.collectivites_searchbar.findFirst({
      where: {
        code_epci: code
      }
    });
    const value = await PrismaPostgres.qualite_sites_baignade.findMany({
      where: {
        DEP_NUM: departement?.departement
      }
    });
    console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
