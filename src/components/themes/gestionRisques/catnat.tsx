"use client";

import PieChartCatnat from "@/components/charts/pieChartCatnat";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import RangeSlider from "@/components/Slider";
import SubTabs from "@/components/SubTabs";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes, GestionRisques } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import styles from "./gestionRisques.module.scss";

export const Catnat = (props: {
  gestionRisques: GestionRisques[];
  carteCommunes: CarteCommunes[];
  data: Array<{
    donnee: string;
    facteur_sensibilite: string;
    id: number;
    risque: string;
    titre: string;
  }>;
}) => {
  const { gestionRisques, carteCommunes } = props;

  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  const subTabData = [
    {
      id: 0,
      titre: "Mouvement de terrain",
    },
    {
      id: 1,
      titre: "RGA",
    },
  ]
  return (
    <>
      {gestionRisques ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              { codgeo ?
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans la commune de {gestionRisques[0]?.libelle_geographique}, les personnes de plus de 80 ans représentent{" "}
                  <b>XXXX%</b> de la population en 2020.
                </p>
                : 
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans l'EPCI {gestionRisques[0]?.libelle_epci}, les personnes de plus de 80 ans représentent{" "}
                  <b>XXXXX%</b> de la population en 2020.
                </p>
              }
            </div>
            <div className="px-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inchoavit, et
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam, ut inchoavit, et
              </p>
              <p>Lorem </p>
            </div>
          </div>
          <div className="w-2/3">
            <div className={styles.graphWrapper}>
              <div style={{ padding: "0.75rem", margin: "0", height: "3rem" }} className="flex flex-row justify-between">
                <p>Titre</p>
                <p>onglets flex-end</p>
              </div>
              <div style={{ padding: "0.75rem", margin: "0" }} className="flex flex-row justify-between">
                <div>
                  <SubTabs data={subTabData} defaultTab="Mouvement de terrain" />
                </div>
                <RangeSlider firstValue={1982} lastValue={2022} minDist={1}/>
              </div>
              <div className="">
                <PieChartCatnat/>
              </div>
              <p style={{ padding: "1em", margin: "0" }}>
                Source : <b style={{ color: "#0063CB" }}>XXXXXXX</b>
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
