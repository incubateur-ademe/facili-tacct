import {
  GetAOT40,
  GetConsommationNAF,
  GetSurfacesProtegees
} from '@/lib/queries/databases/biodiversite';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { GetEtatCoursDeau } from '@/lib/queries/postgis/etatCoursDeau';
import { GetAgricultureBio, GetBiodiversite } from '@/lib/queries/thematiques';
import { themes } from '@/lib/utils/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import BiodiversiteComp from './biodiversiteComp';

const Biodiversite = async (props: { searchParams: SearchParams }) => {
  const theme = themes.biodiversite;
  const { codepci, codgeo } = await props.searchParams;
  const dbBiodiversite = await GetBiodiversite(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const dbAgricultureBio = await GetAgricultureBio(codepci);
  const dbSurfacesProtegees = await GetSurfacesProtegees(codepci);
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const epciContours = await GetEpci(codepci);
  const dbAOT40 = await GetAOT40();
  const dbEtatCoursDeau = await GetEtatCoursDeau(codepci, codgeo);

  return (
    <div className={styles.container}>
      <Suspense>
        <BiodiversiteComp
          data={theme}
          biodiversite={dbBiodiversite!}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
          surfacesProtegees={dbSurfacesProtegees}
          consommationNAF={dbConsommationNAF}
          epciContours={epciContours}
          aot40={dbAOT40}
          etatCoursDeau={dbEtatCoursDeau}
        />
      </Suspense>
    </div>
  );
};

export default Biodiversite;
