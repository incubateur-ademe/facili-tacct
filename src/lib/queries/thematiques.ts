'use server';

import {
  AgricultureBio,
  Biodiversite,
  InconfortThermique
} from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetInconfortThermique = async (
  code: string
): Promise<InconfortThermique[]> => {
  try {
    console.time('Query Execution Time INCONFORT');
    const value = await PrismaPostgres.inconfort_thermique.findMany({
      where: {
        OR: [{ epci: code }, { code_geographique: code }]
      }
    });
    console.timeEnd('Query Execution Time INCONFORT');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetInconfortThermiqueDepartment = async (code: string) => {
  try {
    console.time('Query Execution Time INCONFORT DEPARTEMENT');
    if (code === '200054781') {
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          OR: [
            { departement: '75' },
            { departement: '91' },
            { departement: '92' },
            { departement: '93' },
            { departement: '94' },
            { departement: '95' }
          ]
        }
      });
      console.timeEnd('Query Execution Time INCONFORT DEPARTEMENT');
      return value;
    } else {
      const departement = await PrismaPostgres.inconfort_thermique.findFirst({
        where: {
          epci: code
        }
      });
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          departement: departement?.departement
        }
      });
      console.timeEnd('Query Execution Time INCONFORT DEPARTEMENT');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetBiodiversite = async (
  code: string
): Promise<Biodiversite[]> => {
  try {
    console.time('Query Execution Time BIODIVERSITE');
    const value = await PrismaPostgres.biodiversite.findMany({
      where: {
        AND: [
          { epci: code },
          {
            type_touristique: {
              not: null
            }
          }
        ]
      }
    });
    console.timeEnd('Query Execution Time BIODIVERSITE');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetAgricultureBio = async (
  code: string
): Promise<AgricultureBio[]> => {
  try {
    const value = await PrismaPostgres.agriculture_bio.findMany({
      where: {
        epci: code
      }
    });
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
