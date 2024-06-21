import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Loader } from "@/app/donnees-territoriales/loader";
import { PieChart2 } from "@/components/charts/pieChart2";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getVegetalisationFromEPCI } from "./actions/vegetalisation";
import { GraphDataNotFound } from "@/components/graph-data-not-found";

interface PieData {
  color: string;
  id: string;
  label: string;
  value: number;
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
  // data_communes: DataCommunes;
  // data_epci: DataEPCI;
}

export const Vegetalisation = (props: Props) => {
  const { data, activeDataTab } = props;
  const [PieData, setPieData] = useState<PieData[]>([]);
  const searchParams = useSearchParams();
  const code = searchParams.get("code")!;
  const [epci_chosen, setEpci_chosen] = useState<EPCITypes>();
  const [foret, setForet] = useState<number>();

  useEffect(() => {
    void (async () => {
      const dataVegetalisationRows = await getVegetalisationFromEPCI(Number(code));
      if (Object.keys(dataVegetalisationRows).length) {
        // const x = Object.keys(dataTravailExtRows).slice(3, 10);
        const y = Object.values(dataVegetalisationRows).slice(3);
        const sum_ha: number = Number(y.reduce((partialSum: number, a: number) => partialSum + a, 0));
        setForet((100 * y.at(2)) / sum_ha);
        setPieData([
          {
            id: "Sols artificiels",
            label: "Artificiels",
            value: Number(y.at(0)),
            color: "#ACBBC1",
          },
          {
            id: "Sols agricoles",
            label: "Agricoles",
            value: Number(y.at(1)),
            color: "#FF8B00",
          },
          {
            id: "Forêts et sols semi-naturels",
            label: "Forêt",
            value: Number(y.at(2)),
            color: "#68D273",
          },
          {
            id: "Sols humides",
            label: "Sols humides",
            value: Number(y.at(3)),
            color: "#f1e15b",
          },
          {
            id: "Eau",
            label: "Eau",
            value: Number(y.at(4)),
            color: "#28D1FF",
          },
        ]);
      }
      setEpci_chosen(await getEPCI(Number(code)));
    })();
  }, [code]);

  return (
    <>
    { epci_chosen ? 
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
            Dans l'EPCI {epci_chosen?.properties.EPCI}, {foret?.toFixed(1)}% du territoire est de la forêt ou des espaces
            semi-naturels.
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
            <p style={{ margin: "0 2em 0" }}>Répartition des différents types de sols (en ha) dans l'EPCI</p>
            {PieData ? <PieChart2 PieData={PieData} /> : <Loader />}
            <p>
              Source : <b>CORINE Land Cover</b>
            </p>
          </div>
        </GridCol>
      </div>
      : <GraphDataNotFound code={code} />
    }
    </>
  );
};
