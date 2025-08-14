"use client";

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
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
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
      </>
      }
    </div>
  );
};

export default EauCharts;
