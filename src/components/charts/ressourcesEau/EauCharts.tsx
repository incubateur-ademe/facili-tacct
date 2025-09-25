"use client";

import RangeSlider from "@/components/Slider";
import SubTabs from '@/components/ui/SubTabs';
import { Body } from "@/design-system/base/Textes";
import { RessourcesEau } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from "react";
import styles from './eau.module.scss';
import PrelevementEauBarChart from "./prelevementEauBarChart";
import PrelevementEauProgressBars from "./prelevementEauProgressBar";
import PrelevementEauProgressBarsPNR from "./prelevementEauProgressBarPNR";

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  ressourcesEau: RessourcesEau[];
};

const EauCharts = (props: Props) => {
  const { datavizTab, setDatavizTab, ressourcesEau } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const [sliderValue, setSliderValue] = useState<number[]>([2008, 2020]);

  return (
    <div className={styles.dataWrapper}>
      <div
        className={styles.graphTabsLegend}
        style={{ justifyContent: type !== "departement" && type !== "pnr" ? "space-between" : "flex-end" }}
      >
        {
          type !== "departement" && type !== "pnr" &&
          <div className={styles.legendWrapper}>
            <Body
              style={{
                fontSize: "10px",
                textTransform: "uppercase",
                position: "absolute",
                marginBottom: "1.3rem",
                marginLeft: type === "commune" ? "6rem" : "4rem"
              }}>
              Département
            </Body>
            <Body style={{ fontSize: "10px", textTransform: "uppercase" }}>{type} (%)</Body>
            <div className={styles.progressBar}>
              <div className={styles.greyBar}></div>
              <div className={styles.cursor}></div>
            </div>
          </div>
        }
        <div className={styles.graphTabsWrapper}>
          <SubTabs
            data={['Répartition', 'Évolution']}
            defaultTab={datavizTab}
            setValue={setDatavizTab}
          />
        </div>
      </div>
      {datavizTab === 'Répartition' ? (
        <>
          {
            type === "pnr" || type === "departement" ?
              <PrelevementEauProgressBarsPNR ressourcesEau={ressourcesEau} />
              : <PrelevementEauProgressBars ressourcesEau={ressourcesEau} />
          }
        </>
      ) : <>
        <div className={styles.sliderWrapper}>
          <RangeSlider
            firstValue={2008}
            lastValue={2020}
            minDist={1}
            setSliderValue={setSliderValue}
            sliderValue={sliderValue}
          />
        </div>
        <PrelevementEauBarChart
          ressourcesEau={ressourcesEau}
          sliderValue={sliderValue}
        />
      </>
      }
    </div>
  );
};

export default EauCharts;
