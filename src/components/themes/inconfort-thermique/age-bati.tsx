import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import BarChart from "@/components/charts/BarChart";
import { GridCol } from "@/dsfr/layout";
import dataAgeBati from "@/lib/json-db/age-bati.json";

interface Row {
  code_epci: number;
  part_rp_ach06p: number;
  part_rp_ach19: number;
  part_rp_ach1945: number;
  part_rp_ach4690: number;
  part_rp_ach9105: number;
}

type DataEPCI = {
  features: EPCITypes[];
  type: string;
};

type EPCITypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    EPCI: string;
    EPCI_CODE: number;
  };
  type: string;
};

type DataCommunes = {
  features: CommunesTypes[];
  name: string;
  type: string;
};

type CommunesTypes = {
  geometry: {
    coordinates: number[][][][];
    type: string;
  };
  properties: {
    DCOE_C_COD: string;
    DCOE_L_LIB: string;
    DDEP_C_COD: string;
    DEPARTEMEN: string;
    EPCI: string;
    EPCI_CODE: string;
    REGION: string;
    REGION_COD: string;
    ratio_precarite: number;
  };
  type: string;
};

interface Props {
  activeDataTab: string;
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    graph: any;
    id: number;
    risque: string;
    titre: string;
  }>;
  data_communes: DataCommunes;
  data_epci: DataEPCI;
}

function processData(
  allRows: Row[],
  code: string,
  setChartData: (row: any) => void,
  setConstructionBefore2006: (row: any) => void,
) {
  if (allRows.find(el => el["code_epci"] === Number(code))) {
    const row: any = dataAgeBati.find(el => el["code_epci"] === Number(code));
    const sum = Object.values(row)
      .slice(2)
      .reduce((partialSum: number, a: any) => partialSum + a, 0); //REPLACE
    setConstructionBefore2006(sum);
    setChartData([
      {
        periode: "Avant 1919",
        "Votre EPCI": row["part_rp_ach19"].toFixed(1),
        "Votre EPCIColor": "#ececfe",
        France: 21.3,
        FranceColor: "hsl(125, 70%, 50%)",
      },
      {
        periode: "1919-1945",
        "Votre EPCI": row["part_rp_ach1945"].toFixed(1),
        "Votre EPCIColor": "#ececfe",
        France: 5.3,
        FranceColor: "hsl(125, 70%, 50%)",
      },
      {
        periode: "1946-1990",
        "Votre EPCI": row["part_rp_ach4690"].toFixed(1),
        "Votre EPCIColor": "#ececfe",
        France: 38.3,
        FranceColor: "hsl(125, 70%, 50%)",
      },
      {
        periode: "1991-2005",
        "Votre EPCI": row["part_rp_ach9105"].toFixed(1),
        "Votre EPCIColor": "#ececfe",
        France: 20,
        FranceColor: "hsl(125, 70%, 50%)",
      },
      {
        periode: "Après 2006",
        "Votre EPCI": row["part_rp_ach06p"].toFixed(1),
        "Votre EPCIColor": "#ececfe",
        France: 15,
        FranceColor: "hsl(125, 70%, 50%)",
      },
    ]);

    return;
  }
}

const AgeBati = (props: Props) => {
  const { data, activeDataTab, data_communes, data_epci } = props;
  const [chartData, setChartData] = useState([]);
  const [constructionBefore2006, setConstructionBefore2006] = useState<number>();

  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const epci_chosen = data_epci.features.find(el => el.properties.EPCI_CODE === Number(code));
  const commune_chosen = data_communes.features.filter(el => el.properties.EPCI_CODE === code);

  useEffect(() => {
    processData(dataAgeBati, code, setChartData, setConstructionBefore2006);
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
          Dans l'EPCI {epci_chosen?.properties.EPCI}, {constructionBefore2006?.toFixed(1)}% des résidences principales
          sont construites avant 2006.
        </p>
        <h4>EXPLICATION</h4>
        <p>
          La robustesse des logements face aux températures élevées dépend leur qualité intrinsèque (inertie thermique,
          présence de volets extérieurs, qualité des rénovations...). Si vous ne disposez pas d'étude spécifique sur le
          sujet, la période de construction, fournie par l'INSEE, vous donne une première approximation.
        </p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          <p style={{ margin: "0 2em 0" }}>Titre</p>
          <BarChart chartData={chartData} />
          <p>
            Source : <b>INSEE</b>
          </p>
        </div>
      </GridCol>
    </div>
  );
};

export default AgeBati;
