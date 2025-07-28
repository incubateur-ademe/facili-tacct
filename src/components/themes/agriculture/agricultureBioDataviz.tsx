'use client';

import WarningIcon from "@/assets/icons/exclamation_point_icon_black.png";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { AgricultureBioBarChart } from '@/components/charts/biodiversite/agricultureBioBarChart';
import { AgricultureBioPieCharts } from '@/components/charts/biodiversite/agricultureBioPieCharts';
import { ExportButton } from "@/components/exports/ExportButton";
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { AgricultureBio } from '@/lib/postgres/models';
import { multipleEpciBydepartementLibelle } from '@/lib/territoireData/multipleEpciBydepartement';
import { multipleEpciByPnrLibelle } from '@/lib/territoireData/multipleEpciByPnr';
import { AgricultureBioExport } from "@/lib/utils/export/exportTypes";
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './agriculture.module.scss';

const AgricultureBioDataViz = ({
  agricultureBio,
  datavizTab,
  setDatavizTab,
  exportData
}: {
  agricultureBio: AgricultureBio[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  exportData: AgricultureBioExport[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const territoiresPartiellementCouverts = type === 'departement'
    ? multipleEpciBydepartementLibelle.find(dept => dept.departement === code)?.liste_epci_multi_dept
    : type === 'pnr'
      ? multipleEpciByPnrLibelle.find(pnr => pnr.libelle_pnr === libelle)?.liste_epci_multi_pnr
      : undefined;
  const [sliderValue, setSliderValue] = useState<number[]>([2019, 2022]);
  return (
    <>
      {
        agricultureBio.length !== 0 ? (
          <div className={styles.graphWrapper}>
            <div className={styles.dataVizGraphTitleWrapper}>
              <h2>Part de l’agriculture biologique</h2>
              <SubTabs
                data={['Répartition', 'Évolution']}
                defaultTab={datavizTab}
                setValue={setDatavizTab}
              />
            </div>
            {datavizTab === 'Répartition' ? (
              <>
                <AgricultureBioPieCharts agricultureBio={agricultureBio} />
                {
                  territoiresPartiellementCouverts && territoiresPartiellementCouverts.length > 0 &&
                  <div style={{ minWidth: "450px", backgroundColor: "white", padding: "1em" }}>
                    <div className='flex flex-row items-center justify-center'>
                      <Image
                        src={WarningIcon}
                        alt="Attention"
                        width={24}
                        height={24}
                        style={{ marginRight: '0.5em', alignItems: 'center' }}
                      />
                      <p style={{ fontSize: 12, margin: 0 }}>
                        Attention, {territoiresPartiellementCouverts.length} EPCI
                        ne {territoiresPartiellementCouverts.length === 1 ? "fait" : "font"} que
                        partiellement partie de votre territoire
                      </p>
                    </div>
                  </div>
                }
              </>
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
                {
                  territoiresPartiellementCouverts && territoiresPartiellementCouverts.length > 0 &&
                  <div style={{ minWidth: "450px", backgroundColor: "white", padding: "1em" }}>
                    <div className='flex flex-row items-center justify-center'>
                      <Image
                        src={WarningIcon}
                        alt="Attention"
                        width={24}
                        height={24}
                        style={{ marginRight: '0.5em', alignItems: 'center' }}
                      />
                      <p style={{ fontSize: 12, margin: 0 }}>
                        Attention, {territoiresPartiellementCouverts.length} EPCI
                        ne {territoiresPartiellementCouverts.length === 1 ? "fait" : "font"} que
                        partiellement partie de votre territoire
                      </p>
                    </div>
                  </div>
                }
              </>
            )}
            <div className={styles.sourcesExportWrapper}>
              <p>
                Source : Agence Bio, Service de la Statistique et de la Prospective (SSP
                - Ministère de l’agriculture) dans Catalogue DiDo (Indicateurs
                territoriaux de développement durable - ITDD) - AGRESTE, 2020
              </p>
              <ExportButton
                data={exportData}
                baseName="agriculture_biologique"
                type={type}
                libelle={libelle}
                code={code}
                sheetName="Agriculture bio"
              />
            </div>
          </div>
        ) : (
          <div className={styles.graphWrapper}>
            <p style={{ padding: '1em', margin: '0' }}>
              <b>
                Part de l’agriculture biologique
              </b>
            </p>
            <DataNotFoundForGraph image={DataNotFound} />
            <p style={{ padding: '1em', margin: '0' }}>
              Source : Agence Bio, Service de la Statistique et de la Prospective (SSP
              - Ministère de l’agriculture) dans Catalogue DiDo (Indicateurs
              territoriaux de développement durable - ITDD) - AGRESTE, 2020
            </p>
          </div>
        )}
    </>
  );
};

export default AgricultureBioDataViz;
