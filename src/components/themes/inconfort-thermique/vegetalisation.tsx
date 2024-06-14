import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import PieChart2 from "@/components/charts/pieChart2";
import { GridCol } from "@/dsfr/layout";
import dataVegetalisation_raw from "@/lib/json-db/vegetalisation.json";

const dataVegetalisation = dataVegetalisation_raw as Row[];

interface Row {
  "": number;
  "1_artificialise": number;
  "2_agricole": number;
  "3_foret_semiNaturel": number;
  "4_humide": number;
  "5_eau": number;
  "Code Insee de la commune": number;
  DEP_x: number;
  DEP_y: number;
  EPCI_x: number;
  EPCI_y: number;
  LIBEPCI_x: string;
  LIBEPCI_y: string;
  LIBGEO_x: string;
  LIBGEO_y: string;
  REG_x: number;
  REG_y: number;
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
  setRow: (row: any) => void,
  setValues: (y: any) => void,
  setPieData: (array: any) => void,
) {
  if (allRows.find(el => el["EPCI_x"] === Number(code))) {
    const row: any = dataVegetalisation.find(el => el["EPCI_x"] === Number(code)); //REPLACE
    console.log("row", row);
    // var x = Object.keys(row).slice(3, 10)
    const y = Object.values(row).slice(2, 7);
    setValues(y);
    console.log("y", y);
    setRow(row);
    setPieData([
      {
        id: "Sols artificiels",
        label: "Artificiels",
        value: y.at(0),
        color: "#ACBBC1",
      },
      {
        id: "Sols agricoles",
        label: "Agricoles",
        value: y.at(1),
        color: "#FF8B00",
      },
      {
        id: "Forêts et sols semi-naturels",
        label: "Forêt",
        value: y.at(2),
        color: "#68D273",
      },
      {
        id: "Sols humides",
        label: "Sols humides",
        value: y.at(3),
        color: "#f1e15b",
      },
      {
        id: "Eau",
        label: "Eau",
        value: y.at(4),
        color: "#28D1FF",
      },
    ]);
    return;
  }
}

const Vegetalisation = (props: Props) => {
  const { data, activeDataTab, data_communes, data_epci } = props;
  const [row, setRow] = useState();
  const [values, setValues] = useState<any[] | unknown[]>([0, 0, 0, 0, 0]);
  const [PieData, setPieData] = useState([]);
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const epci_chosen = data_epci.features.find(el => el.properties.EPCI_CODE === Number(code));

  const sum_ha = values.reduce((partialSum: any, a) => partialSum + a, 0);
  const percent_foret = (100 * values.at(2)) / sum_ha;

  useEffect(() => {
    processData(dataVegetalisation, code, setRow, setValues, setPieData);
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
          Dans l'EPCI{epci_chosen?.properties.EPCI}, {percent_foret.toFixed(1)}% du territoire est de la forêt ou des
          espaces semi-naturels (SIGNIFICATION ?????)
        </p>
        <h4>EXPLICATION</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis fermentum tortor. Sed pellentesque ultrices
          justo id laoreet. Etiam dui augue, semper non eleifend eget, mollis sed erat. Praesent sollicitudin venenatis
          placerat. Vivamus dignissim lorem nec mattis varius. Ut euismod placerat lacus, rutrum molestie leo ornare
          vitae. Pellentesque at neque tristique, lobortis nisl quis, vestibulum enim. Vestibulum tempus venenatis dui
          volutpat dignissim. Donec sit amet ante vel enim vestibulum placerat. Nunc volutpat urna in gravida volutpat.
          Donec cursus massa mollis mi egestas suscipit.
        </p>
      </GridCol>
      <GridCol lg={6}>
        <div className="flex flex-col justify-end">
          <p style={{ margin: "0 2em 0" }}>Titre</p>
          <PieChart2 PieData={PieData} />
          <p>
            Source : <b>CORINE Land Cover</b>
          </p>
        </div>
      </GridCol>
    </div>
  );
};

export default Vegetalisation;
