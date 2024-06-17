type EPCITypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    EPCI: string;
    EPCI_CODE: number;
  };
  type: string;
};

type DataEPCI = {
  features: EPCITypes[];
  type: string;
};

declare module "@/lib/json-db/maps/epci.json" {
  const data_epci: DataEPCI;
  export = data_epci;
}

type DataCommunes = {
  features: CommunesTypes[];
  name: string;
  type: string;
};

type CommunesTypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    DCOE_C_COD: string;
    DCOE_L_LIB: string;
    DDEP_C_COD: string;
    DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    REGION: string;
    REGION_COD: string;
    ratio_precarite: number;
  };
  type: string;
};

declare module "@/lib/json-db/maps/commune.json" {
  const data_commune: DataCommunes;
  export = data_commune;
}

interface PrecariteLogMob {
  "": number;
  COMMUNE: string;
  EPCI: number;
  IPONDL_POUR_PRECA: number;
  REG: number;
  TEE_log: number;
  TEE_mob: number;
  precarite_logement: number;
  precarite_mobilite: number;
  ratio_precarite_log: number;
}

declare module "@/lib/json-db/precarite-log-mob.json" {
  const data: PrecariteLogMob[];
  export = data;
}

interface TravailExt {
  "": number,
  "CODGEO": number,
  "EPCI - Métropole": number,
  "Libellé de l'EPCI / Métropole": string,
  "LIBGEO": string,
  "NA5AZ_sum": number,
  "NA5BE_sum": number,
  "NA5FZ_sum": number,
  "NA5GU_sum": number,
  "NA5OQ_sum": number
}

declare module "@/lib/json-db/travail-ext.json" {
  const data: TravailExt[];
  export = data;
}

interface AgeBati {
  code_epci: number;
  part_rp_ach06p: number;
  part_rp_ach19: number;
  part_rp_ach1945: number;
  part_rp_ach4690: number;
  part_rp_ach9105: number;
}

declare module "@/lib/json-db/age-bati.json" {
  const data: AgeBati[];
  export = data;
}

interface Vegetalisation {
  "": number;
  "1_artificialise": number;
  "2_agricole": number;
  "3_foret_semiNaturel": number;
  "4_humide": number;
  "5_eau": number;
  "Code Insee de la commune": number;
  DEP_x: number;
  DEP_y: number;
  EPCI_x: number;
  EPCI_y: number;
  LIBEPCI_x: string;
  LIBEPCI_y: string;
  LIBGEO_x: string;
  LIBGEO_y: string;
  REG_x: number;
  REG_y: number;
}

declare module "@/lib/json-db/vegetalisation.json" {
  const data: Vegetalisation[];
  export = data;
}

interface GrandAge {
  "": number,
  "Code géographique": number,
  "Libellé géographique": string,
  "EPCI - Métropole": number,
  "Libellé de l'EPCI / Métropole": string,
  "Département": number,
  "Région": number,
  "Libellé de commune": string,
  "under_4_sum_1968": number,
  "4_to_75_sum_1968": number,
  "over_75_sum_1968": number,
  "under_4_sum_1975": number
  "4_to_75_sum_1975": number,
  "over_75_sum_1975": number,
  "under_4_sum_1982": number
  "4_to_75_sum_1982": number,
  "over_75_sum_1982": number,
  "under_4_sum_1990": number,
  "4_to_75_sum_1990": number,
  "over_75_sum_1990": number,
  "under_4_sum_1999": number
  "4_to_75_sum_1999": number,
  "over_75_sum_1999": number,
  "under_4_sum_2009": number
  "4_to_75_sum_2009": number,
  "over_75_sum_2009": number,
  "under_4_sum_2014": number,
  "4_to_75_sum_2014": number,
  "over_75_sum_2014": number,
  "under_4_sum_2020": number,
  "4_to_75_sum_2020": number,
  "over_75_sum_2020": number
}

declare module "@/lib/json-db/age-evolution-all-ages.json" {
  const data: GrandAge[];
  export = data;
}