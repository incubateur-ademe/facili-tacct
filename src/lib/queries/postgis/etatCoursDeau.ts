'use server';

import { CarteCommunes, EtatCoursDeau } from '@/lib/postgres/models';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetEtatCoursDeau = async (
  code: string,
  libelle: string,
  type: string
): Promise<EtatCoursDeau[]> => {
  try {
    const re = new RegExp('T([1-9]|1[0-2])\\b');
    const distance = 0.1;
    if (type === 'commune') {
      console.time('Query Execution Time EtatCoursDeau');
      const commune = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE code_geographique=${code};`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${commune[0].geometry})), 4326), ${distance});`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (type === 'ept' && re.test(libelle)) {
      console.time('Query Execution Time EtatCoursDeau');
      const ept = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        ept,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE ept=${libelle} GROUP BY ept;`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${ept[0].geometry}, 4326));`; //WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${ept[0].geometry})), 4326), ${distance});`; 
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (type === 'epci' && !re.test(libelle)) {
      console.time('Query Execution Time EtatCoursDeau');
      const epci = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE epci=${code} GROUP BY epci;`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (type === 'petr') {
      console.time('Query Execution Time EtatCoursDeau');
      const petr = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        libelle_petr,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE libelle_petr=${libelle} GROUP BY libelle_petr;`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${petr[0].geometry}, 4326));`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (type === 'pnr') {
      console.time('Query Execution Time EtatCoursDeau');
      const pnr = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        code_pnr,
        ST_AsText(ST_Union(geometry)) as geometry
        FROM postgis."communes_drom" WHERE code_pnr=${code} GROUP BY code_pnr;`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${pnr[0].geometry}, 4326));`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (type === 'departement') {
      console.time('Query Execution Time EtatCoursDeau');
      const departement = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        departement, 
        ST_AsText(ST_Union(geometry)) as geometry 
        FROM postgis."communes_drom" WHERE departement=${code} GROUP BY departement;`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" 
        WHERE ST_Intersects(geometry, ST_GeomFromText(${departement[0].geometry}, 4326));`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else {
      return [] as EtatCoursDeau[];
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
