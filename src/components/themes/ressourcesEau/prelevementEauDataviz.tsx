'use client';

import PrelevementEauBarChart from '@/components/charts/ressourcesEau/prelevementEauBarChart';
import PrelevementEauProgressBars from '@/components/charts/ressourcesEau/prelevementEauProgressBar';
import PrelevementEauProgressBarsPNR from '@/components/charts/ressourcesEau/prelevementEauProgressBarPNR';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { RessourcesEau } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './ressourcesEau.module.scss';

const PrelevementEauDataViz = ({
  ressourcesEau,
  datavizTab,
  setDatavizTab
}: {
  ressourcesEau: RessourcesEau[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
}) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const [sliderValue, setSliderValue] = useState<number[]>([2008, 2020]);
  return (
    <div className={styles.graphWrapper}>
      <div className={styles.ressourcesEauGraphTitleWrapper}>
        <h2>Répartition des prélèvements d’eau par usage</h2>
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
      ) : (
        <>
          <div className={styles.ressourcesEauSliderWrapper}>
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
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : BNPE, Catalogue DiDo (Indicateurs territoriaux de développement
        durable - ITDD)
      </p>
    </div>
  );
};

export default PrelevementEauDataViz;
