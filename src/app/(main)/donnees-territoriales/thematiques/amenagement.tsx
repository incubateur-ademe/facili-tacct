import { Loader } from '@/components/loader';
import { GetConsommationNAF } from '@/lib/queries/databases/biodiversite';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/utils/themes';
import dynamic from 'next/dynamic';
import styles from '../donnees.module.scss';

const DynamicPageComp = dynamic(() => import('./amenagementComp'), {
  ssr: false,
  loading: () => <Loader />
});

const Amenagement = async (searchParams: SearchParams) => {
  const theme = themes.ressourcesEau;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const carteCommunes = await GetCommunes(codepci);

  return (
    <div>
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          consommationNAF={dbConsommationNAF}
          carteCommunes={carteCommunes}
        />
      </div>
    </div>
  );
};

export default Amenagement;
