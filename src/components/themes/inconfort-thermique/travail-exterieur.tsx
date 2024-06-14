import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import { PieChart1 } from "@/components/charts/pieChart1";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getTravailExtFromEPCI } from "./actions/travail-exterieur";

interface GraphData {
  color: string;
  id: string;
  label: string;
  value: number | undefined;
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

export const TravailExterieur = (props: Props) => {
  const { data, activeDataTab } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [graphData, setGraphData] = useState<GraphData[]>([]);

  useEffect(() => {
    void (async () => {
      const dataTravailExtRows = await getTravailExtFromEPCI(Number(code));
      if (Object.keys(dataTravailExtRows).length) {
        // const x = Object.keys(dataTravailExtRows).slice(3, 10);
        const y = Object.values(dataTravailExtRows).slice(3, 10);
        const sum: number = Number(y.reduce((partialSum: number, a: number) => partialSum + a, 0));
        const travailExt = Number(y.at(0)) + Number(y.at(2));
        setGraphData([
          {
            id: "Artisans, commerçants, chefs d'entreprise",
            label: "Commerçants",
            value: Number(y.at(1)),
            color: "#68D273",
          },
          {
            id: "Travail en extérieur (Ouvriers et agriculteurs)",
            label: "Travail en extérieur",
            value: Number(travailExt.toFixed(1)),
            color: "#97e3d5",
          },
          {
            id: "Employés",
            label: "Employés",
            value: Number(y.at(3)),
            color: "#61cdbb",
          },
          {
            id: "Professions intermédiaires",
            label: "Professions intermédiaires",
            value: Number(y.at(4)),
            color: "#e8a838",
          },
          {
            id: "Cadres",
            label: "Cadres",
            value: Number(y.at(5)),
            color: "#f1e15b",
          },
          {
            id: "Retraités",
            label: "Retraités",
            value: Number(y.at(6)),
            color: "#f47560",
          },
          {
            id: "Autre",
            label: "Autre",
            value: Number((100 - sum).toFixed(1)),
            color: "#e8c1a0",
          },
        ]);
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
          Dans l'EPCI {epci_chosen?.properties.EPCI}, la part des travailleurs en extérieur représente XXXX personnes
          dans la population
        </p>
        <h4>EXPLICATION</h4>
        <p>{data.find(el => el.titre === activeDataTab)?.donnee}</p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          {graphData ? <PieChart1 graphData={graphData} /> : <Loader />}
          <p>
            Source : <b>Observatoire des territoires</b>
          </p>
        </div>
      </GridCol>
    </div>
  );
};
