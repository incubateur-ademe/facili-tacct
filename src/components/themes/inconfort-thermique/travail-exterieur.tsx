"use client";

import { useSearchParams } from "next/navigation";

import { PieChart1 } from "@/components/charts/pieChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { CustomTooltip } from "@/components/utils/CalculTooltip";
import { travailExtDto } from "@/lib/dto";
import { travailExtMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import styles from "./themes.module.scss";

const sumProperty = (
  items: travailExtDto[],
  prop: "NA5AZ_sum" | "NA5BE_sum" | "NA5FZ_sum" | "NA5GU_sum" | "NA5OQ_sum",
) => {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}

const sum = (arr: number[]) => {
  return arr.reduce(function (a, b) {
    return a + b;
  }, 0);
}

export const TravailExterieur = (props: {
  inconfort_thermique: InconfortThermique[];
}) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;
  const travailExterieur = inconfort_thermique.map(travailExtMapper);
  const sums = {
    sumAgriculture: sumProperty(travailExterieur, "NA5AZ_sum"),
    sumIndustries: sumProperty(travailExterieur, "NA5BE_sum"),
    sumConstruction: sumProperty(travailExterieur, "NA5FZ_sum"),
    sumCommerce: sumProperty(travailExterieur, "NA5GU_sum"),
    sumAdministration: sumProperty(travailExterieur, "NA5OQ_sum"),
  };

  const graphData = [
    {
      id: "Agriculture, sylviculture et pêche",
      label: "Agriculture",
      count: sums.sumAgriculture,
      color: "#68D273",
      value: Number(((100 * sums.sumAgriculture) / sum(Object.values(sums))).toFixed(1)),
    },
    {
      id: "Industrie manufacturière, industries extractives et autres",
      label: "Industries",
      count: sums.sumIndustries,
      color: "#E4FFE3",
      value: Number(((100 * sums.sumIndustries) / sum(Object.values(sums))).toFixed(1)),
    },
    {
      id: "Construction",
      label: "Construction",
      count: sums.sumConstruction,
      color: "#BD72D6",
      value: Number(((100 * sums.sumConstruction) / sum(Object.values(sums))).toFixed(1)),
    },
    {
      id: "Commerce, transports et services divers",
      label: "Commerces et transports",
      count: sums.sumCommerce,
      color: "#FFF6E3",
      value: Number(((100 * sums.sumCommerce) / sum(Object.values(sums))).toFixed(1)),
    },
    {
      id: "Administration publique, enseignement, santé humaine et action sociale",
      label: "Administations",
      count: sums.sumAdministration,
      color: "#E3EDFF",
      value: Number(((100 * sums.sumAdministration) / sum(Object.values(sums))).toFixed(1)),
    },
  ];

  const travailExt =
    Number(((100 * sums.sumConstruction) / sum(Object.values(sums))).toFixed(1)) +
    Number(((100 * sums.sumAgriculture) / sum(Object.values(sums))).toFixed(1));

  const title =
    "Le travail en extérieur correspond aux travailleurs dans les secteurs de la construction, de l'agriculture, de la sylviculture et de la pêche.";
  return (
    <>
      {inconfort_thermique.length ? (
        <div className={styles.container}>
          <div className="w-2/5">
            {sums.sumConstruction || sums.sumAgriculture ? (
              <div className={styles.explicationWrapper}>
                { codgeo ?
                  <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                    Dans la commune de {travailExterieur[0]?.libelle_geographique}, la part cumulée des emplois dans les secteurs à risque est de{" "}
                    <b>{travailExt?.toFixed(1)}%</b>, soit {(sums.sumAgriculture + sums.sumConstruction).toFixed(0)} personnes.
                  </p>
                  : 
                  <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                    Dans l'EPCI {travailExterieur[0]?.libelle_epci}, la part cumulée des emplois dans les secteurs à risque est de{" "}
                    <b>{travailExt?.toFixed(1)}%</b>, soit {(sums.sumAgriculture + sums.sumConstruction).toFixed(0)} personnes.
                  </p>
                }
                <CustomTooltip title={title} />
              </div>
            ) : (
              ""
            )}
            <div className="px-4">
              <p>
                Les emplois cumulés des secteurs de l’agriculture et de la construction fournissent une image grossière
                de la part des emplois en extérieur sur le territoire. Une partie des transports, du tourisme, voire la
                collecte des déchets sont aussi concernés. Bien sûr, tout emploi amenant à évoluer dans des
                environnements marqués par des températures élevées, en extérieur comme en intérieur, est
                potentiellement à risque. La difficulté physique de la tâche à accomplir sera un facteur aggravant.
              </p>
              <p>
                Lors de la canicule estivale 2022 en France, sept accidents mortels au travail ayant un lien possible
                avec le temps chaud ont été signalés, dont trois décès dans le secteur de la construction. (Santé
                publique France, 2022).
              </p>
            </div>
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: "1em", margin: "0" }}>
                <b>Part des emplois par activités économiques regroupées en 5 postes</b>
              </p>
              {graphData ? <PieChart1 graphData={graphData} /> : <Loader />}
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>INSEE (EMP3) 2018</b>
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
