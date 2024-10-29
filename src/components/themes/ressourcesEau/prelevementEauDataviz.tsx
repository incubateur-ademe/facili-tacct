"use client";

import PrelevementEauBarChart from "@/components/charts/prelevementEauBarChart";
import PrelevementEauProgressBars from "@/components/charts/prelevementEauProgressBar";
import RangeSlider from "@/components/Slider";
import SubTabs from "@/components/SubTabs";
import { RessourcesEau } from "@/lib/postgres/models";
import { useState } from "react";
import styles from "./ressourcesEau.module.scss";

type Props = {
  ressourcesEau: RessourcesEau[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
}

type RessourcesEauFiltered = {
  LIBELLE_SOUS_CHAMP?: string | null;
  SOUS_CHAMP?: string | null;
  code_geographique?: string;
  departement?: string | null;
  epci?: string | null;
  index?: bigint | null;
  libelle_epci?: string | null;
  libelle_geographique?: string | null;
  region?: number | null;
  A2008?: number | null;
  A2009?: number | null;
  A2010?: number | null;
  A2011?: number | null;
  A2012?: number | null;
  A2013?: number | null;
  A2014?: number | null;
  A2015?: number | null;
  A2016?: number | null;
  A2017?: number | null;
  A2018?: number | null;
  A2019?: number | null;
  A2020?: number | null;
}

type Years = "A2008" | "A2009" | "A2010" | "A2011" | "A2012" | "A2013" | "A2014" | "A2015" | "A2016" | "A2017" | "A2018" | "A2019" | "A2020";

type GenericObject = {
  [key: string]: string | number | bigint | null;
}


const PrelevementEauDataViz = (props: Props) => {
  const { ressourcesEau, datavizTab, setDatavizTab } = props;
  const [sliderValue, setSliderValue] = useState<number[]>([2008, 2020]);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.prelevementEauGraphTitleWrapper}>
        <h2>Prélèvements en eau selon les grands usages</h2>
        <SubTabs data={["Répartition", "Évolution"]} defaultTab={datavizTab} setValue={setDatavizTab} />
      </div>
      {
        datavizTab === "Répartition" ? (
          <PrelevementEauProgressBars ressourcesEau={ressourcesEau}/>
        ) : (
          <>
            <div className={styles.prelevementEauSliderWrapper}>
              <RangeSlider
                firstValue={2008}
                lastValue={2020}
                minDist={1}
                setSliderValue={setSliderValue}
                sliderValue={sliderValue}
                width={650}
              />
            </div>
            <PrelevementEauBarChart
              ressourcesEau={ressourcesEau}
              sliderValue={sliderValue}
            /> 
          </>
        )
      }
      <p style={{ padding: "1em", margin: "0" }}>
        Source : <b style={{ color: "#0063CB" }}>XXXXXXX</b>
      </p>
    </div>
  )
}

export default PrelevementEauDataViz;
