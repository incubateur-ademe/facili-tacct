'use server';

import { InconfortThermique } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../db';

export const GetInconfortThermiqueExport = async (
  code: string | undefined,
  libelle: string,
  type: string
): Promise<InconfortThermique[]> => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 5000)
  );
  const column = ColumnCodeCheck(type);
  const dbQuery = (async () => {
    try {
      // Fast existence check
      const exists = await prisma.inconfort_thermique.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        const value = await prisma.inconfort_thermique.findMany({
          where: {
            [column]: type === 'petr' || type === 'ept' ? libelle : code
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  const result = Promise.race([dbQuery, timeoutPromise]);
  return result;
};
