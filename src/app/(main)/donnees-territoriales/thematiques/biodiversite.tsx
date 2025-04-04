import {
  GetAOT40,
  GetConsommationNAF
} from '@/lib/queries/databases/biodiversite';
import { GetQualiteEauxBaignade } from '@/lib/queries/databases/ressourcesEau';
import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { GetEtatCoursDeau } from '@/lib/queries/postgis/etatCoursDeau';
import { GetAgricultureBio } from '@/lib/queries/thematiques';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import BiodiversiteComp from './biodiversiteComp';

const Biodiversite = async (props: { searchParams: SearchParams }) => {
  const theme = themes.biodiversite;
  const { codepci, codgeo } = await props.searchParams;
  const carteCommunes = await GetCommunes(codepci);
  const dbAgricultureBio = await GetAgricultureBio(codepci);
  const dbConsommationNAF = await GetConsommationNAF(codepci);
  const epciContours = await GetEpci(codepci);
  const dbAOT40 = await GetAOT40();
  const dbEtatCoursDeau = await GetEtatCoursDeau(codepci, codgeo);
  const qualiteEauxBaignadeByDepmt = await GetQualiteEauxBaignade(codepci);

  return (
    <div className={styles.container}>
      <Suspense>
        <BiodiversiteComp
          data={theme}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
          consommationNAF={dbConsommationNAF}
          epciContours={epciContours}
          aot40={dbAOT40}
          etatCoursDeau={dbEtatCoursDeau}
          qualiteEauxBaignade={qualiteEauxBaignadeByDepmt}
        />
      </Suspense>
    </div>
  );
};

export default Biodiversite;
