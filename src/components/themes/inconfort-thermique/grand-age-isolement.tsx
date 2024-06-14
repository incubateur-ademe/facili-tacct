"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LineChart1 from "@/components/charts/lineChart1";
import { GridCol } from "@/dsfr/layout";
import CustomData_raw from "@/lib/json-db/age-evolution.json";

import { getEPCI } from "./actions/epci";

interface CustomData {
  "": number;
  "75 ans et plus 1968": number;
  "75 ans et plus 1975": number;
  "75 ans et plus 1982": number;
  "75 ans et plus 1990": number;
  "75 ans et plus 1999": number;
  "75 ans et plus 2009": number;
  "75 ans et plus 2014": number;
  "75 ans et plus 2020": number;
  "Code géographique": string;
  Département: number;
  "EPCI - Métropole": number;
  "Libellé de commune": string;
  "Libellé de l'EPCI / Métropole": string;
  "Libellé géographique": string;
  Région: number;
}

type DataEPCI = {
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

interface Props {
  activeDataTab: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
  // data_communes: DataCommunes;
  // data_epci: DataEPCI;
}

export const GrandAgeIsolement = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  // const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code);
  const grandAgeData = CustomData_raw as CustomData[];
  const [xData, setXData] = useState<Array<string | undefined>>([]);
  const [yData, setYData] = useState<number[]>([]);

  useEffect(() => {
    if (grandAgeData.find(el => el["EPCI - Métropole"] === Number(code))) {
      const row: CustomData = grandAgeData.find(el => el["EPCI - Métropole"] === Number(code))!; // REPLACE pourquoi !
      const x = Object.keys(row).slice(8, 16);
      const y = Object.values(row).slice(8, 16);
      const xSplit = x.map(el => el.split(" ").at(-1));
      setXData(xSplit);
      setYData(y);
      return;
    }

    void (async () => {
      setEpci_chosen(await getEPCI(Number(code)));
    })();
  }, [code, grandAgeData]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "1em",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
        <p>
          Dans l'EPCI {epci_chosen?.properties.EPCI} les personnes de plus de 75 ans représentent {yData.at(-1)}{" "}
          personnes dans la population
        </p>
        <h4>EXPLICATION</h4>
        <p>{data.find(el => el.titre === activeDataTab)?.donnee}</p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          <LineChart1 xData={xData} yData={yData} />
          <p>
            Source : <b>Observatoire des territoires</b>
          </p>
        </div>
      </GridCol>
    </div>
  );
};
