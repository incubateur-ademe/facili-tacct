'use server';

import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetInconfortThermique = async (
  code: string | undefined,
  libelle: string,
  type: string
) => {
  try {
    console.time('Query Execution Time INCONFORT THERMIQUE');
    const re = new RegExp('T([1-9]|1[0-2])\\b'); //check if T + nombre entre 1 et 12
    if (type === 'ept' && re.test(libelle)) {
      //pour les ept
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          epci: '200054781'
        }
      });
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
      return value;
    } else if (type === 'commune') {
      const commune = await PrismaPostgres.inconfort_thermique.findFirst({
        where: {
          code_geographique: code
        }
      });
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          epci: commune?.epci
        }
      });
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
      return value;
    } else if (type === 'petr') {
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          libelle_petr: libelle
        }
      });
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
      return value;
    } else if (type === 'pnr') {
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          code_pnr: code
        }
      });
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
      return value;
    } else if (type === 'departement') {
      const value = await PrismaPostgres.inconfort_thermique.findMany({
        where: {
          departement: code
        }
      });
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
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
      console.timeEnd('Query Execution Time INCONFORT THERMIQUE');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
