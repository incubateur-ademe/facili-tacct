'use server';

import {
  CarteCommunes,
  CLCTerritoires,
  EpciContours,
  ErosionCotiere
} from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetCommunes = async (
  code: string,
  libelle: string,
  type: string
): Promise<CarteCommunes[]> => {
  try {
    console.time(`Query Execution Time carte communes ${code}`);
    const re = new RegExp('T([1-9]|1[0-2])\\b');
    if (type === 'commune') {
      const epci = await PrismaPostgres.communes_drom.findFirst({
        where: {
          code_geographique: code
        }
      });
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci, 
        libelle_epci,
        libelle_geographique,
        code_geographique,
        ept,
        libelle_petr,
        code_pnr,
        libelle_pnr,
        departement,
        coordinates, 
        precarite_logement,
        densite_bati,
        surface,
        ST_AsGeoJSON(geometry) geometry 
        FROM postgis."communes_drom" WHERE epci=${epci?.epci};`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    } else if (type === 'epci' && re.test(libelle)) {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
          epci, 
          libelle_epci,
          libelle_geographique,
          code_geographique,
          ept,
          libelle_petr,
          code_pnr,
          libelle_pnr,
          departement,
          coordinates, 
          precarite_logement,
          densite_bati,
          surface,
          ST_AsGeoJSON(geometry) geometry 
          FROM postgis."communes_drom" WHERE epci='200054781';`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    } else if (type === 'epci' && !re.test(libelle)) {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
          epci, 
          libelle_epci,
          libelle_geographique,
          code_geographique,
          ept,
          libelle_petr,
          code_pnr,
          libelle_pnr,
          departement,
          coordinates, 
          precarite_logement,
          densite_bati,
          surface,
          ST_AsGeoJSON(geometry) geometry 
          FROM postgis."communes_drom" WHERE epci=${code};`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    } else if (type === 'pnr') {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
          epci, 
          libelle_epci,
          libelle_geographique,
          code_geographique,
          ept,
          libelle_petr,
          code_pnr,
          libelle_pnr,
          departement,
          coordinates, 
          precarite_logement,
          densite_bati,
          surface,
          ST_AsGeoJSON(geometry) geometry 
          FROM postgis."communes_drom" WHERE code_pnr=${code};`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    } else if (type === 'petr') {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
          epci, 
          libelle_epci,
          libelle_geographique,
          code_geographique,
          ept,
          libelle_petr,
          code_pnr,
          libelle_pnr,
          departement,
          coordinates, 
          precarite_logement,
          densite_bati,
          surface,
          ST_AsGeoJSON(geometry) geometry 
          FROM postgis."communes_drom" WHERE libelle_petr=${libelle};`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    } else {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
          epci, 
          libelle_epci,
          libelle_geographique,
          code_geographique,
          ept,
          libelle_petr,
          code_pnr,
          libelle_pnr,
          departement,
          coordinates,
          precarite_logement,
          densite_bati,
          surface,
          ST_AsGeoJSON(geometry) geometry 
          FROM postgis."communes_drom" WHERE departement=${code};`;
      console.timeEnd(`Query Execution Time carte communes ${code}`);
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetClcTerritoires = async (
  libelle: string,
  type: string,
  code?: string
): Promise<CLCTerritoires[]> => {
  try {
    const re = new RegExp('T([1-9]|1[0-2])\\b');
    console.time('Query Execution Time GetClcTerritoires');
    if (type === 'commune') {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE code_geographique=${code};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    } else if (type === 'epci' && re.test(libelle)) {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE ept=${libelle};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    } else if (type === 'epci' && !re.test(libelle)) {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE epci=${code};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    } else if (type === 'pnr') {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE code_pnr=${code};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    } else if (type === 'petr') {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE libelle_petr=${libelle};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    } else {
      const value = await PrismaPostgres.$queryRaw<CLCTerritoires[]>`
        SELECT 
        legend, 
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."clc_territoires" WHERE departement=${code};`;
      console.timeEnd('Query Execution Time GetClcTerritoires');
      return value;
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetErosionCotiere = async (
  code: string,
  codgeo?: string
): Promise<ErosionCotiere[][]> => {
  try {
    console.time('Query Execution Time ErosionCotiere');
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
        FROM postgis."erosion_cotiere" WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`;
      const value = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
        SELECT 
        taux, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."erosion_cotiere" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${epci[0].geometry})), 4326), 0.6);`; //ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))
      console.timeEnd('Query Execution Time ErosionCotiere');
      return [valueIntersect ?? 0, value];
    } else if (code === 'ZZZZZZZZZ') {
      const ile = await PrismaPostgres.$queryRaw<EpciContours[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE code_geographique=${codgeo};`;
      const valueIntersect = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
        SELECT 
        taux, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."erosion_cotiere" WHERE ST_Intersects(geometry, ST_GeomFromText(${ile[0].geometry}, 4326));`;
      const value = await PrismaPostgres.$queryRaw<ErosionCotiere[]>`
        SELECT 
        taux, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."erosion_cotiere" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${ile[0].geometry})), 4326), 0.6);`;
      console.timeEnd('Query Execution Time ErosionCotiere');
      return [valueIntersect ?? 0, value];
    } else {
      return [[], []];
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetEpci = async (
  code: string,
  codgeo?: string
): Promise<EpciContours[]> => {
  try {
    console.time('Query Execution Time GetEpci');
    if (code === 'ZZZZZZZZZ') {
      const value = await PrismaPostgres.$queryRaw<EpciContours[]>`
        SELECT 
        epci, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."communes_drom" WHERE code_geographique=${codgeo};`;
      // console.log(value);
      console.timeEnd('Query Execution Time GetEpci');
      return value;
    } else {
      const value = await PrismaPostgres.$queryRaw<EpciContours[]>`
        SELECT 
        epci_code, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."epci" WHERE epci_code=${code};`;
      // console.log(value);
      console.timeEnd('Query Execution Time GetEpci');
      return value;
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
