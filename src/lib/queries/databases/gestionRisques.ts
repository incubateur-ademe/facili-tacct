'use server';

import { ArreteCatNat, GestionRisques, IncendiesForet } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
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

export const GetArretesCatnat = async (
  code: string,
  libelle: string,
  type: string
): Promise<ArreteCatNat[]> => {
  const re = new RegExp('T([1-9]|1[0-2])\\b'); //check if T + nombre entre 1 et 12
  const column =
    type === 'pnr'
      ? 'code_pnr'
      : type === 'petr'
        ? 'libelle_petr'
        : type === 'ept' && re.test(libelle)
          ? 'ept'
          : type === 'epci' && !re.test(libelle)
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
    process.exit(1);
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
    process.exit(1);
  }
};
