'use server';

import { Patch4 } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';
import { dromRegex } from '../utils/regex';

const PrismaPostgres = new PostgresClient();

export const GetPatch4 = async (
  code: string,
  type: string
): Promise<Patch4 | undefined> => {
  const timeoutPromise = new Promise<Patch4 | undefined>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetSearchBar: Timeout reached (3 seconds), returning empty array.'
      );
      resolve(undefined);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'commune' || type === 'epci') {
        const departement =
          await PrismaPostgres.collectivites_searchbar.findFirst({
            where: {
              OR: [{ code_geographique: code }, { epci: code }]
            }
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
      } else return undefined;
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      throw new Error('Internal Server Error');
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
