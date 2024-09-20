import { useSearchParams } from "next/navigation";

import { BarChart } from "@/components/charts/BarChart";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { AgeBatiDto } from "@/lib/dto";
import { ageBatiMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";
import { Sum } from "@/utils/reusableFunctions/sum";
import styles from "./themes.module.scss";

interface ChartData {
  France: number;
  FranceColor: string;
  "Votre Collectivité"?: string;
  "Votre CollectiviteColor"?: string;
  periode: string;
}

const average = (
  array: AgeBatiDto[], 
  prop: "age_bati_pre_19" | "age_bati_19_45" | "age_bati_46_90" | "age_bati_91_05" | "age_bati_post06"
) => array.reduce((a: number, b: AgeBatiDto) => a + b[prop], 0) / array.length;

export const AgeBati = (props: {
  inconfort_thermique: InconfortThermique[];
}) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo");
  const codepci = searchParams.get("codepci")!;
  const ageBati = inconfort_thermique.map(ageBatiMapper);

  const averages = {
    averageAgeBatiPre19: average(ageBati, "age_bati_pre_19"),
    averageAgeBati1945: average(ageBati, "age_bati_19_45"),
    averageAgeBati4690: average(ageBati, "age_bati_46_90"),
    averageAgeBati9105: average(ageBati, "age_bati_91_05"),
    averageAgeBatiPost06: average(ageBati, "age_bati_post06"),
  };

  const constructionBefore2006 =
    averages.averageAgeBatiPre19 + averages.averageAgeBati1945 + averages.averageAgeBati4690 + averages.averageAgeBati9105;

  const chartData: ChartData[] = [
    {
      periode: "Avant 1919",
      "Votre Collectivité": averages.averageAgeBatiPre19.toFixed(1),
      "Votre CollectiviteColor": "#ececfe",
      France: 20.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1919-1945",
      "Votre Collectivité": averages.averageAgeBati1945.toFixed(1),
      "Votre CollectiviteColor": "#ececfe",
      France: 9.2,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1946-1990",
      "Votre Collectivité": averages.averageAgeBati4690.toFixed(1),
      "Votre CollectiviteColor": "#ececfe",
      France: 43.4,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1991-2005",
      "Votre Collectivité": averages.averageAgeBati9105.toFixed(1),
      "Votre CollectiviteColor": "#ececfe",
      France: 15.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "Après 2006",
      "Votre Collectivité": averages.averageAgeBatiPost06.toFixed(1),
      "Votre CollectiviteColor": "#ececfe",
      France: 11.4,
      FranceColor: "hsl(125, 70%, 50%)",
    },
  ];

  return (
    <>
      {inconfort_thermique.length && Sum(Object.values(averages)) != 0 ? (
        <div className={styles.container}>
          <div className="w-2/5">
            <div className={styles.explicationWrapper}>
              { codgeo ?
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans la commune de {ageBati[0]?.libelle_geographique}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
                  principales sont construites avant 2006.
                </p>
                : 
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans l'EPCI {ageBati[0]?.libelle_epci}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
                  principales sont construites avant 2006.
                </p>
              }
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
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
