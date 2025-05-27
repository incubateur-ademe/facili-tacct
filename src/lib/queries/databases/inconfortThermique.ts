'use server';

import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaPostgres } from '../db';

export const GetInconfortThermique = async (
  code: string | undefined,
  libelle: string,
  type: string
) => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'ept' && eptRegex.test(libelle)) {
        const value = await PrismaPostgres.inconfort_thermique.findMany({
          where: {
            epci: '200054781'
          }
        });
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
          },
          take: 200
        });
        return value;
      } else if (type === 'petr') {
        const value = await PrismaPostgres.inconfort_thermique.findMany({
          where: {
            libelle_petr: libelle
          },
          take: 1000
        });
        return value;
      } else if (type === 'pnr') {
        const value = await PrismaPostgres.inconfort_thermique.findMany({
          where: {
            code_pnr: code
          },
          take: 1000
        });
        return value;
      } else if (type === 'departement') {
        const value = await PrismaPostgres.inconfort_thermique.findMany({
          where: {
            departement: code
          },
          take: 1000
        });
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
          },
          take: 750
        });
        return value;
      } else return [];
    } catch (error) {
      console.error(error);
      // PrismaPostgres.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  const result = Promise.race([dbQuery, timeoutPromise]);
  return result;
};
