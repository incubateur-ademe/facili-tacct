'use server';

import { Patch4 } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';
import { dromRegex } from '../utils/regex';

const PrismaPostgres = new PostgresClient();

export const GetPatch4 = async (
  code: string,
  type: string,
  libelle?: string
): Promise<Patch4 | undefined> => {
  const timeoutPromise = new Promise<Patch4 | undefined>((resolve) =>
    setTimeout(() => {
      resolve(undefined);
    }, 2000)
  );
  console.time("GetPatch4 Execution Time");
  const dbQuery = (async () => {
    try {
      if (!libelle || !type || (!code && type !== 'petr')) return undefined;
      if (type === 'commune' || type === 'epci') {
        const departement =
          await PrismaPostgres.collectivites_searchbar.findFirst({
            where: {
              OR: [{ code_geographique: code }, { epci: code }],
              departement: {
                not: null
              }
            },
          });
        // Exclusion des DROM puisque le patch4 ne les inclut pas
        if (
          departement &&
          departement.departement &&
          !dromRegex.test(departement.departement)
        ) {
          const value = await PrismaPostgres.patch4c.findFirst({
            where: {
              code_geographique: code
            }
          });
          return value == null ? undefined : value;
        }
      } else if (type === "ept") { 
        const value =
          await PrismaPostgres.patch4c.findFirst({
            where: {
              code_geographique: libelle
            }
          });
        return value == null ? undefined : value;
      } else return undefined;
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      // PrismaPostgres.$disconnect();
      return undefined;
    }
  })();
  const result = await Promise.race([dbQuery, timeoutPromise]);
  console.timeEnd("GetPatch4 Execution Time");
  if (result === undefined) {
    console.log('GetPatch4: Timeout reached (2 seconds), returning undefined.');
  }
  return result;
};
