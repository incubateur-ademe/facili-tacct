"use server";

import * as Sentry from "@sentry/nextjs";
import { PrismaClient as PostgresClient } from "../../generated/client";
import { CarteCommunes, CollectivitesSearchbar } from "../postgres/models";

const PrismaPostgres = new PostgresClient();

export const GetCollectivite = async (collectivite: string): Promise<CollectivitesSearchbar[]> => {
  try {
    console.time("Query Execution Time");
    const variableCollectivite = "%" + collectivite + "%";
    const variableCollectiviteNumber = collectivite + "%";
    if (isNaN(parseInt(collectivite))) {
      const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
      SELECT 
      search_code,
      coordinates,
      search_libelle,
      code_epci, 
      libelle_epci,
      libelle_commune,
      code_commune,
      departement,
      region
      FROM databases."collectivites_searchbar" WHERE unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) LIMIT 20;`; // OR libelle_epci ILIKE ${variableEpci} 
      console.timeEnd("Query Execution Time");
      // console.log(value);
      if (value.length > 0) {
        return value 
      } else { 
        const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
        SELECT 
        search_code,
        coordinates,
        search_libelle,
        code_epci, 
        libelle_epci,
        libelle_commune,
        code_commune,
        departement,
        region
        FROM databases."collectivites_searchbar" WHERE unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', ${variableCollectivite}) LIMIT 20;`; 
        return value;
      }
    } else if (typeof parseInt(collectivite) === "number") {
      const value = await PrismaPostgres.collectivites_searchbar.findMany({
        take: 20,
        where: { search_code:
          { 
            startsWith: variableCollectiviteNumber
          } 
        },
      });
      console.timeEnd("Query Execution Time");
      return value as CollectivitesSearchbar[];
    } else {
      Sentry.captureMessage(`Collectivite ${collectivite} not found`);
      return [
        {
          code_commune: "",
          coordinates: "",
          search_code: "",
          search_libelle: "",
          code_epci: "",
          libelle_commune: "",
          libelle_epci: "",
          departement: "",
          region: "",
        },
      ];
    }
  } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
}

// Not using Prisma because unaccent unsupported
// export const GetCollectivite2 = async (collectivite: string): Promise<CollectivitesSearchbar[]> => {
//   try {
//     console.time("Query Execution Time");
//     const variableCollectivite = "%" + collectivite + "%";
//     const variableCollectiviteReplace = "%" + collectivite.replace(' ', '-') + "%"
//     const variableCollectiviteNumber = collectivite + "%";
//     if (isNaN(parseInt(collectivite))) {
//       const value = await PrismaPostgres.collectivites_searchbar.findMany({
//         take: 20,
//         where: {
//           OR: [
//             { 
//               search_libelle: 
//               { 
//                 contains: variableCollectivite, 
//                 mode: 'insensitive' 
//               } 
//             }, 
//             { 
//               search_libelle: 
//               {
//                 contains: variableCollectiviteReplace,
//                 mode: 'insensitive'
//               }
//             }
//           ],
//         },
//       });
//       console.timeEnd("Query Execution Time");
//       // console.log(value);
//         return value;
//       } else if (typeof parseInt(collectivite) === "number") {
//         const value = await PrismaPostgres.collectivites_searchbar.findMany({
//           take: 20,
//           where: { search_code:
//             { 
//               startsWith: variableCollectiviteNumber
//             } 
//           },
//         });
//       console.timeEnd("Query Execution Time");
//       return value;
//     } else {
//       return [
//         {
//           code_commune: "",
//           search_code: "",
//           search_libelle: "",
//           code_epci: "",
//           libelle_commune: "",
//           libelle_epci: "",
//           departement: "",
//           region: "",
//         },
//       ];
//     }
//   } catch (error) {
//     console.error(error);
//     await PrismaPostgres.$disconnect();
//     process.exit(1);
//   }
// };

export const GetStringCommune = async (collectivite: string): Promise<CarteCommunes[]> => {
  try {
    console.time("Query Execution Time");
    const variableCommune = "%" + collectivite + "%";
    if (isNaN(parseInt(collectivite))) {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE unaccent('unaccent', libelle_commune) ILIKE unaccent('unaccent', replace(${variableCommune}, ' ', '-')) LIMIT 20;`; // OR libelle_epci ILIKE ${variableEpci} 
      console.timeEnd("Query Execution Time");
      // console.log(value);
      return value;
    } else {
      return [
        {
          code_commune: "",
          coordinates: "",
          densite_bati: 0,
          epci: "",
          libelle_commune: "",
          libelle_epci: "",
          precarite_logement: 0,
          geometry: "",
          surface: 0,
        },
      ];
    }
  } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
}

export const GetStringEpci = async (collectivite: string): Promise<CarteCommunes[]> => {
  try {
    console.time("Query Execution Time");
    const variableEpci = "%" + collectivite + "%";
    if (isNaN(parseInt(collectivite))) {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE unaccent('unaccent', libelle_epci) ILIKE unaccent('unaccent', replace(${variableEpci}, ' ', '-')) LIMIT 20;`; // OR libelle_epci ILIKE ${variableEpci} 
      console.timeEnd("Query Execution Time");
      // console.log(value);
      return value;
    } else {
      return [
        {
          code_commune: "",
          coordinates: "",
          densite_bati: 0,
          epci: "",
          libelle_commune: "",
          libelle_epci: "",
          precarite_logement: 0,
          geometry: "",
          surface: 0,
        },
      ];
    }
  } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
}

export const GetCodeCommune = async (collectivite: string): Promise<CarteCommunes[]> => {
  try {
    console.time("Query Execution Time");
    const variableCodeCommune = collectivite + "%";
    if (typeof parseInt(collectivite) === "number") {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE code_commune ILIKE ${variableCodeCommune} LIMIT 20;`;
      console.timeEnd("Query Execution Time");
      return value;
    } else {
      return [
        {
          code_commune: "",
          coordinates: "",
          densite_bati: 0,
          epci: "",
          libelle_commune: "",
          libelle_epci: "",
          precarite_logement: 0,
          geometry: "",
          surface: 0,
        },
      ];
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetCodeEpci = async (collectivite: string): Promise<CarteCommunes[]> => {
  try {
    console.time("Query Execution Time");
    const variableCodeEpci = collectivite + "%";
    if (typeof parseInt(collectivite) === "number") {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE epci ILIKE ${variableCodeEpci} LIMIT 20;`;
      console.timeEnd("Query Execution Time");
      return value;
    } else {
      return [
        {
          code_commune: "",
          coordinates: "",
          densite_bati: 0,
          epci: "",
          libelle_commune: "",
          libelle_epci: "",
          precarite_logement: 0,
          geometry: "",
          surface: 0,
        },
      ];
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};


