'use server';

import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetInconfortThermique = async (
  code: string | undefined,
  libelle: string,
  type: string
) => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetInconfortThermique: Timeout reached (5 seconds), returning empty array.'
      );
      resolve([]);
    }, 5000)
  );
  const dbQuery = (async () => {
    try {
      console.time('Query Execution Time INCONFORT THERMIQUE');
      if (type === 'ept' && eptRegex.test(libelle)) {
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
      } else if (type === 'epci') {
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
      } else return [];
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      throw new Error('Internal Server Error');
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
