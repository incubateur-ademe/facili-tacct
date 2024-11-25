"use server";
import { SurfacesProtegeesByCol } from "@/lib/postgres/models";
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
    // Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
