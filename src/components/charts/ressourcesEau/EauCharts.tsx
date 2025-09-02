"use client";

import { prelevementEauBarChartLegend } from "@/components/maps/legends/datavizLegends";
import { LegendCompColor } from "@/components/maps/legends/legendComp";
import RangeSlider from "@/components/Slider";
import SubTabs from '@/components/SubTabs';
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
      <div className={styles.graphTabsWrapper}>
        <SubTabs
          data={['Répartition', 'Évolution']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
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
        <div style={{ paddingBottom: '1rem' }}>
          <LegendCompColor legends={prelevementEauBarChartLegend} />
        </div>
      </>
      }
    </div>
  );
};

export default EauCharts;
