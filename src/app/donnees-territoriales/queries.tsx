"use server";

import { PrismaClient as PostgresClient } from "../../generated/client";
import { type DbFiltered } from "./type";

const PrismaPostgres = new PostgresClient();

export const Get_Communes = async (code: string): Promise<DbFiltered[]> => {
  try {
    console.time("Query Execution Time");
    const value = await PrismaPostgres.$queryRaw<DbFiltered[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune,
      coordinates, 
      precarite_logement,
      densite_bati,
      ST_AsGeoJSON(geometry) geometry 
      FROM postgis."communes2" WHERE epci=${code};`;
    console.timeEnd("Query Execution Time");
    // console.log(value)
    return value;
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const Get_CLC = async (centerCoord: number[]): Promise<types.CLC[]> => {
  try {
    console.time("Query Execution Time Get_CLC");
    //Pour requêter seulement les coordonnées (polygon) : ST_AsText(ST_GeomFromGeoJSON(ST_AsGeoJSON(geometry))) geometry
    const coords = centerCoord[1] + " " + centerCoord[0];
    const point = "POINT(" + coords + ")";
    const value: Awaited<types.CLC[]> = await PrismaPostgres.$queryRaw`
      SELECT 
      label3, 
      pk,
      shape_length,
      ST_AsText(ST_PointFromText(centroid, 4326)) centroid,
      ST_AsGeoJSON(geometry) geometry
      FROM postgis."clc_2018_2" WHERE ST_DWithin(ST_PointFromText(centroid, 3857), ST_PointFromText(${point}, 3857), 0.2);`;
    //ST_AsText(ST_PointFromText(centroid, 3857)) centroid
    //ST_DWithin(geometry, ST_PointFromText(${point}, 4326), 0.21)
    //ST_PointFromText(centroid, 4326)
    //ST_DWithin(geometry, ST_PointFromText('POINT(-0.572834 42.911196)', 4326), 1000.0)
    // console.log(value)
    console.timeEnd("Query Execution Time Get_CLC");
    return value;
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const Get_Inconfort_Thermique = async (code: string): Promise<types.InconfortThermique[]> => {
  try {
    console.time("Query Execution Time INCONFORT");
    const value = await PrismaPostgres.inconfort_thermique.findMany({
      where: {
        epci: code,
      },
    });
    console.timeEnd("Query Execution Time INCONFORT");
    // console.log(value)
    return value;
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
