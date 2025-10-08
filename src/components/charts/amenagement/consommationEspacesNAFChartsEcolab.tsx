'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { espacesNAFBarChartLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/ui/SubTabs';
import { ConsommationNAFEcolabApi } from '@/lib/postgres/EcolabApi';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './amenagementCharts.module.scss';
import { ConsommationEspacesNAFBarChartEcolab } from './consommationEspacesNAFBarChartEcolab';

export const ConsommationEspacesNAFChartsEcolab = (props: {
  consommationNAF: ConsommationNAFEcolabApi[];
}) => {
  const { consommationNAF } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const [typeValue, setTypeValue] = useState<string>('Tous types');
  const [sliderValue, setSliderValue] = useState<number[]>([2009, 2023]);

  return (
    <>
      {
        consommationNAF.length > 0 ? (
          <div className={styles.dataWrapper}>
            <div className={styles.graphTabsWrapper}>
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
              />
            </div>
            <div className={styles.sliderWrapper}>
              <RangeSlider
                firstValue={2009}
                lastValue={2023}
                minDist={1}
                setSliderValue={setSliderValue}
                sliderValue={sliderValue}
              />
            </div>
            <ConsommationEspacesNAFBarChartEcolab
              consommationEspacesNAF={consommationNAF}
              sliderValue={sliderValue}
              filterValue={typeValue}
            />
            <div className={styles.legend} style={{ paddingBottom: '1rem' }}>
              <LegendCompColor legends={espacesNAFBarChartLegend} />
            </div>
          </div>
        ) : (
          <div className='p-6 flex flex-col justify-center h-full'>
            <DataNotFoundForGraph image={DataNotFound} />
          </div>
        )
      }
    </>
  );
};
