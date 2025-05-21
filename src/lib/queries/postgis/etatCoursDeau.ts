'use server';

import { CarteCommunes, EtatCoursDeau } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import { PrismaPostgres } from '../db';

export const GetEtatCoursDeau = async (
  code: string,
  libelle: string,
  type: string
): Promise<EtatCoursDeau[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 5000)
  );
  const dbQuery = (async () => {
    try {
      const distance = 0.1;
      if (type === 'commune') {
        const commune = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE code_geographique=${code};`;
        if (commune.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${commune[0].geometry})), 4326), ${distance});`;
          return value;
        }
        return [];
      } else if (type === 'ept' && eptRegex.test(libelle)) {
        const ept = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        ept,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE ept=${libelle} GROUP BY ept;`;
        if (ept.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${ept[0].geometry}, 4326));`; //WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${ept[0].geometry})), 4326), ${distance});`;
          return value;
        }
        return [];
      } else if (type === 'epci' && !eptRegex.test(libelle)) {
        const epci = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE epci=${code} GROUP BY epci;`;
        if (epci.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
            SELECT
            name,
            etateco,
            ST_AsGeoJSON(geometry) geometry
            FROM postgis."etat_cours_d_eau" 
            WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`;
          return value;
        }
        return [];
      } else if (type === 'petr') {
        const petr = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        libelle_petr,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE libelle_petr=${libelle} GROUP BY libelle_petr;`;
        if (petr.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${petr[0].geometry}, 4326));`;
          return value;
        }
        return [];
      } else if (type === 'pnr') {
        const pnr = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        code_pnr,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE code_pnr=${code} GROUP BY code_pnr;`;
        if (pnr.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${pnr[0].geometry}, 4326));`;
          return value;
        }
        return [];
      } else if (type === 'departement') {
        const departement = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        departement, 
        ST_AsText(ST_Union(geometry)) as geometry 
        FROM postgis."communes_drom" WHERE departement=${code} GROUP BY departement;`;
        if (departement.length !== 0) {
          const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${departement[0].geometry}, 4326));`;
          return value;
        }
        return [];
      } else {
        return [] as EtatCoursDeau[];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
