import { GetRessourceEauNew } from '@/lib/queries/databases/ressourcesEau';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const RessourcesEau = async (props: { searchParams: SearchParams }) => {
  const theme = themes.ressourcesEau;
  const { code, libelle, type } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEauNew(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);

  return (
    <div className={styles.container}>
      <Suspense>
        <RessourcesEauComp
          data={theme}
          ressourcesEau={dbRessourcesEau}
          carteCommunes={carteCommunes}
        />
      </Suspense>
    </div>
  );
};

export default RessourcesEau;
