'use server';

import {
  CarteCommunes,
  CLCTerritoires,
  ErosionCotiere
} from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
// import { PrismaPostgres } from '../db';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetCommunes = async (
  code: string,
  libelle: string,
  type: string
): Promise<CarteCommunes[]> => {
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
      const exists = await prisma.communes_drom.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        if (type === 'commune') {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
          FROM postgis."communes_drom" 
          WHERE epci = (
            SELECT epci FROM postgis."communes_drom" WHERE code_geographique = ${code} LIMIT 1
            );`;
          return value;
        } else if (type === 'ept' && eptRegex.test(libelle)) {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
          return value;
        } else if (type === 'epci' && !eptRegex.test(libelle)) {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
          return value;
        } else if (type === 'pnr') {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
            FROM postgis."communes_drom" WHERE code_pnr IS NOT NULL AND code_pnr=${code};`;
          return value;
        } else if (type === 'petr') {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
          FROM postgis."communes_drom" WHERE libelle_petr IS NOT NULL AND libelle_petr=${libelle};`;
          return value;
        } else {
          const value = await prisma.$queryRaw<CarteCommunes[]>`
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
          return value;
        }
      }
    } catch (error) {
      console.error(error);
      // prisma.$disconnect();
      Sentry.captureException(error);
      console.error('Database connection error occurred.');
      return [];
    }
  })();

  return Promise.race([dbQuery, timeoutPromise]);
};

export const GetClcTerritoires = async (
  libelle: string,
  type: string,
  code?: string
): Promise<CLCTerritoires[] | undefined> => {
  const timeoutPromise = new Promise<CLCTerritoires[] | undefined>((resolve) =>
    setTimeout(() => {
      resolve(undefined);
    }, 5000)
  );
  const column = ColumnCodeCheck(type);
  const dbQuery = (async () => {
    try {
      // Fast existence check
      const exists = await prisma.clc_territoires.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return undefined;
      else {
        if (type === 'commune') {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE code_geographique=${code};`;
          return value.length ? value : undefined;
        } else if (type === 'ept' && eptRegex.test(libelle)) {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE ept IS NOT NULL AND ept=${libelle};`;
          return value.length ? value : undefined;
        } else if (type === 'epci' && !eptRegex.test(libelle)) {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE epci=${code};`;
          return value.length ? value : undefined;
        } else if (type === 'pnr') {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE code_pnr IS NOT NULL AND code_pnr=${code};`;
          return value.length ? value : undefined;
        } else if (type === 'petr') {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE libelle_petr IS NOT NULL AND libelle_petr=${libelle};`;
          return value.length ? value : undefined;
        } else if (type === 'departement') {
          const value = await prisma.$queryRaw<CLCTerritoires[]>`
            SELECT 
            legend, 
            ST_AsText(ST_Centroid(geometry)) centroid,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."clc_territoires" WHERE departement=${code};`;
          return value.length ? value : undefined;
        } else return undefined;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  })();
  const result = Promise.race([dbQuery, timeoutPromise]);
  if (result === undefined) {
    console.log('GetCLC: Timeout reached (5 seconds), returning undefined.');
  }
  return result;
};

export const GetErosionCotiere = async (
  code: string,
  libelle: string,
  type: string
): Promise<ErosionCotiere[]> => {
  const distance =
    type === 'commune'
      ? 0.28 // calcul fait pour la plus vaste commune : Arles
      : type === 'epci'
        ? 0.6 // calcul fait pour la plus vaste epci : pays Basque
        : type === 'pnr'
          ? 0.8 // calcul fait pour le PNR de Corse
          : type === 'petr'
            ? 0.6
            : type === 'departement'
              ? 1
              : 0.3;
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetErosionCotiere: Timeout reached (5 seconds), returning empty array.'
      );
      resolve([]);
    }, 5000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'commune') {
        const commune = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT
          code_geographique,
          ST_AsText(geometry) geometry
          FROM postgis."communes_drom" 
          WHERE code_geographique=${code} LIMIT 1;`;
        if (commune.length !== 0) {
          const intersect = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT
          ST_AsGeoJSON(geometry) geometry
          FROM postgis."erosion_cotiere"
          WHERE ST_Intersects(geometry, ST_GeomFromText(${commune[0].geometry}, 4326)) LIMIT 1;`;
          if (intersect.length) {
            const value = await prisma.$queryRaw<ErosionCotiere[]>`
            SELECT
            taux,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere" 
            WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${commune[0].geometry})), 4326), ${distance});`;
            return value;
          } else return [];
        }
        return [];
      } else if (type === 'epci' && !eptRegex.test(libelle)) {
        const epci = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT
          ST_AsText(ST_Union(geometry)) as geometry
          FROM postgis."communes_drom" WHERE epci=${code};`;
        if (epci.length !== 0) {
          const intersect = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT
          ST_AsGeoJSON(geometry) geometry
          FROM postgis."erosion_cotiere"
          WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))`;
          if (intersect.length) {
            const value = await prisma.$queryRaw<ErosionCotiere[]>`
            SELECT
            taux,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere" 
            WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${epci[0].geometry})), 4326), ${distance});`;
            return value;
          } else return [];
        }
        return [];
      } else if (type === 'pnr') {
        const pnr = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT 
          ST_AsText(ST_Union(geometry)) as geometry
          FROM postgis."communes_drom" WHERE code_pnr=${code};`;
        if (pnr.length !== 0) {
          const intersect = await prisma.$queryRaw<CarteCommunes[]>`
            SELECT
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere"
            WHERE ST_Intersects(geometry, ST_GeomFromText(${pnr[0].geometry}, 4326))`;
          if (intersect.length) {
            const value = await prisma.$queryRaw<ErosionCotiere[]>`
              SELECT
              taux,
              ST_AsGeoJSON(geometry) geometry
              FROM postgis."erosion_cotiere"
              WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${pnr[0].geometry})), 4326), ${distance});`;
            return value;
          } else return [];
        } else return [];
      } else if (type === 'petr') {
        const petr = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT 
          ST_AsText(ST_Union(geometry)) as geometry
          FROM postgis."communes_drom" WHERE libelle_petr=${libelle};`;
        if (petr.length !== 0) {
          const intersect = await prisma.$queryRaw<CarteCommunes[]>`
            SELECT
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere"
            WHERE ST_Intersects(geometry, ST_GeomFromText(${petr[0].geometry}, 4326)) LIMIT 1`;
          if (intersect.length) {
            const value = await prisma.$queryRaw<ErosionCotiere[]>`
              SELECT
              taux,
              ST_AsGeoJSON(geometry) geometry
              FROM postgis."erosion_cotiere"
              WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${petr[0].geometry})), 4326), ${distance});`;
            return value;
          } else return [];
        } else return [];
      } else if (type === 'departement') {
        const departement = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT 
          ST_AsText(ST_Union(geometry)) as geometry
          FROM postgis."communes_drom" WHERE departement=${code};`;
        if (departement.length !== 0) {
          const intersect = await prisma.$queryRaw<CarteCommunes[]>`
            SELECT
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere"
            WHERE ST_Intersects(geometry, ST_GeomFromText(${departement[0].geometry}, 4326))`;
          if (intersect.length) {
            const value = await prisma.$queryRaw<ErosionCotiere[]>`
            SELECT
            taux,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."erosion_cotiere"
            WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${departement[0].geometry})), 4326), ${distance});`; //ST_Intersects(geometry, ST_GeomFromText(${departement[0].geometry}, 4326));
            return value;
          } else return [];
        } else return [];
      } else return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
