import { useSearchParams } from "next/navigation";

import { type InconfortThermique } from "@/app/donnees-territoriales/type";
import { BarChart } from "@/components/charts/BarChart";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { Loader } from "@/components/loader";
import { GridCol } from "@/dsfr/layout";

interface Props {
  inconfort_thermique: InconfortThermique[];
}

interface ChartData {
  France: number;
  FranceColor: string;
  "Votre EPCI"?: string;
  "Votre EPCIColor"?: string;
  periode: string;
}

type DataAgeBati = {
  age_bati_19_45: number;
  age_bati_46_90: number;
  age_bati_91_05: number;
  age_bati_post06: number;
  age_bati_pre_19: number;
  code_commune: string | null | undefined;
  epci: string | null | undefined;
  libelle_epci: string | null | undefined;
  libelle_geographique: string | null | undefined;
};

export const AgeBati = (props: Props) => {
  const { inconfort_thermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;

  const temp_db: DataAgeBati[] = inconfort_thermique.map(el => {
    return {
      code_commune: el.code_commune,
      libelle_geographique: el.libelle_geographique,
      epci: el.epci,
      libelle_epci: el.libelle_epci,
      age_bati_pre_19: Number(el.age_bati_pre_19),
      age_bati_19_45: Number(el.age_bati_19_45),
      age_bati_46_90: Number(el.age_bati_46_90),
      age_bati_91_05: Number(el.age_bati_91_05),
      age_bati_post06: Number(el.age_bati_post06),
    };
  });

  const constructionBefore2006 =
    temp_db[0]?.age_bati_pre_19 + temp_db[0]?.age_bati_19_45 + temp_db[0]?.age_bati_46_90 + temp_db[0]?.age_bati_91_05;

  const chartData: ChartData[] = [
    {
      periode: "Avant 1919",
      "Votre EPCI": temp_db[0]?.age_bati_pre_19?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 20.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1919-1945",
      "Votre EPCI": temp_db[0]?.age_bati_19_45?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 9.2,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1946-1990",
      "Votre EPCI": temp_db[0]?.age_bati_46_90?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 43.4,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "1991-2005",
      "Votre EPCI": temp_db[0]?.age_bati_91_05?.toFixed(1),
      "Votre EPCIColor": "#ececfe",
      France: 15.5,
      FranceColor: "hsl(125, 70%, 50%)",
    },
    {
      periode: "Après 2006",
      "Votre EPCI": temp_db[0]?.age_bati_post06?.toFixed(1),
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
            alignItems: "center",
          }}
        >
          <GridCol lg={4}>
            <h4>LE CHIFFRE</h4>
            <p>
              Dans l'EPCI {temp_db[0]?.libelle_epci}, <b>{constructionBefore2006?.toFixed(1)}%</b> des résidences
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
