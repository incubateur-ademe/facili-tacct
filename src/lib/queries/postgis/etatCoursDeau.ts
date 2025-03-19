'use server';

import { CarteCommunes, EtatCoursDeau } from '@/lib/postgres/models';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetEtatCoursDeau = async (
  codepci: string,
  codgeo?: string
): Promise<EtatCoursDeau[]> => {
  try {
    const distance = codgeo ? 0.1 : 0.8;
    if (codgeo) {
      console.time('Query Execution Time EtatCoursDeau');
      const commune = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE code_geographique=${codgeo};`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${commune[0].geometry})), 4326), ${distance});`;
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    } else {
      console.time('Query Execution Time EtatCoursDeau');
      const epci = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci,
        ST_AsText(ST_Centroid(geometry)) centroid,
        ST_AsText(geometry) geometry
        FROM postgis."communes_drom" WHERE epci=${codepci};`;
      const value = await PrismaPostgres.$queryRaw<EtatCoursDeau[]>`
        SELECT
        name,
        etateco,
        ST_AsGeoJSON(geometry) geometry
        FROM postgis."etat_cours_d_eau" WHERE ST_DWithin(geometry, ST_PointFromText(ST_AsText(ST_Centroid(${epci[0].geometry})), 4326), ${distance});`; //ST_Intersects(geometry, ST_GeomFromText(${epci[0].geometry}, 4326))
      console.timeEnd('Query Execution Time EtatCoursDeau');
      return value;
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
