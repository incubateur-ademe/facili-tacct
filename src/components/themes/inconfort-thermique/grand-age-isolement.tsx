"use client";

import { useSearchParams } from "next/navigation";

import { type InconfortThermique } from "@/app/donnees-territoriales/type";
import { LineChart1 } from "@/components/charts/lineChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { GridCol } from "@/dsfr/layout";

interface Props {
  inconfort_thermique: InconfortThermique[];
}

type DataAge = {
  P20_POP80P: number;
  P20_POP80P_PSEUL: number;
  code_commune: string | null | undefined;
  epci: string | null | undefined;
  libelle_epci: string | null | undefined;
  libelle_geographique: string | null | undefined;
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
function sumProperty(
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
) {
  return items.reduce(function (a, b) {
    return a + b[property];
  }, 0);
}

export const GrandAgeIsolement = (props: Props) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const xData: string[] = ["1968", "1975", "1982", "1990", "1999", "2009", "2014", "2020"];
  const temp_db: DataAge[] = inconfort_thermique.map(el => {
    return {
      code_commune: el.code_commune,
      libelle_geographique: el.libelle_geographique,
      epci: el.epci,
      libelle_epci: el.libelle_epci,
      P20_POP80P: Number(el["P20_POP80P"]),
      P20_POP80P_PSEUL: Number(el["P20_POP80P_PSEUL"]),
      under_4_sum_1968: Number(el.under_4_sum_1968),
      to_80_sum_1968: Number(el.to_80_sum_1968),
      over_80_sum_1968: Number(el.over_80_sum_1968),
      under_4_sum_1975: Number(el.under_4_sum_1975),
      to_80_sum_1975: Number(el.to_80_sum_1975),
      over_80_sum_1975: Number(el.over_80_sum_1975),
      under_4_sum_1982: Number(el.under_4_sum_1982),
      to_80_sum_1982: Number(el.to_80_sum_1982),
      over_80_sum_1982: Number(el.over_80_sum_1982),
      under_4_sum_1990: Number(el.under_4_sum_1990),
      to_80_sum_1990: Number(el.to_80_sum_1990),
      over_80_sum_1990: Number(el.over_80_sum_1990),
      under_4_sum_1999: Number(el.under_4_sum_1999),
      to_80_sum_1999: Number(el.to_80_sum_1999),
      over_80_sum_1999: Number(el.over_80_sum_1999),
      under_4_sum_2009: Number(el.under_4_sum_2009),
      to_80_sum_2009: Number(el.to_80_sum_2009),
      over_80_sum_2009: Number(el.over_80_sum_2009),
      under_4_sum_2014: Number(el.under_4_sum_2014),
      to_80_sum_2014: Number(el.to_80_sum_2014),
      over_80_sum_2014: Number(el.over_80_sum_2014),
      under_4_sum_2020: Number(el.under_4_sum_2020),
      to_80_sum_2020: Number(el.to_80_sum_2020),
      over_80_sum_2020: Number(el.over_80_sum_2020),
    };
  });

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

  return (
    <>
      {inconfort_thermique.length ? (
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
              Dans l'EPCI {temp_db[0]?.libelle_epci} les personnes de plus de 80 ans représentent{" "}
              <b>{yData.over_80_2020_percent_epci}%</b> de la population en 2020.
            </p>
            <h4>COMPLÉMENT</h4>
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
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p style={{ margin: "0 2em 0" }}>
                <b>Évolution de la part de population de plus de 75 ans depuis 1968</b>
              </p>
              {yData.over_80_2020_percent_epci ? (
                <LineChart1 xData={xData} yData={Object.values(yData).map(Number)} />
              ) : (
                <Loader />
              )}
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
