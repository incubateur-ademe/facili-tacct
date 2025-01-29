import { Loader } from '@/components/loader';
import {
  GetConsommationNAF,
  GetSurfacesProtegees
} from '@/lib/queries/databases/biodiversite';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { GetAgricultureBio, GetBiodiversite } from '@/lib/queries/thematiques';
import { themes } from '@/lib/utils/themes';
import dynamic from 'next/dynamic';
import styles from '../donnees.module.scss';
import BiodiversiteComp from './biodiversiteComp';

const DynamicPageComp = dynamic(() => import('./biodiversiteComp'), {
  loading: () => <Loader />
});

const Biodiversite = async (props: { searchParams: SearchParams }) => {
  const theme = themes.biodiversite;
  const { codepci } = await props.searchParams;
  const dbBiodiversite = await GetBiodiversite(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const dbAgricultureBio = await GetAgricultureBio(codepci);
  const dbSurfacesProtegees = await GetSurfacesProtegees(codepci);
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const epciContours = await GetEpci(codepci);

  return (
    <div className={styles.container}>
      <BiodiversiteComp
        data={theme}
        biodiversite={dbBiodiversite!}
        carteCommunes={carteCommunes}
        agricultureBio={dbAgricultureBio!}
        surfacesProtegees={dbSurfacesProtegees}
        consommationNAF={dbConsommationNAF}
        epciContours={epciContours}
      />
    </div>
  );
};

export default Biodiversite;
