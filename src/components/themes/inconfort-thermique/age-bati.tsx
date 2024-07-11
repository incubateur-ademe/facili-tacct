import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import BarChart from "@/components/charts/BarChart";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";

import { getAgeBatiFromEPCI } from "./actions/age-bati";
import { getEPCI } from "./actions/epci";

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

interface GraphData {
  France: number;
  FranceColor: string;
  "Votre EPCI": string;
  "Votre EPCIColor": string;
  periode: string;
}

export const AgeBati = (props: Props) => {
  const { data, activeDataTab } = props;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [chartData, setChartData] = useState<GraphData[]>([]);
  const [constructionBefore2006, setConstructionBefore2006] = useState<number>();

  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  useEffect(() => {
    void (async () => {
      const dataAgeBatiRows = await getAgeBatiFromEPCI(Number(code));
      if (Object.keys(dataAgeBatiRows).length) {
        const sum: number = Number(
          Object.values(dataAgeBatiRows)
            .slice(2)
            .reduce((partialSum: number, a: number) => partialSum + a, 0),
        );
        setConstructionBefore2006(sum);
        setChartData([
          {
            periode: "Avant 1919",
            "Votre EPCI": dataAgeBatiRows["part_rp_ach19"].toFixed(1),
            "Votre EPCIColor": "#ececfe",
            France: 20.5,
            FranceColor: "hsl(125, 70%, 50%)",
          },
          {
            periode: "1919-1945",
            "Votre EPCI": dataAgeBatiRows["part_rp_ach1945"].toFixed(1),
            "Votre EPCIColor": "#ececfe",
            France: 9.2,
            FranceColor: "hsl(125, 70%, 50%)",
          },
          {
            periode: "1946-1990",
            "Votre EPCI": dataAgeBatiRows["part_rp_ach4690"].toFixed(1),
            "Votre EPCIColor": "#ececfe",
            France: 43.4,
            FranceColor: "hsl(125, 70%, 50%)",
          },
          {
            periode: "1991-2005",
            "Votre EPCI": dataAgeBatiRows["part_rp_ach9105"].toFixed(1),
            "Votre EPCIColor": "#ececfe",
            France: 15.5,
            FranceColor: "hsl(125, 70%, 50%)",
          },
          {
            periode: "Après 2006",
            "Votre EPCI": dataAgeBatiRows["part_rp_ach06p"].toFixed(1),
            "Votre EPCIColor": "#ececfe",
            France: 11.4,
            FranceColor: "hsl(125, 70%, 50%)",
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
          <GridCol lg={4}>
            <h4>LE CHIFFRE</h4>
            <p>
              Dans l'EPCI {epci_chosen?.properties.EPCI}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
              principales sont construites avant 2006.
            </p>
            <h4>EXPLICATION</h4>
            <p>
              La robustesse des logements face aux températures élevées dépend leur qualité intrinsèque (inertie
              thermique, présence de volets extérieurs, qualité des rénovations...). Si vous ne disposez pas d'étude
              spécifique sur le sujet, la période de construction, fournie par l'INSEE, vous donne une première
              approximation.
            </p>
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p style={{ margin: "0 2em 0" }}>
                <b>Périodes de construction des bâtiments</b>
              </p>
              {chartData ? <BarChart chartData={chartData} /> : <Loader />}
              <p>
                Source : <b>INSEE</b>
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
