"use server";

import data from "@/lib/json-db/age-evolution.json";

export async function getGrandAge() {
  return data;
}

export async function getGrandAgeFromEPCI(code: number) {
  const value = data.find(el => el["EPCI - Métropole"] === code);

  if (!value) {
    throw new Error("GrandAge not found");
  }

  return value;
}
