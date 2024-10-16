"use client";

import { BarChartCatnat } from "@/components/charts/BarChartCatnat";
import PieChartCatnat from "@/components/charts/pieChartCatnat";
import { GraphDataNotFound } from "@/components/graph-data-not-found";
import RangeSlider from "@/components/Slider";
import SubTabs from "@/components/SubTabs";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes, GestionRisques } from "@/lib/postgres/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./gestionRisques.module.scss";

type ArreteCatNat = {
  annee_arrete: number;
  lib_risque_jo: string | null;
  dat_pub_arrete: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
}

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
  const [sliderValue, setSliderValue] = useState<number[]>([1982, 2024]);
  const [typeRisqueValue, setTypeRisqueValue] = useState<string>("Tous types");
  const [arretesCatnat, setArretesCatnat] = useState<ArreteCatNat[]>([]);
  const [catnatFilteredByType, setCatnatFilteredByType] = useState<GestionRisques[]>(gestionRisques);
  const typesRisques = gestionRisques ? [...new Set(gestionRisques.map(item => item.lib_risque_jo))] : [""];

  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const communesMap = carteCommunes.map(CommunesIndicateursMapper);

  useEffect(() => {
    const catnatFilteredByType = typeRisqueValue === "Tous types" ? gestionRisques : gestionRisques.filter(item => item.lib_risque_jo === typeRisqueValue)
    setCatnatFilteredByType(catnatFilteredByType);
    const gestionRisquesEnrich = catnatFilteredByType?.map(item => {
      return {...item, annee_arrete: Number(item.dat_pub_arrete?.split("-")[0])}
    }).filter(el => el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]);
    setArretesCatnat(gestionRisquesEnrich);
  }, [sliderValue, typeRisqueValue]);

  return (
    <>
      {gestionRisques ? (
        <div className={styles.container}>
          <div className="w-1/3">
            <div className={styles.explicationWrapper}>
              { codgeo ?
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans la commune de {gestionRisques[0]?.libelle_geographique}, {" "}
                  <b>XXXX%</b> .
                </p>
                : 
                <p style={{color: "#161616", margin:"0 0 0.5em"}}>
                  Dans l'EPCI {gestionRisques[0]?.libelle_epci}, {" "}
                  <b>XXXXX%</b> .
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
              <div className={styles.catnatGraphTitleWrapper}>
                <h2>Arrêtés CatNat par communes</h2>
                <p>onglets flex-end</p>
              </div>
              <div className={styles.catnatGraphFiltersWrapper}>
                <div>
                  <SubTabs data={["Tous types", ...typesRisques]} defaultTab={typeRisqueValue} setTypeRisqueValue={setTypeRisqueValue} />
                </div>
                <div>
                  <RangeSlider firstValue={1982} lastValue={2024} minDist={1} setSliderValue={setSliderValue}/>
                </div>
              </div>
              <div className="">
                <BarChartCatnat gestionRisques={arretesCatnat}/>
                <PieChartCatnat gestionRisques={arretesCatnat}/>
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
