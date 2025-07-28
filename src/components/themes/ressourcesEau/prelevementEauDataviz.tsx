'use client';

import PrelevementEauBarChart from '@/components/charts/ressourcesEau/prelevementEauBarChart';
import PrelevementEauProgressBars from '@/components/charts/ressourcesEau/prelevementEauProgressBar';
import PrelevementEauProgressBarsPNR from '@/components/charts/ressourcesEau/prelevementEauProgressBarPNR';
import { ExportButton } from '@/components/exports/ExportButton';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { RessourcesEau } from '@/lib/postgres/models';
import { RessourcesEauExport } from '@/lib/utils/export/exportTypes';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './ressourcesEau.module.scss';

const PrelevementEauDataViz = ({
  ressourcesEau,
  datavizTab,
  setDatavizTab,
  exportData
}: {
  ressourcesEau: RessourcesEau[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  exportData: RessourcesEauExport[];
}) => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const code = searchParams.get('code')!;
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
      <div className={styles.sourcesExportWrapper}>
        <p>
          Source : BNPE, Catalogue DiDo (Indicateurs territoriaux de développement
          durable - ITDD)
        </p>
        <ExportButton
          data={exportData}
          baseName="prelevements_eau"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Prélèvements en eau"
        />
      </div>
    </div>
  );
};

export default PrelevementEauDataViz;
