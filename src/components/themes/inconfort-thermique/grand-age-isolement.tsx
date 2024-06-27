"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import LineChart1 from "@/components/charts/lineChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getGrandAgeFromEPCI } from "./actions/grand-age";

interface GrandAge {
  "": number;
  "4_to_75_sum_1968": number;
  "4_to_75_sum_1975": number;
  "4_to_75_sum_1982": number;
  "4_to_75_sum_1990": number;
  "4_to_75_sum_1999": number;
  "4_to_75_sum_2009": number;
  "4_to_75_sum_2014": number;
  "4_to_75_sum_2020": number;
  "Code géographique": number;
  Département: number;
  "EPCI - Métropole": number;
  "Libellé de commune": string;
  "Libellé de l'EPCI / Métropole": string;
  "Libellé géographique": string;
  Région: number;
  over_75_sum_1968: number;
  over_75_sum_1975: number;
  over_75_sum_1982: number;
  over_75_sum_1990: number;
  over_75_sum_1999: number;
  over_75_sum_2009: number;
  over_75_sum_2014: number;
  over_75_sum_2020: number;
  under_4_sum_1968: number;
  under_4_sum_1975: number;
  under_4_sum_1982: number;
  under_4_sum_1990: number;
  under_4_sum_1999: number;
  under_4_sum_2009: number;
  under_4_sum_2014: number;
  under_4_sum_2020: number;
}

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

function sumProperty(items: TravailExt[], prop: "NA5AZ_sum" | "NA5BE_sum" | "NA5FZ_sum" | "NA5GU_sum" | "NA5OQ_sum") {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}

export const GrandAgeIsolement = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [xData, setXData] = useState<string[]>(["1968", "1975", "1982", "1990", "1999", "2009", "2014", "2020"]);
  const [yData, setYData] = useState<number[]>([]);

  useEffect(() => {
    void (async () => {
      setEpci_chosen(await getEPCI(Number(code)));
      const grandAgeData = await getGrandAgeFromEPCI(Number(code));
      // console.log('GrandAgeData', Object.values(grandAgeData))
      if (Object.keys(grandAgeData).length) {
        // const y_percents = GrandAgeAlgo(grandAgeData)
        const y_percents = Object.values(grandAgeData).slice(4);
        // console.log('y_percent', y_percents)
        setYData(y_percents);
        return;
      }
    })();
  }, [code]);

  return (
    <>
      {epci_chosen ? (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <GridCol lg={4}>
            <h4>LE CHIFFRE</h4>
            <p>
              Dans l'EPCI {epci_chosen?.properties["EPCI"]} les personnes de plus de 75 ans représentent{" "}
              {yData.at(-1)?.toFixed(1)}% de la population en 2020.
            </p>
            <h4>COMPLÉMENT</h4>
            <div>
              <p>Les personnes âgées représentent les 2/3 de la surmortalité en période de fortes chaleurs.  (Source : Santé Publique France, mai 2023)</p>
              <p>Leur vulnérabilité spécifique provient notamment de leur non-appréciation de leurs besoins d’hydratation, 
                mais aussi, sans surprise, à leur état de santé souvent dégradé.
              </p>
              <p>L’isolement social est un facteur de risque qui concerne toutes les populations.</p>
            </div>
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p style={{ margin: "0 2em 0" }}>
                <b>Évolution de la part de population de plus de 75 ans depuis 1968</b>
              </p>
              {xData && yData.length ? <LineChart1 xData={xData} yData={yData} /> : <Loader />}
              <p style={{ margin: "1em 0" }}>
                Source : <b>Observatoire des territoires</b>
              </p>
            </div>
          </GridCol>
        </div>
      ) : (
        <GraphDataNotFound code={code} />
      )}
    </>
  );
};
