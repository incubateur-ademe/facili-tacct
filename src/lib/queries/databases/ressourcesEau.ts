'use server';

import { QualiteSitesBaignade, RessourcesEau } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
// import { PrismaPostgres } from '../db';
import { ColumnCodeCheck, ColumnLibelleCheck } from '../columns';
import { prisma } from '../redis';

export const GetRessourceEau = async (
  code: string,
  libelle: string,
  type: string
): Promise<RessourcesEau[]> => {
  const column = ColumnCodeCheck(type);
  //race Promise pour éviter un crash de la requête lorsqu'elle est trop longue
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 6000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      const exists = await prisma.ressources_eau.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code },
        select: { departement: true }
      });
      if (!exists) return [];
      else {
        if (type === 'commune') {
          console.time('Query Execution Time PRELEVEMENT EAUX');
          const value = await prisma.$queryRaw`
          SELECT *
          FROM databases."ressources_eau"
          WHERE departement = (
            SELECT departement
            FROM databases."ressources_eau"
            WHERE code_geographique = ${code}
            LIMIT 1
          )
        `;
          console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
          return value as RessourcesEau[];
        } else if (type === 'epci') {
          console.time('Query Execution Time PRELEVEMENT EAUX');
          const value = await prisma.$queryRaw`
          SELECT *
          FROM databases."ressources_eau"
          WHERE departement = (
            SELECT departement
            FROM databases."ressources_eau"
            WHERE epci = ${code}
            LIMIT 1
          )
        `;
          console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
          return value as RessourcesEau[];
        } else if (type === 'petr') {
          console.time('Query Execution Time PRELEVEMENT EAUX');
          // await prisma.$executeRaw`SET statement_timeout = 1000;`;
          const value = await prisma.$queryRaw`
          SELECT *
          FROM databases."ressources_eau"
          WHERE departement = (
            SELECT departement
            FROM databases."ressources_eau"
            WHERE libelle_petr = ${libelle}
            LIMIT 1
          )
        `;
          console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
          return value as RessourcesEau[];
        } else if (type === 'ept') {
          console.time('Query Execution Time PRELEVEMENT EAUX');
          const value = await prisma.$queryRaw`
          SELECT *
          FROM databases."ressources_eau"
          WHERE departement = (
            SELECT departement
            FROM databases."ressources_eau"
            WHERE ept = ${libelle}
            LIMIT 1
          )
        `;
          console.timeEnd('Query Execution Time PRELEVEMENT EAUX');
          return value as RessourcesEau[];
        } else if (type === 'departement') {
          console.time('Query Execution Time RESSOURCES EAUX');
          const value = await prisma.ressources_eau.findMany({
            where: {
              departement: code
            }
          });
          console.timeEnd('Query Execution Time RESSOURCES EAUX');
          return value;
        } else return [];
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

export const GetQualiteEauxBaignade = async (
  code: string,
  libelle: string,
  type: string
): Promise<QualiteSitesBaignade[]> => {
  const column = ColumnLibelleCheck(type);
  try {
    // Fast existence check
    const exists = await prisma.collectivites_searchbar.findFirst({
      where: { [column]: libelle }
    });
    if (!exists) return [];
    else {
      if (code === 'ZZZZZZZZZ') {
        console.time('Query Execution Time QUALITE EAUX BAIGNADE');
        const value = await prisma.qualite_sites_baignade.findMany({
          where: {
            OR: [
              { COMMUNE: "ile-d'yeu (l')" },
              { COMMUNE: 'ile-de-brehat' },
              { COMMUNE: 'ouessant' },
              { COMMUNE: 'ile-de-sein' }
            ]
          }
        });
        console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
        return value;
      } else {
        console.time('Query Execution Time QUALITE EAUX BAIGNADE');
        const departement = await prisma.collectivites_searchbar.findMany({
          where: {
            AND: [
              {
                departement: { not: null }
              },
              {
                [column]: libelle
              }
            ]
          },
          distinct: ['departement']
        });
        const value = await prisma.qualite_sites_baignade.findMany({
          where: {
            DEP_NUM: {
              in: departement
                .map((d) => d.departement)
                .filter((d): d is string => d !== null)
            }
          }
        });
        console.timeEnd('Query Execution Time QUALITE EAUX BAIGNADE');
        return value;
      }
    }
  } catch (error) {
    console.error(error);
    // prisma.$disconnect();
    Sentry.captureException(error);
    return [];
  }
};
