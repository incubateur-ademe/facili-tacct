import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import { PieChart1 } from "@/components/charts/pieChart1";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getTravailExtFromEPCI } from "./actions/travail-exterieur";

interface GraphData {
  color: string;
  id: string;
  label: string;
  value: number | undefined;
  count: number;
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
}

interface TravailExt {
  "": number;
  CODGEO: number;
  "EPCI - Métropole": number;
  LIBGEO: string;
  "Libellé de l'EPCI / Métropole": string;
  NA5AZ_sum: number;
  NA5BE_sum: number;
  NA5FZ_sum: number;
  NA5GU_sum: number;
  NA5OQ_sum: number;
}

function sumProperty(items: TravailExt[], prop: "NA5AZ_sum" | "NA5BE_sum" | "NA5FZ_sum" | "NA5GU_sum" | "NA5OQ_sum") {
  return items.reduce(function (a, b) {
    return a + b[prop];
  }, 0);
}

export const TravailExterieur = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [agriculture, setAgriculture] = useState<number>();
  const [industries, setIndustries] = useState<number>();
  const [construction, setConstruction] = useState<number>();
  const [commerce, setCommerce] = useState<number>();
  const [administration, setAdministration] = useState<number>();
  const [travailExt, setTavailExt] = useState<number>();
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  useEffect(() => {
    void (async () => {
      const dataTravailExtRows = await getTravailExtFromEPCI(Number(code));
      if (Object.keys(dataTravailExtRows).length) {
        const sumAgriculture = sumProperty(Object.values(dataTravailExtRows), "NA5AZ_sum");
        setAgriculture(sumAgriculture);
        const sumIndustries = sumProperty(Object.values(dataTravailExtRows), "NA5BE_sum");
        setIndustries(sumIndustries);
        const sumConstruction = sumProperty(Object.values(dataTravailExtRows), "NA5FZ_sum");
        setConstruction(sumConstruction);
        const sumCommerce = sumProperty(Object.values(dataTravailExtRows), "NA5GU_sum");
        setCommerce(sumCommerce);
        const sumAdministration = sumProperty(Object.values(dataTravailExtRows), "NA5OQ_sum");
        setAdministration(sumAdministration);
        // const x = Object.keys(dataTravailExtRows).slice(3, 10);
        // const y = Object.values(dataTravailExtRows).slice(3, 10);
        // const sumTest: number = Number(y.reduce((partialSum: number, a: number) => partialSum + a, 0));
        const allSums = sumAdministration + sumCommerce + sumConstruction + sumIndustries + sumAgriculture;
        setTavailExt(
          (100 * (sumAgriculture + sumConstruction)) /
            (sumAdministration + sumCommerce + sumConstruction + sumIndustries + sumAgriculture),
        );
        setGraphData([
          {
            id: "Agriculture, sylviculture et pêche",
            label: "Agriculture",
            count: sumAgriculture,
            color: "#68D273",
            value: Number((100*sumAgriculture/allSums).toFixed(1))
          },
          {
            id: "Industrie manufacturière, industries extractives et autres",
            label: "Industries",
            count: sumIndustries,
            color: "#E4FFE3",
            value: Number((100*sumIndustries/allSums).toFixed(1))
          },
          {
            id: "Construction",
            label: "Construction",
            count: sumConstruction,
            color: "#BD72D6",
            value: Number((100*sumConstruction/allSums).toFixed(1))
          },
          {
            id: "Commerce, transports et services divers",
            label: "Commerces et transports",
            count: sumCommerce,
            color: "#FFF6E3",
            value: Number((100*sumCommerce/allSums).toFixed(1))
          },
          {
            id: "Administration publique, enseignement, santé humaine et action sociale",
            label: "Administations",
            count: sumAdministration,
            color: "#E3EDFF",
            value: Number((100*sumAdministration/allSums).toFixed(1))
          },
        ]);
      }
      setEpci_chosen(await getEPCI(Number(code)));
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
          <GridCol lg={5}>
            {agriculture && construction ? (
              <div>
                <h4>LE CHIFFRE</h4>
                <p>
                  Dans l'EPCI {epci_chosen?.properties.EPCI}, la part cumulée des emplois dans les secteurs à risque est de{" "}
                  {travailExt?.toFixed(1)}%, soit {agriculture + construction}{" "}
                  personnes.
                </p>
              </div>
            ) : (
              ""
            )}
            <h4>EXPLICATION</h4>
            <div>
              <p>
                Les emplois cumulés des secteurs de l’agriculture et de la construction fournissent une image grossière de la part des emplois en 
                extérieur sur le territoire. Une partie des transports, du tourisme, voire la collecte des déchets sont aussi concernés. 
                Bien sûr, tout emploi amenant à évoluer dans des environnements marqués par des températures élevées, en extérieur comme en intérieur, 
                est potentiellement à risque. La difficulté physique de la tâche à accomplir sera un facteur aggravant.
              </p>
              <p>
                Lors de la canicule estivale 2022 en France, sept accidents mortels au travail ayant un lien possible avec le temps chaud ont 
                été signalés, dont trois décès dans le secteur de la construction. (Santé publique France, 2022).
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
