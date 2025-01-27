import { Loader } from '@/components/loader';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { GetRessourceEau } from '@/lib/queries/thematiques';
import { themes } from '@/lib/utils/themes';
import dynamic from 'next/dynamic';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const DynamicPageComp = dynamic(() => import('./ressourcesEauComp'), {
  ssr: false,
  loading: () => <Loader />
});

const RessourcesEau = async (searchParams: SearchParams) => {
  const theme = themes.ressourcesEau;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbRessourcesEau = await GetRessourceEau(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const epciContours = await GetEpci(codepci);

  return (
    <div className={styles.container}>
      <RessourcesEauComp
        data={theme}
        ressourcesEau={dbRessourcesEau}
        carteCommunes={carteCommunes}
        epciContours={epciContours}
      />
    </div>
  );
};

export default RessourcesEau;
