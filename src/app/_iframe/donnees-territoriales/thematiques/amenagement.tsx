import { GetConsommationNAF } from '@/lib/queries/databases/biodiversite';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import AmenagementComp from './amenagementComp';

const Amenagement = async (props: { searchParams: SearchParams }) => {
  const theme = themes.amenagement;
  const { code, libelle, type } = await props.searchParams;
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  // const carteCommunes = await GetCommunes(code, libelle, type);

  return (
    <div>
      <div className={styles.container}>
        <Suspense>
          <AmenagementComp
            data={theme}
            consommationNAF={dbConsommationNAF}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Amenagement;
