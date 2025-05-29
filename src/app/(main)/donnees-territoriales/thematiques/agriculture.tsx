import { GetAgriculture, GetSurfacesAgricoles } from '@/lib/queries/databases/agriculture';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import AgricultureComp from './agricultureComp';

const Agriculture = async (props: { searchParams: SearchParams }) => {
  const theme = themes.agriculture;
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgriculture = await GetAgriculture(code, libelle, type);
  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);

  return (
    <div className={styles.container}>
      <Suspense>
        <AgricultureComp
          data={theme}
          carteCommunes={carteCommunes}
          agriculture={dbAgriculture}
          surfacesAgricoles={dbSurfacesAgricoles}
        />
      </Suspense>
    </div>
  );
};

export default Agriculture;
