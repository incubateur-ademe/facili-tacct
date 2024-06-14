"use server";

import data from "@/lib/json-db/precarite-log-mob.json";

export async function getPrecariteLogMob() {
  return data;
}

export async function getPrecariteLogMobsFromEPCI(code: number) {
  const value = data.filter(el => el.EPCI === code);

  if (!value) {
    throw new Error("PrecariteLogMob not found");
  }

  return value;
}
