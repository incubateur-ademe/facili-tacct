'use server';
import { Agriculture } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaPostgres } from '../db';

export const GetAgriculture = async (
  code: string,
  libelle: string,
  type: string
): Promise<Agriculture[]> => {
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
    setTimeout(() => {resolve([])}, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'ept' || type === 'petr') {
        const value = await PrismaPostgres.agriculture.findMany({
          where: {
            [column]: libelle
          }
        });
        return value;
      } else if (type === 'commune') {
        const commune = await PrismaPostgres.collectivites_searchbar.findFirst({
          where: {
            code_geographique: code
          }
        });
        const value = await PrismaPostgres.agriculture.findMany({
          where: {
            epci: commune?.epci ?? ''
          }
        });
        return value;
      } else {
        const value = await PrismaPostgres.agriculture.findMany({
          where: {
            [column]: code
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      // PrismaPostgres.$disconnect();
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
