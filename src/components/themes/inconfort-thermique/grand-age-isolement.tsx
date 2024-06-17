"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import LineChart1 from "@/components/charts/lineChart1";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
// import { getGrandAgeFromEPCI } from "./actions/grand-age";
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
  // const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  // console.log('epci_chosen', epci_chosen)
  // // const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code);
  // const [xData, setXData] = useState<Array<string>>(['1968', '1975', '1982', '1990', '1999', '2009', '2014', '2020']);
  // const [yData, setYData] = useState<number[]>([]);

  // useEffect(() => {
  //   void (async() => {
  //     setEpci_chosen(await getEPCI(Number(code)));
  //     const grandAgeData = await getGrandAgeFromEPCI(Number(code));
  //     if (Object.keys(grandAgeData).length) {
  //       const y_percents = GrandAgeAlgo(grandAgeData)
  //       setYData(y_percents);
  //       return;
  //     }

  //   })();
  // }, [code]);

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
      {/* <GridCol lg={5}>
        <h4>LE CHIFFRE</h4>
        <p>
          Dans l'EPCI {epci_chosen?.properties["EPCI"]} les personnes de plus de 75 ans représentent {yData.at(-1)?.toFixed(1)}% de la population en 2020.
        </p>
        <h4>EXPLICATION</h4>
        <div>
          <p>La sensibilité de la population est généralement estimée au regard de facteurs démographique, social ou culturel.</p><br></br><br></br>
          <ul>
            <li>
              Démographie : 2/3 de la surmortalité chez les + de 80 ans concerne : les personnes fragilisées sur le plan économique ou social (isolement),
              la précarité du logement (GEODIP ou terrystory), les SDF (se rapprocher des services sociaux), les travailleurs en extérieur 
              (emplois dans la construction, l'agriculture, la forêt, les transport, le tourisme, voire la collecte des déchets).
            </li>
            <li>
              Culturel : culture du risque "chaleur"
            </li>
            <li>
              Facteurs comportementaux : temps passé à l'extérieur, habillement, utilisation de ventilateurs.
            </li>
            <li>
            socio-culturels : faire la sieste.
            </li>
          </ul>
          Un tiers de la surmortalité attribuable aux périodes de fortes chaleurs concerne des personnes de moins de 75 ans.
        </div>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          {xData ? <LineChart1 xData={xData} yData={yData} /> : <Loader />}
          <p style={{margin: "1em 0"}}>
            Source : <b>Observatoire des territoires</b>
          </p>
        </div>
      </GridCol> */}
    </div>
  );
};
