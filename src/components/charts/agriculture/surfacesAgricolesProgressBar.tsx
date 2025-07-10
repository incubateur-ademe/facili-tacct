'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import styles from '@/components/themes/ressourcesEau/ressourcesEau.module.scss';
import { PrograssBarDataSurfacesAgricoles } from '@/lib/charts/surfacesAgricoles';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { SubAccordionGraph } from '../subAccordionGraph';

type graphDataItem = {
  [key: string]: {
    id: string;
    value: number;
    color: string;
  }[];
}

const SurfacesAgricolesProgressBar = ({
  surfacesAgricoles
}: {
  surfacesAgricoles: SurfacesAgricolesModel[];
}) => {
  const searchParams = useSearchParams();
  const libelle = searchParams.get('libelle');
  const graphData = PrograssBarDataSurfacesAgricoles(surfacesAgricoles);
  const superficieSau = Sum(surfacesAgricoles.map(el => el.superficie_sau));

  return (
    <div className={styles.surfacesAgricolesWrapper}>
      {libelle ? (
        <>
          {graphData
            .map((item, index) => (
              <SubAccordionGraph
                key={index}
                graphDataItem={item as unknown as graphDataItem}
                superficieSau={superficieSau}
                isDefaultExpanded={index === 0 ? true : false}
              />
            ))}
        </>
      ) : (
        <DataNotFoundForGraph image={DataNotFound} />
      )}
    </div>
  );
};

export default SurfacesAgricolesProgressBar;
