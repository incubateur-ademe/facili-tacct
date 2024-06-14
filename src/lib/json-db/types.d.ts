type EPCITypes = {
  type: string;  
  geometry: {
      type: string;
      coordinates: number[][][][];
  };
  properties: {
    EPCI_CODE: number;
    EPCI: string;
  };
}

type DataEPCI = {
  type: string;
  features: EPCITypes[]
}

declare module "@/lib/json-db/maps/epci.json" {
  const data_epci: DataEPCI;
  export = data_epci;
}

type DataCommunes = {
  type: string;
  name: string;
  features: CommunesTypes[]
}

type CommunesTypes = {
  type: string;  
  geometry: {
      type: string;
      coordinates: number[][][][];
  };
  properties: {
    DCOE_C_COD: string;
    DDEP_C_COD: string;
    DCOE_L_LIB: string;
    REGION: string;
    REGION_COD: string;
    DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    ratio_precarite: number;
  };
}

declare module "@/lib/json-db/maps/commune.json" {
  const data_commune: DataCommunes;
  export = data_commune;
}


interface PrecariteLogMob {
  "": number,
  "COMMUNE": string,
  "ratio_precarite_log": number,
  "TEE_log": number,
  "TEE_mob": number,
  "precarite_logement": number,
  "precarite_mobilite": number,
  "IPONDL_POUR_PRECA": number,
  "REG": number,
  "EPCI": number
}

declare module "@/lib/json-db/precarite-log-mob.json" {
  const data: PrecariteLogMob[];
  export = data;
}
