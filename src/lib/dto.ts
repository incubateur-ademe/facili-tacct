import { GeoGeometryObjects } from 'd3';

export type VegetalisationDto = {
  clc_1_artificialise: number;
  clc_2_agricole: number;
  clc_3_foret_semiNaturel: number;
  clc_4_humide: number;
  clc_5_eau: number;
  code_commune: string;
  epci: string;
  libelle_epci: string;
  libelle_geographique: string;
};

export type AgeBatiDto = {
  code_commune: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  age_bati_pre_19: number;
  age_bati_19_45: number;
  age_bati_46_90: number;
  age_bati_91_05: number;
  age_bati_post06: number;
};

export type travailExtDto = {
  NA5AZ_sum: number;
  NA5BE_sum: number;
  NA5FZ_sum: number;
  NA5GU_sum: number;
  NA5OQ_sum: number;
  code_commune: string;
  epci: string;
  libelle_epci: string;
  libelle_geographique: string;
};

export type GrandAgeIsolementDto = {
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

export type CommunesIndicateursDto = {
  type: string;
  properties: {
    catnat?: {
      Inondations?: number;
      'Grêle / neige'?: number;
      Sécheresse?: number;
      'Cyclones / Tempêtes'?: number;
      'Retrait-gonflement des argiles'?: number;
      'Mouvements de terrain'?: number;
      Avalanche?: number;
      sumCatnat?: number;
      indexName?: string;
    };
    epci: string;
    libelle_epci: string;
    libelle_commune: string;
    code_commune: string;
    precarite_logement: number;
    densite_bati: number;
    coordinates: string;
    naf?: string;
  };
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
};

export type CommunesContoursDto = {
  type: string;
  properties: {
    epci: string;
    libelle_epci: string;
    libelle_commune: string;
    code_commune: string;
    coordinates: string;
  };
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
};

export type ClcDto = {
  geometry: GeoGeometryObjects;
  properties: {
    centroid: string;
    label: string;
  };
  type: string;
};

export type ErosionCotiereDto = {
  geometry: {
    coordinates: number[][][];
    type: string;
  };
  type: string;
  properties: {
    taux: number;
  };
};

export type EpciContoursDto = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  type: string;
  properties: {
    epci_code: string;
  };
};

type SurfacesProtegessChildren = {
  name: string;
  color: string;
  loc: number;
};

export type SurfacesProtegeesDto = {
  name: string;
  color: string;
  children: {
    name: string;
    color: string;
    loc?: number;
    children?: SurfacesProtegessChildren[];
  }[];
};
