"use client";

import { useSearchParams } from "next/navigation";

import { LineChart1 } from "@/components/charts/lineChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { CustomTooltip } from "@/components/utils/CalculTooltip";
import { grandAgeIsolementMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import styles from "./themes.module.scss";

type DataAge = {
  P20_POP80P: number;
  P20_POP80P_PSEUL: number;
  code_commune: string;
  epci: string;
  libelle_epci: string;
  libelle_geographique: string;
  over_80_sum_1968: number;
  over_80_sum_1975: number;
  over_80_sum_1982: number;
  over_80_sum_1990: number;
  over_80_sum_1999: number;
  over_80_sum_2009: number;
  over_80_sum_2014: number;
  over_80_sum_2020: number;
  to_80_sum_1968: number;
  to_80_sum_1975: number;
  to_80_sum_1982: number;
  to_80_sum_1990: number;
  to_80_sum_1999: number;
  to_80_sum_2009: number;
  to_80_sum_2014: number;
  to_80_sum_2020: number;
  under_4_sum_1968: number;
  under_4_sum_1975: number;
  under_4_sum_1982: number;
  under_4_sum_1990: number;
  under_4_sum_1999: number;
  under_4_sum_2009: number;
  under_4_sum_2014: number;
  under_4_sum_2020: number;
};

const sumProperty = (
  items: DataAge[],
  property:
    | "over_80_sum_1968"
    | "over_80_sum_1975"
    | "over_80_sum_1982"
    | "over_80_sum_1990"
    | "over_80_sum_1999"
    | "over_80_sum_2009"
    | "over_80_sum_2014"
    | "over_80_sum_2020"
    | "to_80_sum_1968"
    | "to_80_sum_1975"
    | "to_80_sum_1982"
    | "to_80_sum_1990"
    | "to_80_sum_1999"
    | "to_80_sum_2009"
    | "to_80_sum_2014"
    | "to_80_sum_2020"
    | "under_4_sum_1968"
    | "under_4_sum_1975"
    | "under_4_sum_1982"
    | "under_4_sum_1990"
    | "under_4_sum_1999"
    | "under_4_sum_2009"
    | "under_4_sum_2014"
    | "under_4_sum_2020",
) => {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
}

export const GrandAgeIsolement = (props: {
  inconfort_thermique: InconfortThermique[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { inconfort_thermique, data } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const xData: string[] = ["1968", "1975", "1982", "1990", "1999", "2009", "2014", "2020"];
  const temp_db = inconfort_thermique.map(grandAgeIsolementMapper);

  const yData = {
    over_80_1968_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_1968")) /
      (sumProperty(temp_db, "to_80_sum_1968") + sumProperty(temp_db, "under_4_sum_1968"))
    ).toFixed(2),
    over_80_1975_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_1975")) /
      (sumProperty(temp_db, "to_80_sum_1975") + sumProperty(temp_db, "under_4_sum_1975"))
    ).toFixed(2),
    over_80_1982_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_1982")) /
      (sumProperty(temp_db, "to_80_sum_1982") + sumProperty(temp_db, "under_4_sum_1982"))
    ).toFixed(2),
    over_80_1990_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_1990")) /
      (sumProperty(temp_db, "to_80_sum_1990") + sumProperty(temp_db, "under_4_sum_1990"))
    ).toFixed(2),
    over_80_1999_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_1999")) /
      (sumProperty(temp_db, "to_80_sum_1999") + sumProperty(temp_db, "under_4_sum_1999"))
    ).toFixed(2),
    over_80_2009_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_2009")) /
      (sumProperty(temp_db, "to_80_sum_2009") + sumProperty(temp_db, "under_4_sum_2009"))
    ).toFixed(2),
    over_80_2014_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_2014")) /
      (sumProperty(temp_db, "to_80_sum_2014") + sumProperty(temp_db, "under_4_sum_2014"))
    ).toFixed(2),
    over_80_2020_percent_epci: (
      (100 * sumProperty(temp_db, "over_80_sum_2020")) /
      (sumProperty(temp_db, "to_80_sum_2020") + sumProperty(temp_db, "under_4_sum_2020"))
    ).toFixed(2),
  };

  const title =
    "La proportion de personnes âgées que nous avons considérée correspond au pourcentage des personnes de plus de 80 ans dans la population à chaque recensement INSEE.";

  return (
    <>
      {inconfort_thermique.length ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                Dans l'EPCI {temp_db[0]?.libelle_epci} les personnes de plus de 80 ans représentent{" "}
                <b>{yData.over_80_2020_percent_epci}%</b> de la population en 2020.
              </p>
              <CustomTooltip title={title} />
            </div>
            <div>
              <p>
                Les personnes âgées représentent les 2/3 de la surmortalité en période de fortes chaleurs. (Source :
                Santé Publique France, mai 2023)
              </p>
              <p>
                Leur vulnérabilité spécifique provient notamment de leur non-appréciation de leurs besoins
                d’hydratation, mais aussi, sans surprise, à leur état de santé souvent dégradé.
              </p>
              <p>L’isolement social est un facteur de risque qui concerne toutes les populations.</p>
            </div>
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: "1em", margin: "0" }}>
                <b>Évolution de la part de population de plus de 80 ans depuis 1968</b>
              </p>
              {yData.over_80_2020_percent_epci ? (
                <div  style={{backgroundColor:"white", height: "500px", width: "100%"}}>
                  <LineChart1 xData={xData} yData={Object.values(yData).map(Number)}/>
                </div>
              ) : (
                <Loader />
              )}
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>Observatoire des territoires</b>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={code} />
      )}
    </>
  );
};
