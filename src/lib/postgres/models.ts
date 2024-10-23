export type InconfortThermique = {
  NA5AZ_sum: number | null;
  NA5BE_sum: number | null;
  NA5FZ_sum: number | null;
  NA5GU_sum: number | null;
  NA5OQ_sum: number | null;
  P20_POP80P: number | null;
  P20_POP80P_PSEUL: number | null;
  age_bati_19_45: number | null;
  age_bati_46_90: number | null;
  age_bati_91_05: number | null;
  age_bati_post06: number | null;
  age_bati_pre_19: number | null;
  clc_1_artificialise: number | null;
  clc_2_agricole: number | null;
  clc_3_foret_semiNaturel: number | null;
  clc_4_humide: number | null;
  clc_5_eau: number | null;
  code_geographique: string;
  densite_bati: number | null;
  departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  over_80_sum_1968: number | null;
  over_80_sum_1975: number | null;
  over_80_sum_1982: number | null;
  over_80_sum_1990: number | null;
  over_80_sum_1999: number | null;
  over_80_sum_2009: number | null;
  over_80_sum_2014: number | null;
  over_80_sum_2020: number | null;
  precarite_logement: number | null;
  region: number;
  s_geom_cstr_bati: number | null;
  tee_log: number | null;
  tee_mob: number | null;
  to_80_sum_1968: number | null;
  to_80_sum_1975: number | null;
  to_80_sum_1982: number | null;
  to_80_sum_1990: number | null;
  to_80_sum_1999: number | null;
  to_80_sum_2009: number | null;
  to_80_sum_2014: number | null;
  to_80_sum_2020: number | null;
  under_4_sum_1968: number | null;
  under_4_sum_1975: number | null;
  under_4_sum_1982: number | null;
  under_4_sum_1990: number | null;
  under_4_sum_1999: number | null;
  under_4_sum_2009: number | null;
  under_4_sum_2014: number | null;
  under_4_sum_2020: number | null;
};

export type Biodiversite = {
  type_touristique: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

export type GestionRisques = {
  lib_risque_jo: string | null;
  dat_pub_arrete: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

export type RessourcesEau = {
  LIBELLE_SOUS_CHAMP: string | null;
  SOUS_CHAMP: string | null;
  code_geographique: string;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
  A2008: number | null;
  A2009: number | null;
  A2010: number | null;
  A2011: number | null;
  A2012: number | null;
  A2013: number | null;
  A2014: number | null;
  A2015: number | null;
  A2016: number | null;
  A2017: number | null;
  A2018: number | null;
  A2019: number | null;
  A2020: number | null;
}

export type CollectivitesSearchbar = {
  code_commune?: string | null;
  coordinates?: string | null;
  code_epci: string;// | null;
  libelle_commune?: string | null;
  libelle_epci: string;// | null;
  search_libelle: string;// | null;
  search_code: string;// | null;
  departement: string;// | null;
  region: string;// | null;
};

export type CarteCommunes = {
  code_commune: string;
  coordinates: string;
  densite_bati?: number;
  epci: string;
  geometry: string;
  libelle_commune: string;
  libelle_epci: string;
  precarite_logement?: number;
  catnat?: Object;
};

export type CLC = {
  centroid: string;
  geometry: string;
  label3: string;
  legend: string;
  pk: number;
  shape_length: number;
};

export type DataGrandAge = {
  P20_POP80P?: number;
  P20_POP80P_PSEUL?: number;
  code_commune: string;
  epci: string;
  libelle_epci: string;
  libelle_geographique: string;
  over_80_sum_1968?: number;
  over_80_sum_1975?: number;
  over_80_sum_1982?: number;
  over_80_sum_1990?: number;
  over_80_sum_1999?: number;
  over_80_sum_2009?: number;
  over_80_sum_2014?: number;
  over_80_sum_2020?: number;
  to_80_sum_1968?: number;
  to_80_sum_1975?: number;
  to_80_sum_1982?: number;
  to_80_sum_1990?: number;
  to_80_sum_1999?: number;
  to_80_sum_2009?: number;
  to_80_sum_2014?: number;
  to_80_sum_2020?: number;
  under_4_sum_1968?: number;
  under_4_sum_1975?: number;
  under_4_sum_1982?: number;
  under_4_sum_1990?: number;
  under_4_sum_1999?: number;
  under_4_sum_2009?: number;
  under_4_sum_2014?: number;
  under_4_sum_2020?: number;
};
