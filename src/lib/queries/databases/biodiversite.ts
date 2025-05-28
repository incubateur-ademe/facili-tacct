'use server';
import { AgricultureBio, AOT40, ConsommationNAF } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
// import { prisma } from '../db';
import { prisma } from '../redis';

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
    }, 2000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'pnr') {
        return [];
      } else {
        // const value = await prisma.agriculture_bio_with_territoire.findMany({
        //   where: {
        //     AND: [
        //       { epci: { not: null } },
        //       { [column]: libelle }
        //     ]
        //   }
        // });
        const territoire = await prisma.collectivites_searchbar.findMany({
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
        const value = await prisma.agriculture_bio.findMany({
          where: {
            epci: {
              in: territoire.map((t) => t.epci) as string[]
            }
          }
        });
        return value as AgricultureBio[];
      }
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
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
        const value = await prisma.consommation_espaces_naf.findMany({
          where: {
            [type === 'petr' ? 'libelle_petr' : 'ept']: libelle
          }
        });
        return value;
      } else if (type === 'commune') {
        // Pour diminuer le cache, sous-requête en SQL pour récupérer l'epci
        const value = await prisma.$queryRaw`
        SELECT c.*
        FROM consommation_espaces_naf c
        WHERE c.epci = (
          SELECT cs.epci
          FROM collectivites_searchbar cs
          WHERE cs.code_geographique = ${code}
          LIMIT 1
        )
      `;
        return value as ConsommationNAF[];
      } else {
        const value = await prisma.consommation_espaces_naf.findMany({
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
      // prisma.$disconnect();
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
    }, 1500)
  );
  const dbQuery = (async () => {
    try {
      const value = await prisma.aot_40.findMany();
      return value;
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
