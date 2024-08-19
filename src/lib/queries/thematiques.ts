"use server";

import { InconfortThermique } from "@/lib/postgres/models";
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const GetInconfortThermique = async (code: string): Promise<InconfortThermique[]> => {
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
