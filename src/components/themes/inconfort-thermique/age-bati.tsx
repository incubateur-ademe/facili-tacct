import { useSearchParams } from "next/navigation";

import { BarChart } from "@/components/charts/BarChart";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { ageBatiMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import styles from "./themes.module.scss";

interface ChartData {
  France: number;
  FranceColor: string;
  "Votre EPCI"?: string;
  "Votre EPCIColor"?: string;
  periode: string;
}

export const AgeBati = (props: {
  inconfort_thermique: InconfortThermique[];
}) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  const ageBati = inconfort_thermique.map(ageBatiMapper);

  const constructionBefore2006 =
    ageBati[0]?.age_bati_pre_19 + ageBati[0]?.age_bati_19_45 + ageBati[0]?.age_bati_46_90 + ageBati[0]?.age_bati_91_05;

  const chartData: ChartData[] = [
    {
      periode: "Avant 1919",
      "Votre EPCI": ageBati[0]?.age_bati_pre_19?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 20.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1919-1945",
      "Votre EPCI": ageBati[0]?.age_bati_19_45?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 9.2,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1946-1990",
      "Votre EPCI": ageBati[0]?.age_bati_46_90?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 43.4,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1991-2005",
      "Votre EPCI": ageBati[0]?.age_bati_91_05?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 15.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "Après 2006",
      "Votre EPCI": ageBati[0]?.age_bati_post06?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 11.4,
      FranceColor: "hsl(125, 70%, 50%)",
    },
  ];

  return (
    <>
      {inconfort_thermique.length ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              <p style={{color: "#161616"}}>
                Dans l'EPCI {ageBati[0]?.libelle_epci}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
                principales sont construites avant 2006.
              </p>
            </div>
            <p className="px-4">
              La robustesse des logements face aux températures élevées dépend leur qualité intrinsèque (inertie
              thermique, présence de volets extérieurs, qualité des rénovations...). Si vous ne disposez pas d'étude
              spécifique sur le sujet, la période de construction, fournie par l'INSEE, vous donne une première
              approximation.
            </p>
          </div>
          <div className="w-3/5">
            <div className={styles.graphWrapper}>
              <p style={{ padding: "1em", margin: "0" }}>
                <b>Périodes de construction des bâtiments</b>
              </p>
              {chartData ? <BarChart chartData={chartData} /> : <Loader />}
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>INSEE</b>
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
