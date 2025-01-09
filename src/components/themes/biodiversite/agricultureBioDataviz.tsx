'use client';

import { AgricultureBioBarChart } from '@/components/charts/biodiversite/agricultureBioBarChart';
import { AgricultureBioPieCharts } from '@/components/charts/biodiversite/agricultureBioPieCharts';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { AgricultureBio } from '@/lib/postgres/models';
import { useState } from 'react';
import styles from './biodiversite.module.scss';

const AgricultureBioDataViz = ({
  agricultureBio,
  datavizTab,
  setDatavizTab
}: {
  agricultureBio: AgricultureBio[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
}) => {
  const [sliderValue, setSliderValue] = useState<number[]>([2019, 2022]);
  return (
    <div className={styles.graphWrapper}>
      <div className={styles.dataVizGraphTitleWrapper}>
        <h2>Part des surfaces en bio</h2>
        <SubTabs
          data={['Répartition', 'Évolution']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <AgricultureBioPieCharts agricultureBio={agricultureBio} />
      ) : (
        <>
          <div className={styles.prelevementEauSliderWrapper}>
            <RangeSlider
              firstValue={2019}
              lastValue={2022}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
              width={650}
            />
          </div>
          <AgricultureBioBarChart
            agricultureBio={agricultureBio}
            sliderValue={sliderValue}
          />
        </>
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : Agence Bio, Service de la Statistique et de la Prospective (SSP
        - Ministère de l’agriculture) dans Catalogue DiDo (Indicateurs
        territoriaux de développement durable - ITDD)
      </p>
    </div>
  );
};

export default AgricultureBioDataViz;
