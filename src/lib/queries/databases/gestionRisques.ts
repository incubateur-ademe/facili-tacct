'use server';

import { ArreteCatNat, IncendiesForet } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { prisma } from '../redis';

export const GetArretesCatnat = async (
  code: string,
  libelle: string,
  type: string
): Promise<ArreteCatNat[]> => {
  const column =
    type === 'pnr'
      ? 'code_pnr'
      : type === 'petr'
        ? 'libelle_petr'
        : type === 'ept' && eptRegex.test(libelle)
          ? 'ept'
          : type === 'epci' && !eptRegex.test(libelle)
            ? 'epci'
            : type === 'departement'
              ? 'departement'
              : 'code_geographique';
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      const value = await prisma.arretes_catnat.findMany({
        where: {
          [column]: type === 'petr' || type === 'ept' ? libelle : code
        }
      });
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

export const GetIncendiesForet = async (
  code: string,
  libelle: string,
  type: string
): Promise<IncendiesForet[]> => {
  const column =
    type === 'pnr'
      ? 'code_pnr'
      : type === 'petr'
        ? 'libelle_petr'
        : type === 'ept' && eptRegex.test(libelle)
          ? 'ept'
          : type === 'epci' && !eptRegex.test(libelle)
            ? 'epci'
            : type === 'departement'
              ? 'departement'
              : type === 'commune'
                ? 'code_geographique'
                : '';
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'petr' || type === 'ept') {
        const value = await prisma.feux_foret.findMany({
          where: {
            [column]: libelle
          }
        });
        return value;
      } else {
        const value = await prisma.feux_foret.findMany({
          where: {
            [column]: code
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
