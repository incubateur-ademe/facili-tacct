'use server';
import { AgricultureBio, AOT40, ConsommationNAF } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaPostgres } from '../db';

export const GetAgricultureBio = async (
  libelle: string,
  type: string
): Promise<AgricultureBio[]> => {
  const column =
    type === 'petr'
      ? 'libelle_petr'
      : type === 'ept' && eptRegex.test(libelle)
        ? 'ept'
        : type === 'epci' && !eptRegex.test(libelle)
          ? 'libelle_epci'
          : type === 'departement'
            ? 'libelle_departement'
            : 'libelle_geographique';
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'pnr') {
        return [];
      } else {
        const territoire =
          await PrismaPostgres.collectivites_searchbar.findMany({
            select: {
              epci: true
            },
            where: {
              AND: [
                {
                  epci: { not: null }
                },
                {
                  [column]: libelle
                }
              ]
            },
            distinct: ['epci']
          });
        const value = await PrismaPostgres.agriculture_bio.findMany({
          where: {
            epci: {
              in: territoire.map((t) => t.epci) as string[]
            }
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      // PrismaPostgres.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetConsommationNAF = async (
  code: string,
  libelle: string,
  type: string
): Promise<ConsommationNAF[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'petr' || eptRegex.test(libelle)) {
        const value = await PrismaPostgres.consommation_espaces_naf.findMany({
          where: {
            [type === 'petr' ? 'libelle_petr' : 'ept']: libelle
          }
        });
        return value;
      } else if (type === 'commune') {
        const commune = await PrismaPostgres.collectivites_searchbar.findFirst({
          where: {
            code_geographique: code
          }
        });
        const value = await PrismaPostgres.consommation_espaces_naf.findMany({
          where: {
            epci: commune?.epci ?? ''
          }
        });
        return value;
      } else {
        const value = await PrismaPostgres.consommation_espaces_naf.findMany({
          where: {
            [type === 'epci'
              ? 'epci'
              : type === 'pnr'
                ? 'code_pnr'
                : type === 'departement'
                  ? 'departement'
                  : '']: code
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      // PrismaPostgres.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetAOT40 = async (): Promise<AOT40[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      const value = await PrismaPostgres.aot_40.findMany();
      return value;
    } catch (error) {
      console.error(error);
      // PrismaPostgres.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
