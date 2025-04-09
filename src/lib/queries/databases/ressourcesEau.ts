'use server';

import { QualiteSitesBaignade, RessourcesEau } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();
export const GetRessourceEau = async (
  code: string,
  libelle: string,
  type: string
): Promise<RessourcesEau[]> => {
  try {
    if (code === 'ZZZZZZZZZ') {
      console.time('Query Execution Time RESSOURCES EAUX');
      const value = await PrismaPostgres.ressources_eau.findMany({
        where: {
          epci: code
        }
      });
      console.timeEnd('Query Execution Time RESSOURCES EAUX');
      return value;
    } else if (type === 'epci') {
      console.time('Query Execution Time PRELEVEMENT EAUX');
      const departement = await PrismaPostgres.ressources_eau.findFirst({
        where: {
          epci: code
        }
      });
      console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
      console.time('Query Execution Time PRELEVEMENT EAUX 2');

      const value = await PrismaPostgres.ressources_eau.findMany({
        where: {
          departement: departement?.departement
        }
      });
      console.timeEnd('Query Execution Time PRELEVEMENT EAUX 2');

      return value;
    } else return [];
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetQualiteEauxBaignade = async (
  code: string,
  libelle: string,
  type: string
): Promise<QualiteSitesBaignade[]> => {
  try {
    const column =
      type === 'pnr'
        ? 'libelle_pnr'
        : type === 'petr'
          ? 'libelle_petr'
          : type === 'ept' && eptRegex.test(libelle)
            ? 'ept'
            : type === 'epci' && !eptRegex.test(libelle)
              ? 'libelle_epci'
              : type === 'departement'
                ? 'libelle_departement'
                : 'libelle_geographique';
    if (code === 'ZZZZZZZZZ') {
      console.time('Query Execution Time QUALITE EAUX BAIGNADE');
      const value = await PrismaPostgres.qualite_sites_baignade.findMany({
        where: {
          OR: [
            { COMMUNE: "ile-d'yeu (l')" },
            { COMMUNE: 'ile-de-brehat' },
            { COMMUNE: 'ouessant' },
            { COMMUNE: 'ile-de-sein' }
          ]
        }
      });
      console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
      return value;
    } else {
      console.time('Query Execution Time QUALITE EAUX BAIGNADE');
      const departement = await PrismaPostgres.collectivites_searchbar.findMany(
        {
          where: {
            AND: [
              {
                departement: { not: null }
              },
              {
                [column]: libelle
              }
            ]
          },
          distinct: ['departement']
        }
      );
      const value = await PrismaPostgres.qualite_sites_baignade.findMany({
        where: {
          DEP_NUM: {
            in: departement
              .map((d) => d.departement)
              .filter((d): d is string => d !== null)
          }
        }
      });
      console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
