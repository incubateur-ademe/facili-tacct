"use server";

import data from "@/lib/json-db/age-bati.json";

export async function getAgeBati() {
  return data;
}

export async function getAgeBatiFromEPCI(code: number) {
  const value = data.find(el => el.code_epci === code);

  if (!value) {
    throw new Error("AgeBati not found");
  }

  return value;
}
