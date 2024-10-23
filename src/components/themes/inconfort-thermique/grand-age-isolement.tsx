"use client";

import { useSearchParams } from "next/navigation";

import { LineChart1 } from "@/components/charts/lineChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { grandAgeIsolementMapper } from "@/lib/mapper/inconfortThermique";
import { DataGrandAge, InconfortThermique } from "@/lib/postgres/models";
import { CustomTooltip } from "@/lib/utils/CalculTooltip";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import styles from "./themes.module.scss";

const sumProperty = (
  items: DataGrandAge[],
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
    return a + (b[property] || 0);
  }, 0);
}

export const GrandAgeIsolement = (props: {
  inconfortThermique: InconfortThermique[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { inconfortThermique } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const xData = ["1968", "1975", "1982", "1990", "1999", "2009", "2014", "2020"];
  const grandAgeIsolement = inconfortThermique.map(grandAgeIsolementMapper);

  const yData = {
    over_80_1968_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_1968")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_1968") + sumProperty(grandAgeIsolement, "under_4_sum_1968"))
    ).toFixed(2),
    over_80_1975_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_1975")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_1975") + sumProperty(grandAgeIsolement, "under_4_sum_1975"))
    ).toFixed(2),
    over_80_1982_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_1982")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_1982") + sumProperty(grandAgeIsolement, "under_4_sum_1982"))
    ).toFixed(2),
    over_80_1990_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_1990")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_1990") + sumProperty(grandAgeIsolement, "under_4_sum_1990"))
    ).toFixed(2),
    over_80_1999_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_1999")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_1999") + sumProperty(grandAgeIsolement, "under_4_sum_1999"))
    ).toFixed(2),
    over_80_2009_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_2009")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_2009") + sumProperty(grandAgeIsolement, "under_4_sum_2009"))
    ).toFixed(2),
    over_80_2014_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_2014")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_2014") + sumProperty(grandAgeIsolement, "under_4_sum_2014"))
    ).toFixed(2),
    over_80_2020_percent_epci: (
      (100 * sumProperty(grandAgeIsolement, "over_80_sum_2020")) /
      (sumProperty(grandAgeIsolement, "to_80_sum_2020") + sumProperty(grandAgeIsolement, "under_4_sum_2020"))
    ).toFixed(2),
  };
  const yGraphData = Object.values(yData).map(Number).map(value => isNaN(value) ? null : value);
  const methodeCalcul = "Nombre de personnes de plus de 80 ans divisé par la population totale à chaque recensement INSEE.";

  return (
    <>
      {inconfortThermique.length && Sum(yGraphData.filter(e => e != null)) != 0 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              { codgeo ?
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  En 2020, <b>{yData.over_80_2020_percent_epci}%</b> de la population de votre collectivité est constitué de personnes âgées de plus de 80 ans 
                  (soit <b>{sumProperty(grandAgeIsolement, "over_80_sum_2020")}</b> personnes). 
                </p>
                : 
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  En 2020, <b>{yData.over_80_2020_percent_epci}%</b> de la population de votre collectivité est constitué de personnes âgées de plus de 80 ans 
                  (soit <b>{sumProperty(grandAgeIsolement, "over_80_sum_2020")}</b> personnes). 
                </p>
              }
              <CustomTooltip title={methodeCalcul} />
            </div>
            <div className="px-4">
              <p>
                Les personnes âgées représentent les deux tiers de la surmortalité en période de fortes chaleurs.
                <br></br>Le corps des personnes âgées régule moins bien la température, ce qui les rend plus sensibles aux fortes chaleurs. Elles ressentent également moins la soif, ce qui augmente les risques de déshydratation. S'ajoutent souvent des problèmes de santé chroniques, comme les maladies cardiovasculaires ou respiratoires, aggravés par la chaleur.
              </p>
              <p>
                Cette vulnérabilité est exacerbée par plusieurs facteurs : précarité énergétique, isolement social, et conditions de logement inadéquates. Plus ces facteurs se cumulent, plus le risque d’une surmortalité en période de chaleur augmente. Ces conditions créent un "cercle vicieux" qui accroît leur fragilité face à l’inconfort thermique. 
              </p>
              <p>
                ⇒ C’est toujours beaucoup trop ! <b>33 000 décès ont été attribués à la chaleur</b> entre 2014 et 2022, dont <b>23 000</b> chez les personnes âgées de 75 ans et plus. 
              </p>
              <p>
                ⇒ <b>28% seulement des décès</b> liés à la chaleur se produisent pendant les canicules, qui ne représente que 6% des jours de l’été. Soyons vigilants aussi en dehors des périodes de canicule. 
              </p>
              <p>
                ⇒ Tous concernés : les personnes de <b>moins de 75 ans</b>, c’est 71% des consultations SOS Médecins en 2022 et un <b>tiers des décès</b> liés à la chaleur entre 2014 et 2022.
              </p>
            </div>
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: "1em", margin: "0" }}>
                <b>Évolution de la part de population de plus de 80 ans depuis 1968</b>
              </p>
              {yData.over_80_2020_percent_epci ? (
                <div  style={{backgroundColor:"white", height: "500px", width: "100%"}}>
                  <LineChart1 xData={xData} yData={yGraphData}/>
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
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
