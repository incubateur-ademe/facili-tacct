"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LineChart1 from "@/components/charts/lineChart1";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getGrandAgeFromEPCI } from "./actions/grand-age";
import { Loader } from "@/app/donnees-territoriales/loader";

import { GrandAgeAlgo } from "./algorithms/grand-age";

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

function sumProperty (items: TravailExt[], prop: ("NA5AZ_sum" | "NA5BE_sum" | "NA5FZ_sum" | "NA5GU_sum" | "NA5OQ_sum")) {
  return items.reduce(function(a, b) {
      return a + b[prop];
  }, 0);
};

export const GrandAgeIsolement = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  // const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code);
  const [xData, setXData] = useState<Array<string | undefined>>([]);
  const [yData, setYData] = useState<number[]>([]);

  const selectedColumns = [
    'over_75_sum_1968', 
    'over_75_sum_1975',
    'over_75_sum_1982',
    'over_75_sum_1990',
    'over_75_sum_1999',
    'over_75_sum_2009',
    'over_75_sum_2014',
    'over_75_sum_2020',
  ];

  useEffect(() => {
    void (async() => {
      const grandAgeData = await getGrandAgeFromEPCI(Number(code));
      console.log('grandAge data', grandAgeData)
      if (Object.keys(grandAgeData).length) {
        const moule = GrandAgeAlgo(grandAgeData)
        console.log('moule', moule)
        // const x = Object.keys(row).slice(1, 26);
        const values = grandAgeData.map(row => [...selectedColumns].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {}));
        const row = values[0]; 
        const x = Object.keys(row);
        const y = Object.values(row);
        const xSplit = x.map(el => el.split("_").at(-1));

        setXData(xSplit);
        setYData(y);

        return;
      }
      setEpci_chosen(await getEPCI(Number(code)));
    })();
  }, [code]);

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
          {xData ? <LineChart1 xData={xData} yData={yData} /> : <Loader />}
          <p>
            Source : <b>Observatoire des territoires</b>
          </p>
        </div>
      </GridCol>
    </div>
  );
};
