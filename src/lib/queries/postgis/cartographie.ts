"use server";

import { CarteCommunes, CLC, EpciContours, ErosionCotiere } from "@/lib/postgres/models";
import * as Sentry from "@sentry/nextjs";
import { PrismaClient as PostgresClient } from "../../../generated/client";

const PrismaPostgres = new PostgresClient();

export const GetCommunes = async (code: string): Promise<CarteCommunes[]> => {
  try {
    console.time(`Query Execution Time communes ${code}`);
    console.time(`Query Execution Time communes ${code}`);
    const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune,
      coordinates, 
      precarite_logement,
      densite_bati,
      surface,
      ST_AsGeoJSON(geometry) geometry 
      FROM postgis."communes_drom" WHERE epci=${code};`;
    console.timeEnd(`Query Execution Time communes ${code}`);
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetClcEpci = async (code: string): Promise<CLC[]> => {
  try {
    console.time("Query Execution Time GetClcEpci");
    const code_number = Number(code);
    const value = await PrismaPostgres.$queryRaw<CLC[]>`
      SELECT 
      legend, 
      pk,
      ST_AsText(ST_Centroid(geometry)) centroid,
      ST_AsGeoJSON(geometry) geometry
      FROM postgis."clc_epci" WHERE epci_code=${code_number};`;
    // console.log(value);
    console.timeEnd("Query Execution Time GetClcEpci");
    return value;
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetErosionCotiere = async (code: string): Promise<ErosionCotiere[][]> => {
  try {
    console.time("Query Execution Time ErosionCotiere");
    const epci = await PrismaPostgres.$queryRaw<EpciContours[]>`
      SELECT 
      epci_code,
      ST_AsText(ST_Centroid(geometry)) centroid,
      ST_AsText(geometry) geometry
      FROM postgis."epci" WHERE epci_code=${code};`;
    if (epci[0]) {
      const valueIntersect = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
        SELECT 
        taux, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."erosion_cotiere" WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`
      const value = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
        SELECT 
        taux, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."erosion_cotiere" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${epci[0].geometry})), 4326), 0.6);`; //ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))
        console.timeEnd("Query Execution Time ErosionCotiere");
      return [valueIntersect ?? 0, value]
    } else {
      return [[], []];
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

// export const GetErosionCotiereIntersect = async (code: string): Promise<ErosionCotiere[]> => {
//   try {
//     console.time("Query Execution Time ErosionCotiere");
//     const epci = await PrismaPostgres.$queryRaw<EpciContours[]>`
//       SELECT 
//       epci_code,
//       ST_AsText(ST_Centroid(geometry)) centroid,
//       ST_AsText(geometry) geometry
//       FROM postgis."epci" WHERE epci_code=${code};`;
//       const value = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
//         SELECT 
//         taux, 
//         ST_AsGeoJSON(geometry) geometry
//         FROM postgis."erosion_cotiere" WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`; //ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))
//     // console.log(value);
//     console.timeEnd("Query Execution Time ErosionCotiere");
//     return value;
//   } catch (error) {
//     console.error(error);
//     await PrismaPostgres.$disconnect();
//     process.exit(1);
//   }
// };

export const GetEpci = async (code: string): Promise<EpciContours[]> => {
  try {
    console.time("Query Execution Time GetEpci");
    const value = await PrismaPostgres.$queryRaw<EpciContours[]>`
      SELECT 
      epci_code, 
      ST_AsGeoJSON(geometry) geometry
      FROM postgis."epci" WHERE epci_code=${code};`;
    // console.log(value);
    console.timeEnd("Query Execution Time GetEpci");
    return value;
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
}
