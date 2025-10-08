'use server';
import { AgricultureBio, AOT40, ConsommationNAF } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck, ColumnLibelleCheck } from '../columns';
import { prisma } from '../redis';

export const GetAgricultureBio = async (
  libelle: string,
  type: string,
  code: string
): Promise<AgricultureBio[]> => {
  const column = ColumnLibelleCheck(type);
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 2000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.collectivites_searchbar.findFirst({
        where: { [column]: libelle }
      });
      if (!exists) return [];
      else {
        // if (type === 'pnr') {
        //   return [];
        // } else
        if (type === 'commune') {
          const epci = await prisma.collectivites_searchbar.findFirst({
            select: {
              epci: true
            },
            where: {
              code_geographique: code
            }
          });
          const value = await prisma.agriculture_bio.findMany({
            where: {
              epci: epci?.epci as string
            }
          });
          return value as AgricultureBio[];
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
                  [column]: libelle
                }
              ]
            },
            distinct: ['epci']
          });
          const value = await prisma.agriculture_bio.findMany({
            where: {
              epci: {
                in: territoire.map((t) => t.epci) as string[]
              }
            }
          });
          return value as AgricultureBio[];
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

export const GetConsommationNAF = async (
  code: string,
  libelle: string,
  type: string
): Promise<ConsommationNAF[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 3000)
  );
  const column = ColumnCodeCheck(type);
  const dbQuery = (async () => {
    try {
      console.time('Query Execution Time NAF');
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.consommation_espaces_naf.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        if (type === 'petr' || eptRegex.test(libelle)) {
          const value = await prisma.consommation_espaces_naf.findMany({
            where: {
              [type === 'petr' ? 'libelle_petr' : 'ept']: libelle
            }
          });
          return value;
        } else if (type === 'commune') {
          // Pour diminuer le cache, sous-requête en SQL pour récupérer l'epci
          const value = await prisma.$queryRaw`
          SELECT c.*
          FROM databases.consommation_espaces_naf c
          WHERE c.epci = (
            SELECT cs.epci
            FROM databases.collectivites_searchbar cs
            WHERE cs.code_geographique = ${code}
            LIMIT 1
          )
        `;
          return value as ConsommationNAF[];
        } else {
          const value = await prisma.consommation_espaces_naf.findMany({
            where: {
              [type === 'epci'
                ? 'epci'
                : type === 'pnr'
                  ? 'code_pnr'
                  : type === 'departement'
                    ? 'departement'
                    : '']: code
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
    } finally {
      console.timeEnd('Query Execution Time NAF');
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetAOT40 = async (): Promise<AOT40[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 1500)
  );
  const dbQuery = (async () => {
    try {
      const value = await prisma.aot_40.findMany();
      return value;
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};

// export const GetSurfacesProtegees = async (
//   code: string,
//   libelle: string,
//   type: string
// ): Promise<any[]> => {
//   const timeoutPromise = new Promise<[]>((resolve) =>
//     setTimeout(() => {
//       resolve([]);
//     }, 3000)
//   );
//   const column = ColumnCodeCheck(type);
//   const dbQuery = (async () => {
//     try {
//       // Fast existence check
//       if (!libelle || !type || (!code && type !== 'petr')) return [];
//       const exists = await prisma.surfaces_protegees.findFirst({
//         where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
//       });
//       if (!exists) return [];
//       else {
//         if (type === 'petr' || eptRegex.test(libelle)) {
//           const value = await prisma.surfaces_protegees.findMany({
//             where: {
//               [type === 'petr' ? 'libelle_petr' : 'ept']: libelle
//             }
//           });
//           return value;
//         } else {
//           const value = await prisma.surfaces_protegees.findMany({
//             where: {
//               [column]: type === 'petr' || type === 'ept' ? libelle : code
//             }
//           });
//           return value;
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       // prisma.$disconnect();
//       Sentry.captureException(error);
//       return [];
//     }
//   })();
//   return Promise.race([dbQuery, timeoutPromise]);
// };
