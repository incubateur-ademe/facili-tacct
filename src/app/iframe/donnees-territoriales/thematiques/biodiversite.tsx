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

const DynamicPageComp = dynamic(() => import('./biodiversiteComp'), {
  ssr: false,
  loading: () => <Loader />
});

const Biodiversite = async (searchParams: SearchParams) => {
  const theme = themes.biodiversite;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbBiodiversite = await GetBiodiversite(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const dbAgricultureBio = await GetAgricultureBio(codepci);
  const dbSurfacesProtegees = await GetSurfacesProtegees(codepci);
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const epciContours = await GetEpci(codepci);

  return (
    <div>
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          biodiversite={dbBiodiversite!}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
          surfacesProtegees={dbSurfacesProtegees}
          consommationNAF={dbConsommationNAF}
          epciContours={epciContours}
        />
      </div>
    </div>
  );
};

export default Biodiversite;
