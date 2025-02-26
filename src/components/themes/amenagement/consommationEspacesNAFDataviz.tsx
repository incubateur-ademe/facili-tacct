'use client';

import { ConsommationEspacesNAFBarChart } from '@/components/charts/amenagement/consommationEspacesNAFBarChart';
import { espacesNAFBarChartLegend } from '@/components/maps/legends/datavizLegends';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ConsommationNAF } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './amenagement.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { consommationNAF } = props;
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
  const codgeo = searchParams.get('codgeo')!;
  const filteredConsommationNAF = codgeo
    ? consommationNAF.filter((item) => item.code_geographique === codgeo)
    : consommationNAF.filter((item) => item.epci === codepci);
  const [datavizTab, setDatavizTab] = useState<string>('Répartition');
  const [typeValue, setTypeValue] = useState<string>('Tous types');
  const [sliderValue, setSliderValue] = useState<number[]>([2009, 2023]);

  return (
    <div className={styles.graphWrapper}>
      <div
        className={styles.amenagementGraphTitleWrapper}
        style={{ padding: '1rem' }}
      >
        <h2>Destination des surfaces artificialisées</h2>
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
  );
};
