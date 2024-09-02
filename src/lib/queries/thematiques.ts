"use server";

import { InconfortThermique } from "@/lib/postgres/models";
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
