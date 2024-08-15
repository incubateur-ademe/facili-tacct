"use server";

import { PrismaClient as PostgresClient } from "../../generated/client";
import { CarteCommunes } from "../postgres/models";

const PrismaPostgres = new PostgresClient();

export const GetCollectivite = async (collectivite: string): Promise<CarteCommunes[]> => {
  try {
    console.time("Query Execution Time");
    const variable_commune = "%" + collectivite + "%";
    const variable_code_commune = collectivite + "%";
    const variable_epci = "%" + collectivite + "%";
    if (isNaN(parseInt(collectivite))) {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE libelle_commune ILIKE ${variable_commune} LIMIT 20;`; // OR libelle_epci ILIKE ${variable_epci}
      console.timeEnd("Query Execution Time");
      // console.log(value);
      if (value.length > 0) {
        return value;
      } else {
        const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
        SELECT 
        epci, 
        libelle_epci,
        libelle_commune,
        code_commune
        FROM postgis."communes" WHERE libelle_epci ILIKE ${variable_epci} LIMIT 20;`;
        return value;
      }
    } else if (typeof parseInt(collectivite) === "number") {
      const value = await PrismaPostgres.$queryRaw<CarteCommunes[]>`
      SELECT 
      epci, 
      libelle_epci,
      libelle_commune,
      code_commune
      FROM postgis."communes" WHERE code_commune ILIKE ${variable_code_commune} LIMIT 20;`;
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
