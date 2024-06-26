import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// import { PieChart2 } from "@/components/charts/pieChart2";
import VegetalisationMap from "@/assets/images/vegetalisation-map.png";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { GridCol } from "@/dsfr/layout";

import { getEPCI } from "./actions/epci";
import { getVegetalisationFromEPCI } from "./actions/vegetalisation";

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

const GraphImage = VegetalisationMap as HTMLImageElement;

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
              Dans l'EPCI {epci_chosen?.properties.EPCI}, <b>{foret?.toFixed(1)}%</b> du territoire est de la forêt ou des
              espaces semi-naturels.
            </p>
            <h4>EXPLICATION</h4>
            <p>
              La présence d’arbres permet d’apporter de l’ombre et rafraichit l’air par évapotranspiration 
              (lorsque plusieurs arbres sont à proximité). Leur efficacité dans le rafraîchissement en milieu urbain dépend de leur nombre, 
              de la densité de leur feuillage, des essences, de la qualité du sol et de la disponibilité en eau.<br></br> <br></br>
              Plus 2 à 3°C  sont les effets maximaux d'arbres isolés sur la température d’air dans les rues ou lorsqu'ils sont alignés en bordure de route. 
              (source : <a href="https://plusfraichemaville.fr/" target="_blank">Plus fraiche ma ville</a>)
            </p>
          </GridCol>
          <GridCol lg={7}>
            <div className="flex flex-col justify-end">
              <p style={{ margin: "0 0 1em", textAlign: "center" }}>
                <b>Types de sols dans la commune de Montpellier</b>
              </p>
              <Image
                src={GraphImage}
                alt="carte de la vegatalisation de Montpellier"
                width={0}
                height={0}
                style={{ width: "90%", height: "auto" }}
              />
              {/* {PieData ? <PieChart2 PieData={PieData} /> : <Loader />} */}
              <p style={{ margin: "1em 0em 0em" }}>
                Source : <b>CORINE Land Cover</b>
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
