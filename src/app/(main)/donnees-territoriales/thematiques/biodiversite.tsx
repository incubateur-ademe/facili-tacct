import {
  GetAgricultureBio,
  GetConsommationNAF
} from '@/lib/queries/databases/biodiversite';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import BiodiversiteComp from './biodiversiteComp';

const Biodiversite = async (props: { searchParams: SearchParams }) => {
  const theme = themes.biodiversite;
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(code, libelle, type);
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  // const epciContours = await GetEpci(codepci);
  // const dbAOT40 = await GetAOT40();
  // const dbEtatCoursDeau = await GetEtatCoursDeau(codepci, codgeo);
  // const qualiteEauxBaignadeByDepmt = await GetQualiteEauxBaignade(codepci);

  return (
    <div className={styles.container}>
      <Suspense>
        <BiodiversiteComp
          data={theme}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
          consommationNAF={dbConsommationNAF}
        // epciContours={epciContours}
        // aot40={dbAOT40}
        // etatCoursDeau={dbEtatCoursDeau}
        // qualiteEauxBaignade={qualiteEauxBaignadeByDepmt}
        />
      </Suspense>
    </div>
  );
};

export default Biodiversite;
