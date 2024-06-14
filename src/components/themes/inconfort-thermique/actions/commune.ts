"use server";

import data_commune from "@/lib/json-db/maps/commune.json";

export async function getCommunesFromEPCI(code: string) {
  const value = data_commune.features.filter(el => el.properties.EPCI_CODE === code);

  if (!value) {
    throw new Error("Commune not found");
  }

  return value;
}
