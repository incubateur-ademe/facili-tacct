"use server";

import { Biodiversite, GestionRisques, InconfortThermique, RessourcesEau } from "@/lib/postgres/models";
import * as Sentry from "@sentry/nextjs";
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const GetInconfortThermique = async (code: string): Promise<InconfortThermique[]> => {
  try {
    console.time("Query Execution Time INCONFORT");
    const value = await PrismaPostgres.inconfort_thermique.findMany({
      where: {
        OR: [{ epci: code }, { code_geographique: code }], //...(code.length < 7 ? { code_commune: code } : { epci: code }),
      },
    });
    console.timeEnd("Query Execution Time INCONFORT");
    Sentry.captureMessage(`Get inconfort thermique ${code}`, "info")
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetInconfortThermiqueDepartment = async (code: string) => {
  try {
    console.time("Query Execution Time INCONFORT DEPARTEMENT");
    const departement = await PrismaPostgres.inconfort_thermique.findFirst({
      where: {
        epci: code,
      },
    });
    const value = await PrismaPostgres.inconfort_thermique.findMany({
      where: {
        departement: departement?.departement,
      },
    });
    console.timeEnd("Query Execution Time INCONFORT DEPARTEMENT");
    return value;;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetGestionRisques = async (code: string): Promise<GestionRisques[]> => {
  try {
    console.time("Query Execution Time GESTIONRISQUES");
    const value = await PrismaPostgres.gestion_risques.findMany({
      where: {
        OR: [{ epci: code }, { code_geographique: code }]
      },
    });
    console.timeEnd("Query Execution Time GESTIONRISQUES");
    Sentry.captureMessage(`Get GestionRisques ${code}`, "info")
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetBiodiversite = async (code: string): Promise<Biodiversite[]> => {
  try {
    console.time("Query Execution Time BIODIVERSITE");
    const value = await PrismaPostgres.biodiversite.findMany({
      where: {
        AND:[
          { epci: code },
          {
            type_touristique: {
              not: null
            }
          }
        ]
      },
    });
    console.timeEnd("Query Execution Time BIODIVERSITE");
    Sentry.captureMessage(`Get Biodiversité ${code}`, "info")
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetRessourceEau = async (code: string): Promise<RessourcesEau[]> => {
  try {
    console.time("Query Execution Time RESSOURCES EAU");
    const value = await PrismaPostgres.ressources_eau.findMany({
      where: {
        AND:[
          { epci: code },
          {
            LIBELLE_SOUS_CHAMP: {
              not: null
            }
          }
        ]
      },
    });
    console.timeEnd("Query Execution Time RESSOURCES EAU");
    Sentry.captureMessage(`Get Ressources en eau ${code}`, "info")
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

