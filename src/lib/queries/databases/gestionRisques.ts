'use server';

import { ArreteCatNat, IncendiesForet } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

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
  try {
    console.time('Query Execution Time GESTIONRISQUES');
    const value = await PrismaPostgres.arretes_catnat.findMany({
      where: {
        [column]: (type === 'petr' || type === "ept") ? libelle : code
      }
    });
    console.timeEnd('Query Execution Time GESTIONRISQUES');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
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
  try {
    console.time('Query Execution Time GESTIONRISQUES');
    if (type === "petr" || type === "ept") {
      const value = await PrismaPostgres.feux_foret.findMany({
        where: {
          [column]: libelle
        }
      });
      console.timeEnd('Query Execution Time GESTIONRISQUES');
      return value;
    } else {
      const value = await PrismaPostgres.feux_foret.findMany({
        where: {
          [column]: code
        }
      });
      console.timeEnd('Query Execution Time GESTIONRISQUES');
      return value;
    }
    
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};
