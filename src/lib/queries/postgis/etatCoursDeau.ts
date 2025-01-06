'use server';

import { EpciContours, EtatCoursDeau } from '@/lib/postgres/models';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetEtatCoursDeau = async (
  code: string,
  codgeo?: string
): Promise<EtatCoursDeau[]> => {
  try {
    console.time('Query Execution Time EtatCoursDeau');
    const epci = await PrismaPostgres.$queryRaw<EpciContours[]>`
      SELECT 
      epci_code,
      ST_AsText(ST_Centroid(geometry)) centroid,
      ST_AsText(geometry) geometry
      FROM postgis."epci" WHERE epci_code=${code};`;
    if (epci[0]) {
      // const valueIntersect = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
      //   SELECT
      //   name,
      //   etateco,
      //   ST_AsGeoJSON(geometry) geometry
      //   FROM postgis."etat_cours_d_eau" WHERE ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326));`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${epci[0].geometry})), 4326), 1);`; //ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else if (code === 'ZZZZZZZZZ') {
      const ile = await PrismaPostgres.$queryRaw<EpciContours[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE code_commune=${codgeo};`;
      const valueIntersect = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT 
        name,
        etateco, 
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" WHERE ST_Intersects(geometry, ST_GeomFromText(${ile[0].geometry}, 4326));`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return valueIntersect;
    } else {
      return [];
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
