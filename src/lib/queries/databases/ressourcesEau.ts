'use server';

import { QualiteSitesBaignade, RessourcesEau } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaPostgres } from '../db';

export const GetRessourceEau = async (
  code: string,
  libelle: string,
  type: string
): Promise<RessourcesEau[]> => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>(resolve => setTimeout(() => {
    resolve([]);
  }, 6000));
  const dbQuery = (async () => {
    try {
      if (type === 'commune') {
        console.time('Query Execution Time RESSOURCES EAUX');
        const departement = await PrismaPostgres.ressources_eau.findFirst({
          where: {
            code_geographique: code
          }
        });
        const value = await PrismaPostgres.ressources_eau.findMany({
          where: {
            departement: departement?.departement
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
        const value = await PrismaPostgres.ressources_eau.findMany({
          where: {
            departement: departement?.departement
          }
        });
        console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
        return value;
      } else if (type === 'petr') {
        console.time('Query Execution Time RESSOURCES EAUX');
        const departement = await PrismaPostgres.ressources_eau.findFirst({
          where: {
            libelle_petr: libelle
          }
        });
        const value = await PrismaPostgres.ressources_eau.findMany({
          where: {
            departement: departement?.departement
          }
        });
        console.timeEnd('Query Execution Time RESSOURCES EAUX');
        return value;
      } else if (type === 'ept') {
        console.time('Query Execution Time RESSOURCES EAUX');
        const departement = await PrismaPostgres.ressources_eau.findFirst({
          where: {
            ept: libelle
          }
        });
        const value = await PrismaPostgres.ressources_eau.findMany({
          where: {
            departement: departement?.departement
          }
        });
        console.timeEnd('Query Execution Time RESSOURCES EAUX');
        return value;
      } else if (type === 'departement') {
        console.time('Query Execution Time RESSOURCES EAUX');
        const value = await PrismaPostgres.ressources_eau.findMany({
          where: {
            departement: code
          }
        });
        console.timeEnd('Query Execution Time RESSOURCES EAUX');
        return value;
      } else return [];
    } catch (error) {
      console.error(error);
      // PrismaPostgres.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
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
    // PrismaPostgres.$disconnect();
    Sentry.captureException(error);
    return [];
  }
};
