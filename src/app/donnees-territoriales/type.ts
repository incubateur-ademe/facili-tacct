export type DataCommune = {
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

export type DataEPCI = {
  features: EPCITypes[];
  type: string;
};

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

export type DbFiltered = {
  code_commune: string;
  coordinates: string;
  densite_bati: number;
  epci: string;
  geometry: string;
  libelle_commune: string;
  libelle_epci: string;
  precarite_logement: number;
};

export type CLC = {
  centroid: string;
  geometry: string;
  label3: string;
  pk: number;
  shape_length: number;
}

export type InconfortThermique = {
  index: bigint,
  code_commune: string | undefined | null,
  libelle_geographique: string | undefined | null,
  epci: string | undefined | null,
  libelle_epci: string | undefined | null,
  departement: string | undefined | null,
  region: number | undefined | null,
  age_bati_post06: number | undefined | null,
  age_bati_91_05: number | undefined | null,
  age_bati_46_90: number | undefined | null,
  age_bati_19_45: number | undefined | null,
  age_bati_pre_19: number | undefined | null,
  under_4_sum_1968: number | undefined | null,
  to_80_sum_1968: number | undefined | null,
  over_80_sum_1968: number | undefined | null,
  under_4_sum_1975: number | undefined | null,
  to_80_sum_1975: number | undefined | null,
  over_80_sum_1975: number | undefined | null,
  under_4_sum_1982: number | undefined | null,
  to_80_sum_1982: number | undefined | null,
  over_80_sum_1982: number | undefined | null,
  under_4_sum_1990: number | undefined | null,
  to_80_sum_1990: number | undefined | null,
  over_80_sum_1990: number | undefined | null,
  under_4_sum_1999: number | undefined | null,
  to_80_sum_1999: number | undefined | null,
  over_80_sum_1999: number | undefined | null,
  under_4_sum_2009: number | undefined | null,
  to_80_sum_2009: number | undefined | null,
  over_80_sum_2009: number | undefined | null,
  under_4_sum_2014: number | undefined | null,
  to_80_sum_2014: number | undefined | null,
  over_80_sum_2014: number | undefined | null,
  under_4_sum_2020: number | undefined | null,
  to_80_sum_2020: number | undefined | null,
  over_80_sum_2020: number | undefined | null,
  P20_POP80P: number | undefined | null,
  P20_POP80P_PSEUL: number | undefined | null,
  tee_log: number | undefined | null,
  tee_mob: number | undefined | null,
  precarite_logement: number | undefined | null,
  NA5AZ_sum: bigint | undefined | null,
  NA5BE_sum: bigint | undefined | null,
  NA5FZ_sum: bigint | undefined | null,
  NA5GU_sum: bigint | undefined | null,
  NA5OQ_sum: bigint | undefined | null,
  s_geom_cstr_bati: number | undefined | null,
  densite_bati: number | undefined | null
}

