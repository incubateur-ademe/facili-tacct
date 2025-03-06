import { GetConsommationNAF } from '@/lib/queries/databases/biodiversite';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import AmenagementComp from './amenagementComp';

const Amenagement = async (props: { searchParams: SearchParams }) => {
  const theme = themes.amenagement;
  const { codepci } = await props.searchParams;
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const carteCommunes = await GetCommunes(codepci);

  return (
    <div>
      <div className={styles.container}>
        <Suspense>
          <AmenagementComp
            data={theme}
            consommationNAF={dbConsommationNAF}
            carteCommunes={carteCommunes}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Amenagement;
