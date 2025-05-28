'use server';
import { Agriculture } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetAgriculture = async (
  code: string,
  libelle: string,
  type: string
): Promise<Agriculture[]> => {
  const column = ColumnCodeCheck(type);
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetAgriculture: Timeout reached (2 seconds), returning empty array.'
      );
      resolve([]);
    }, 2000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      const exists = await prisma.agriculture.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        if (type === 'ept' || type === 'petr') {
          const value = await prisma.agriculture.findMany({
            where: {
              [column]: libelle
            }
          });
          return value;
        } else if (type === 'commune') {
          // Pour diminuer le cache, sous-requête en SQL pour récupérer l'epci
          const value = await prisma.$queryRaw`
        SELECT a.*
        FROM agriculture a
        WHERE a.epci = (
          SELECT c.epci
          FROM collectivites_searchbar c
          WHERE c.code_geographique = ${code}
          LIMIT 1
        )
      `;
          return value as Agriculture[];
        } else {
          const value = await prisma.agriculture.findMany({
            where: {
              [column]: code
            }
          });
          return value;
        }
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      // prisma.$disconnect();
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
