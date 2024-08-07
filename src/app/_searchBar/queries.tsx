"use server";

import { PrismaClient as PostgresClient } from "../../generated/client";
import type * as types from "./type";

const PrismaPostgres = new PostgresClient();

export const Get_Collectivite = async (collectivite: string): Promise<types.DbFiltered[]> => {
  try {
    console.time("Query Execution Time");
    const variable_commune = collectivite + "%";
    const variable_code_commune = collectivite + "%";
    const variable_epci = "%" + collectivite + "%";
    if (isNaN(parseInt(collectivite))) {
      const value: Awaited<types.DbFiltered[]> = await PrismaPostgres.$queryRaw`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes2" WHERE libelle_commune ILIKE ${variable_commune} OR libelle_epci ILIKE ${variable_epci} LIMIT 30;`;
      console.timeEnd("Query Execution Time");
      // console.log(value);
      return value;
    } else if (typeof parseInt(collectivite) === "number") {
      const value: Awaited<types.DbFiltered[]> = await PrismaPostgres.$queryRaw`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes2" WHERE code_commune ILIKE ${variable_code_commune} LIMIT 20;`;
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
        },
      ];
    }
  } catch (error) {
    console.error(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
