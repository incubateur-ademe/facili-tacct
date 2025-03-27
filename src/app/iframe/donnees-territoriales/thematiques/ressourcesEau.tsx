import { GetRessourceEau } from '@/lib/queries/databases/ressourcesEau';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const RessourcesEau = async (props: { searchParams: SearchParams }) => {
  const theme = themes.ressourcesEau;
  const { codepci } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEau(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const epciContours = await GetEpci(codepci);

  return (
    <div className={styles.container}>
      <Suspense>
        <RessourcesEauComp
          data={theme}
          ressourcesEau={dbRessourcesEau}
          carteCommunes={carteCommunes}
          epciContours={epciContours}
        />
      </Suspense>
    </div>
  );
};

export default RessourcesEau;
