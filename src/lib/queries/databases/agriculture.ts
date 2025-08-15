'use server';
import { Agriculture, SurfacesAgricolesModel } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import fs from 'fs/promises';
import path from 'path';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetAgricultureLocal = async (
  code: string,
  libelle: string,
  type: string
): Promise<Agriculture[]> => {
  const mockPath = path.resolve(process.cwd(), 'mocks', 'mock-db.json');
  const raw = await fs.readFile(mockPath, 'utf-8');
  const db = JSON.parse(raw);

  const column = ColumnCodeCheck(type);

  if (!libelle || !type || (!code && type !== 'petr')) return [];

  if (type === 'ept' || type === 'petr') {
    return db.databases.agriculture.filter(
      (row: any) => row[column] === libelle
    );
  } else if (type === 'commune') {
    const collectivite = db.databases.collectivites_searchbar.find(
      (c: any) => c.code_geographique === code
    );
    if (!collectivite) return [];
    return db.databases.agriculture.filter(
      (row: any) => row.epci === collectivite.epci
    );
  } else {
    return db.databases.agriculture.filter((row: any) => row[column] === code);
  }
};

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
      if (!libelle || !type || (!code && type !== 'petr')) return [];
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

export const GetSurfacesAgricoles = async (
  code: string,
  libelle: string,
  type: string
): Promise<SurfacesAgricolesModel[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 4000)
  );
  const column = ColumnCodeCheck(type);
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.collectivites_searchbar.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        if (type === 'commune') {
          const epci = await prisma.collectivites_searchbar.findFirst({
            select: {
              epci: true
            },
            where: {
              code_geographique: code
            }
          });
          const value = await prisma.surfaces_agricoles.findMany({
            where: {
              epci: epci?.epci as string
            }
          });
          return value as SurfacesAgricolesModel[];
        } else {
          const territoire = await prisma.collectivites_searchbar.findMany({
            select: {
              epci: true
            },
            where: {
              AND: [
                {
                  epci: { not: null }
                },
                {
                  [column]: type === 'petr' || type === 'ept' ? libelle : code
                }
              ]
            },
            distinct: ['epci']
          });
          const value = await prisma.surfaces_agricoles.findMany({
            where: {
              epci: {
                in: territoire.map((t) => t.epci) as string[]
              }
            }
          });
          return value as SurfacesAgricolesModel[];
        }
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
