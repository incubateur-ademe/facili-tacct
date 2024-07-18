"use client"

import { useSearchParams } from "next/navigation";
import { Loader } from "@/components/loader";
import { PieChart1 } from "@/components/charts/pieChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";
import { InconfortThermique } from "@/app/donnees-territoriales/type";

interface Props {
  inconfort_thermique: InconfortThermique[];
}

type DataTravailExt = {
  code_commune: string | null | undefined,
  libelle_geographique: string | null | undefined,
  epci: string | null | undefined,
  libelle_epci: string | null | undefined,
  NA5AZ_sum: number;
  NA5BE_sum: number;
  NA5FZ_sum: number;
  NA5GU_sum: number;
  NA5OQ_sum: number;
}

function sumProperty(items: DataTravailExt[], prop: "NA5AZ_sum" | "NA5BE_sum" | "NA5FZ_sum" | "NA5GU_sum" | "NA5OQ_sum") {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}

function sum(arr: number[]) {
  return arr.reduce(function (a, b) {
     return a + b;
  }, 0);
}

export const TravailExterieur = (props: Props) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const temp_db: DataTravailExt[] = inconfort_thermique.map(el => {
    return {
      code_commune: el.code_commune,
      libelle_geographique: el.libelle_geographique ,
      epci: el.epci,
      libelle_epci: el.libelle_epci,
      NA5AZ_sum: Number(el.NA5AZ_sum),
      NA5BE_sum: Number(el.NA5BE_sum),
      NA5FZ_sum: Number(el.NA5FZ_sum),
      NA5GU_sum: Number(el.NA5GU_sum),
      NA5OQ_sum: Number(el.NA5OQ_sum),
    }
  })
  const sums = {
    sumAgriculture: sumProperty(temp_db, "NA5AZ_sum"),
    sumIndustries: sumProperty(temp_db, "NA5BE_sum"),
    sumConstruction: sumProperty(temp_db, "NA5FZ_sum"),
    sumCommerce: sumProperty(temp_db, "NA5GU_sum"),
    sumAdministration: sumProperty(temp_db, "NA5OQ_sum")
  }

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
  ]

  const travailExt = Number(((100 * sums.sumConstruction) / sum(Object.values(sums))).toFixed(1)) + Number(((100 * sums.sumAgriculture) / sum(Object.values(sums))).toFixed(1))
  
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
          <GridCol lg={5}>
            {sums.sumConstruction ? (
              <div>
                <h4>LE CHIFFRE</h4>
                <p>
                  Dans l'EPCI {temp_db[0]?.libelle_epci}, la part cumulée des emplois dans les secteurs à risque est
                  de <b>{travailExt?.toFixed(1)}%</b>, soit {sums.sumAgriculture + sums.sumConstruction} personnes.
                </p>
              </div>
            ) : (
              ""
            )}
            <h4>EXPLICATION</h4>
            <div>
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
          </GridCol>
          <GridCol lg={6}>
            <div className="flex flex-col justify-end">
              <p style={{ margin: "0 2em 0" }}>
                <b>Part des emplois par activités économiques regroupées en 5 postes</b>
              </p>
              {graphData ? <PieChart1 graphData={graphData} /> : <Loader />}
              <p>
                Source : <b>INSEE (EMP3) 2018</b>
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
