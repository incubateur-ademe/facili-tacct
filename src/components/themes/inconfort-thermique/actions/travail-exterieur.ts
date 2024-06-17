"use server";

import data from "@/lib/json-db/travail-ext.json";

export async function getTravailExt() {
  return data;
}

export async function getTravailExtFromEPCI(code: number) {
  const value = data.filter(el => el['EPCI - Métropole'] === code);

  if (!value) {
    throw new Error("TravailExt not found");
  }

  return value;
}
