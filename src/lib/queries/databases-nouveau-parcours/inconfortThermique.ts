'use server';

import { InconfortThermique } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetInconfortThermique = async (
  code: string,
  libelle: string,
  type: string
): Promise<InconfortThermique[]> => {
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const column = ColumnCodeCheck(type);
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.inconfort_thermique.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        const value = await prisma.surfaces_protegees.findMany({
          where: {
            [column]: type === 'petr' || type === 'ept' ? libelle : code
          }
        });
        return value as unknown as InconfortThermique[];
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

export const GetLczCouverture = async (
  code: string,
  libelle: string,
  type: string
): Promise<boolean> => {
  const column = ColumnCodeCheck(type);
  try {
    if (!libelle || !type || (!code && type !== 'petr')) return false;
    const exists = await prisma.lcz_couverture.findFirst({
      where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
    });
    if (exists) return true;
    else return false;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return false;
  }
};
