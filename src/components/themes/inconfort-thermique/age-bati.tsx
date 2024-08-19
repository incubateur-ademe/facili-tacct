import { useSearchParams } from "next/navigation";

import { BarChart } from "@/components/charts/BarChart";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { GridCol } from "@/dsfr/layout";
import { ageBatiMapper } from "@/lib/mapper/inconfortThermique";
import { InconfortThermique } from "@/lib/postgres/models";

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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <GridCol lg={4}>
            <div
              style={{
                backgroundColor: "#F9F9FF",
                margin: "1em 0",
                padding: "1em",
                borderRadius: "0.5em",
              }}
            >
              <p style={{color: "#161616"}}>
                Dans l'EPCI {ageBati[0]?.libelle_epci}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
                principales sont construites avant 2006.
              </p>
            </div>
            <p>
              La robustesse des logements face aux températures élevées dépend leur qualité intrinsèque (inertie
              thermique, présence de volets extérieurs, qualité des rénovations...). Si vous ne disposez pas d'étude
              spécifique sur le sujet, la période de construction, fournie par l'INSEE, vous donne une première
              approximation.
            </p>
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p>
                <b>Périodes de construction des bâtiments</b>
              </p>
              {chartData ? <BarChart chartData={chartData} /> : <Loader />}
              <p>
                Source : <b style={{ color: "#0063CB" }}>INSEE</b>
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
