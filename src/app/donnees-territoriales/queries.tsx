"use server"
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

//Paris lat : 48.864716 long : 2.349014

export const Get_Communes = async (code: string) => {
  try {
    console.time("Query Execution Time");
    const value = await PrismaPostgres.$queryRaw`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune,
      coordinates, 
      precarite_logement,
      densite_bati,
      ST_AsGeoJSON(geometry) geometry 
      FROM postgis."communes2" WHERE epci=${code};`
    console.timeEnd("Query Execution Time");
    // console.log(code)
    // console.log(value)
    return value;
   } catch(error) {
      console.error(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
};

export const Get_CLC = async (centerCoord: number[]) => {
  try {
    console.time("Query Execution Time Get_CLC");
    //Pour requêter seulement les coordonnées (polygon) : ST_AsText(ST_GeomFromGeoJSON(ST_AsGeoJSON(geometry))) geometry
    const coords = centerCoord[1] + " " + centerCoord[0];
    const point = 'POINT(' + coords + ')';
    const value = await PrismaPostgres.$queryRaw`
      SELECT 
      label3, 
      pk,
      shape_length,
      ST_AsText(ST_PointFromText(centroid, 4326)) centroid,
      ST_AsGeoJSON(geometry) geometry
      FROM postgis."clc_2018_2" WHERE ST_DWithin(ST_PointFromText(centroid, 3857), ST_PointFromText(${point}, 3857), 0.2);`
      //ST_AsText(ST_PointFromText(centroid, 3857)) centroid
      //ST_DWithin(geometry, ST_PointFromText(${point}, 4326), 0.21)
      //ST_PointFromText(centroid, 4326)
      //ST_DWithin(geometry, ST_PointFromText('POINT(-0.572834 42.911196)', 4326), 1000.0)
    // console.log(value)
    console.timeEnd("Query Execution Time Get_CLC");
    return value;
   } catch(error) {
      console.error(error);
      await PrismaPostgres.$disconnect();
      process.exit(1);
   }
};
  



