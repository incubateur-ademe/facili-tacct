"use server";

import data from "@/lib/json-db/cat-sociopro.json";

export async function getTravailExt() {
  return data;
}

export async function getTravailExtFromEPCI(code: number) {
  const value = data.find(el => el.Code === code);

  if (!value) {
    throw new Error("TravailExt not found");
  }

  return value;
}
