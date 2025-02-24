import { GetAgriculture } from '@/lib/queries/databases/agriculture';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import AgricultureComp from './agricultureComp';

const Agriculture = async (props: { searchParams: SearchParams }) => {
  const theme = themes.agriculture;
  const { codepci } = await props.searchParams;
  const carteCommunes = await GetCommunes(codepci);
  const epciContours = await GetEpci(codepci);
  const dbAgriculture = await GetAgriculture(codepci);

  return (
    <div className={styles.container}>
      <Suspense>
        <AgricultureComp
          data={theme}
          carteCommunes={carteCommunes}
          epciContours={epciContours}
          agriculture={dbAgriculture}
        />
      </Suspense>
    </div>
  );
};

export default Agriculture;
