import { Any } from "../types";

export const FilterDataTerritory = (
  type: string,
  code: string,
  libelle: string,
  data: Any[]
) => {
  return type === "commune" ?
    data.filter((el) => el.code_geographique === code)
    : type === "epci" ?
      data.filter((el) => el.epci === code)
      : type === "ept" ?
        data.filter((el) => el.ept === libelle)
        : type === "petr" ?
          data.filter((el) => el.libelle_petr === libelle)
          : type === "pnr" ?
            data.filter((el) => el.code_pnr === code)
            : type === "departement" ?
              data.filter((el) => el.departement === code)
              : data;
}
