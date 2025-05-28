'use server';

import { InconfortThermique } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { prisma } from '../redis';

export const GetInconfortThermique = async (
  code: string | undefined,
  libelle: string,
  type: string
): Promise<InconfortThermique[]> => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 2000)
  );
  console.time('GetInconfortThermique');
  const dbQuery = (async () => {
    try {
      if (type === 'ept' && eptRegex.test(libelle)) {
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            epci: '200054781'
          }
        });
        return value;
      } else if (type === 'commune') {
        const value = await prisma.$queryRaw`
          SELECT *
          FROM inconfort_thermique
          WHERE epci = (
            SELECT epci
            FROM inconfort_thermique
            WHERE code_geographique = ${code}
            LIMIT 1
          )
          LIMIT 200
        `;
        return value as InconfortThermique[];
      } else if (type === 'petr') {
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            libelle_petr: libelle
          },
          take: 1000
        });
        return value;
      } else if (type === 'pnr') {
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            code_pnr: code
          },
          take: 1000
        });
        return value;
      } else if (type === 'departement') {
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            departement: code
          },
          take: 1000
        });
        return value;
      } else if (type === 'epci') {
        const departement = await prisma.inconfort_thermique.findFirst({
          where: {
            epci: code
          }
        });
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            departement: departement?.departement
          },
          take: 750
        });
        return value;
      } else return [];
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  const result = Promise.race([dbQuery, timeoutPromise]);
  console.timeEnd('GetInconfortThermique');
  return result;
};
