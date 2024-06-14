"use server";

import data_epci from "@/lib/json-db/maps/epci.json";

export async function getEPCI(code: number) {
  const value = data_epci.features.find(el => el.properties.EPCI_CODE === code);

  if (!value) {
    throw new Error("EPCI not found");
  }

  return value;
}
