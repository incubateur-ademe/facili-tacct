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
