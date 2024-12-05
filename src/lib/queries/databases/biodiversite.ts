"use server";
import { ConsommationNAF, SurfacesProtegeesByCol } from "@/lib/postgres/models";
import * as Sentry from "@sentry/nextjs";
import { PrismaClient as PostgresClient } from "../../../generated/client";

const PrismaPostgres = new PostgresClient();

export const GetSurfacesProtegees = async (code: string): Promise<SurfacesProtegeesByCol[]> => {
  try {
    console.time("Query Execution Time SURFACES PROTEGEES");
    const value = await PrismaPostgres.surfaces_protegees.findMany({
      where: {
        epci: code,
      },
    });
    console.timeEnd("Query Execution Time SURFACES PROTEGEES");
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};

export const GetConsommationNAF = async (code: string): Promise<ConsommationNAF[]> => {
  try {
    console.time("Query Execution Time CONSOMMATION NAF");
    const value = await PrismaPostgres.consommation_espaces_naf.findMany({
      where: {
        epci: code,
      },
    });
    console.timeEnd("Query Execution Time CONSOMMATION NAF");
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
