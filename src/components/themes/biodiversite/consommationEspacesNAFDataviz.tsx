'use client';

import { ConsommationEspacesNAFBarChart } from '@/components/charts/biodiversite/consommationEspacesNAFBarChart';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ConsommationNAF } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './biodiversite.module.scss';

export const ConsommationEspacesNAFDataviz = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CommunesIndicateursDto[];
}) => {
  const { consommationNAF, carteCommunes } = props;
  const searchParams = useSearchParams();
  const codepci = searchParams.get('codepci')!;
  const filteredConsommationNAF = consommationNAF.filter(
    (item) => item.epci === codepci
  );
  const [datavizTab, setDatavizTab] = useState<string>('Évolution');
  const [typeValue, setTypeValue] = useState<string>('Tous types');
  const [sliderValue, setSliderValue] = useState<number[]>([2009, 2023]);

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.biodiversiteGraphTitleWrapper}>
        <h2>Évolution espaces NAF</h2>
        <SubTabs
          data={['Évolution', 'Répartition', 'Cartographie']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Évolution' ? (
        <>
          <div className={styles.biodiversiteGraphFiltersWrapper}>
            <SubTabs
              data={[
                'Tous types',
                'Habitat',
                'Activité',
                'Routes',
                'Ferroviaire',
                'Inconnu'
              ]}
              defaultTab={typeValue}
              setValue={setTypeValue}
              maxWidth="65%"
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
              maxWidth="70%"
            />
          </div>
          <ConsommationEspacesNAFBarChart
            consommationEspacesNAF={filteredConsommationNAF}
            sliderValue={sliderValue}
            filterValue={typeValue}
          />
        </>
      ) : (
        <>
          <MapEspacesNaf carteCommunes={carteCommunes} />
        </>
      )}
    </div>
  );
};