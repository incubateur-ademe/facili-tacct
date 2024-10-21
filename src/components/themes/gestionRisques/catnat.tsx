"use client";

import { GraphDataNotFound } from "@/components/graph-data-not-found";
import { CommunesIndicateursMapper } from "@/lib/mapper/communes";
import { CarteCommunes, GestionRisques } from "@/lib/postgres/models";
import { CountOccByIndex } from "@/lib/utils/reusableFunctions/occurencesCount";
import { Sum } from "@/lib/utils/reusableFunctions/sum";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CatnatDataViz from "./catnatDataviz";
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

type DataByCodeGeographique = {
  indexName: string;
  Innondations?: number;
  "Grêle / neige"? : number;
  "Sécheresse"? : number;
  "Cyclones / Tempêtes"? : number;
  "Retrait-gonflement des argiles"? : number;
  "Mouvements de terrain"? : number;
}

type GenericObject = {
  [key: string]: string | number | bigint | null;
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
  const [arretesCatnatPieChart, setArretesCatnatPieChart] = useState<ArreteCatNat[]>([]);
  const [arretesCatnatBarChart, setArretesCatnatBarChart] = useState<ArreteCatNat[]>([]);
  const [catnatFilteredByType, setCatnatFilteredByType] = useState<GestionRisques[]>(gestionRisques);
  const typesRisques = gestionRisques ? [...new Set(gestionRisques.map(item => item.lib_risque_jo))] : [""];

  const searchParams = useSearchParams();
  const codgeo = searchParams.get("codgeo")!;
  const codepci = searchParams.get("codepci")!;
  const dataByCodeGeographique = CountOccByIndex<GenericObject>(
    gestionRisques, "code_geographique", "lib_risque_jo").map(el => {
      const sum = Sum(Object.values(el).filter(item => typeof item === "number"))
      return {
        ...el as DataByCodeGeographique,
        sumCatnat: sum,
      }
    }
  )
  const carteCommunesEnriched = carteCommunes.map(el => {
    return {
      ...el,
      catnat: dataByCodeGeographique.find(item => item.indexName === el.code_commune),
    }
  })
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);

  useEffect(() => {
    const catnatFilteredByType = typeRisqueValue === "Tous types" ? gestionRisques : gestionRisques.filter(item => item.lib_risque_jo === typeRisqueValue)
    setCatnatFilteredByType(catnatFilteredByType);
    const gestionRisquesEnrichBarChart = catnatFilteredByType?.map(item => {
      return {...item, annee_arrete: Number(item.dat_pub_arrete?.split("-")[0])}
    }).filter(el => el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]);
    const gestionRisquesEnrichPieChart = gestionRisques?.map(item => {
      return {...item, annee_arrete: Number(item.dat_pub_arrete?.split("-")[0])}
    }).filter(el => el.annee_arrete >= sliderValue[0] && el.annee_arrete <= sliderValue[1]);
    setArretesCatnatPieChart(gestionRisquesEnrichPieChart);
    setArretesCatnatBarChart(gestionRisquesEnrichBarChart);
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
            <CatnatDataViz 
              carteCommunes={communesMap}
              typeRisqueValue={typeRisqueValue}
              gestionRisquesBarChart={arretesCatnatBarChart}
              gestionRisquesPieChart={arretesCatnatPieChart}
              typesRisques={typesRisques}
              setTypeRisqueValue={setTypeRisqueValue}
              setSliderValue={setSliderValue}
            /> 
          </div>
        </div>
      ) : (
        <GraphDataNotFound code={codgeo ? codgeo : codepci} />
      )}
    </>
  );
};
