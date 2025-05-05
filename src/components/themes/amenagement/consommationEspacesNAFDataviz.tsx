'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ConsommationEspacesNAFBarChart } from '@/components/charts/amenagement/consommationEspacesNAFBarChart';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { espacesNAFBarChartLegend } from '@/components/maps/legends/datavizLegends';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { ConsommationNAF } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './amenagement.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  consommationNAF: ConsommationNAF[];
}) => {
  const { consommationNAF } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const [typeValue, setTypeValue] = useState<string>('Tous types');
  const [sliderValue, setSliderValue] = useState<number[]>([2009, 2023]);

  const filteredConsommationNAF = type === 'commune'
    ? consommationNAF.filter((item) => item.code_geographique === code)
    : consommationNAF;

  return (
    <>
      {
        filteredConsommationNAF.length > 0 ? (

          <div className={styles.graphWrapper}>
            <div
              className={styles.amenagementGraphTitleWrapper}
              style={{ padding: '1rem' }}
            >
              <h2>Destination des surfaces imperméabilisées</h2>
              <SubTabs
                data={['Répartition']}
                defaultTab={datavizTab}
                setValue={setDatavizTab}
              />
            </div>
            {datavizTab === 'Répartition' ? (
              <>
                <div className={styles.amenagementGraphFiltersWrapper}>
                  <SubTabs
                    data={[
                      'Tous types',
                      'Habitat',
                      'Activité',
                      'Mixte',
                      'Routes',
                      'Ferroviaire',
                      'Inconnu'
                    ]}
                    defaultTab={typeValue}
                    setValue={setTypeValue}
                    maxWidth="70%"
                    borderRight="solid 1px #D6D6F0"
                  />
                  <RangeSlider
                    firstValue={2009}
                    lastValue={2023}
                    minDist={1}
                    setSliderValue={setSliderValue}
                    sliderValue={sliderValue}
                    width={'-webkit-fill-available'}
                    padding={'0 1rem 0 2rem'}
                    maxWidth="35%"
                  />
                </div>
                <ConsommationEspacesNAFBarChart
                  consommationEspacesNAF={filteredConsommationNAF}
                  sliderValue={sliderValue}
                  filterValue={typeValue}
                />
                <div className={styles.NafBarLegendWrapper}>
                  {espacesNAFBarChartLegend.map((e) => (
                    <div key={e.variable} className={styles.legendNafBar}>
                      <div
                        className={styles.colorNafBar}
                        style={{ backgroundColor: e.couleur }}
                      />
                      <p className={styles.legendText}>{e.variable}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              ''
            )}
            <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA, avril 2024</p>
          </div>
        ) : (
          <div className={styles.graphWrapper}>
            <p style={{ padding: '1em', margin: '0' }}>
              <b>
                Destination des surfaces imperméabilisées
              </b>
            </p>
            <DataNotFoundForGraph image={DataNotFound} />
            <p style={{ padding: '1em', margin: '0' }}>Source : CEREMA, avril 2024</p>
          </div>
        )
      }
    </>
  );
};
