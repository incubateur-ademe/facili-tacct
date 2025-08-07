'use server';

import { ArreteCatNat, IncendiesForet, RGAdb } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetArretesCatnat = async (
  code: string,
  libelle: string,
  type: string
): Promise<ArreteCatNat[]> => {
  const column = ColumnCodeCheck(type);
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.arretes_catnat.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        const value = await prisma.arretes_catnat.findMany({
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
  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetIncendiesForet = async (
  code: string,
  libelle: string,
  type: string
): Promise<IncendiesForet[]> => {
  const column = ColumnCodeCheck(type);
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 2000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.feux_foret.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        if (type === 'petr' || type === 'ept') {
          const value = await prisma.feux_foret.findMany({
            where: {
              [column]: libelle
            }
          });
          return value;
        } else {
          const value = await prisma.feux_foret.findMany({
            where: {
              [column]: code
            }
          });
          return value;
        }
      }
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetRga = async (
  code: string,
  libelle: string,
  type: string
): Promise<RGAdb[]> => {
  const column = type ? ColumnCodeCheck(type) : '';
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 12000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      const exists = await prisma.rga.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (
        !libelle ||
        !type ||
        (!code && type !== 'petr') ||
        libelle === 'null' ||
        (code === 'null' && type !== 'petr')
      )
        return [];
      else if (!exists) return [];
      else if (type === 'commune') {
        const value = await prisma.$queryRaw`
          SELECT *
          FROM "databases"."rga"
          WHERE epci = (
            SELECT epci
            FROM "databases"."rga"
            WHERE code_geographique = ${code}
            LIMIT 1
          )
        `;
        return value as RGAdb[];
      } else if (type === 'epci') {
        const value = await prisma.$queryRaw`
          SELECT *
          FROM "databases"."rga"
          WHERE departement IN (
            SELECT departement
            FROM "databases"."rga"
            WHERE epci = ${code}
          )
        `;
        return value as RGAdb[];
      } else {
        const value = await prisma.rga.findMany({
          where: {
            [column]: type === 'petr' || type === 'ept' ? libelle : code
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
