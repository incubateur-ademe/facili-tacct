'use server';
import { Agriculture, AgricultureNew } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetAgriculture = async (
  code: string,
  libelle: string,
  type: string
): Promise<Agriculture[]> => {
  try {
    const value = await PrismaPostgres.agriculture.findMany({
      where: {
        EPCI: code
      }
    });
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  } finally {
    await PrismaPostgres.$disconnect();
  }
};

export const GetNewAgriculture = async (
  code: string,
  libelle: string,
  type: string
): Promise<AgricultureNew[]> => {
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
    if (type === 'ept' || type === 'petr') {
      console.time('Query Execution Time AGRICULTURE');
      const value = await PrismaPostgres.agriculture_cleaned.findMany({
        where: {
          [column]: libelle
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE');
      return value;
    } else if (type === 'commune') {
      const commune = await PrismaPostgres.collectivites_searchbar.findFirst({
        where: {
          code_geographique: code
        }
      });
      const value = await PrismaPostgres.agriculture_cleaned.findMany({
        where: {
          epci: commune?.epci ?? ''
        }
      });
      console.timeEnd('Query Execution Time CONSOMMATION NAF');
      return value;
    } else {
      console.time('Query Execution Time AGRICULTURE');
      const value = await PrismaPostgres.agriculture_cleaned.findMany({
        where: {
          [column]: code
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  } finally {
    await PrismaPostgres.$disconnect();
  }
};
