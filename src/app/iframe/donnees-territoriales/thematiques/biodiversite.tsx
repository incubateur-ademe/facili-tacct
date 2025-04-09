import {
  GetAgricultureBio,
  GetAOT40,
  GetConsommationNAF
} from '@/lib/queries/databases/biodiversite';
import { GetQualiteEauxBaignade } from '@/lib/queries/databases/ressourcesEau';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { GetEtatCoursDeau } from '@/lib/queries/postgis/etatCoursDeau';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import BiodiversiteComp from './biodiversiteComp';

const Biodiversite = async (props: { searchParams: SearchParams }) => {
  const theme = themes.biodiversite;
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type);
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const dbAOT40 = await GetAOT40();
  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);
  const qualiteEauxBaignadeByDepmt = await GetQualiteEauxBaignade(code, libelle, type);

  return (
    <div className={styles.container}>
      <Suspense>
        <BiodiversiteComp
          data={theme}
          carteCommunes={carteCommunes}
          agricultureBio={dbAgricultureBio!}
          consommationNAF={dbConsommationNAF}
          aot40={dbAOT40}
          etatCoursDeau={dbEtatCoursDeau}
          qualiteEauxBaignade={qualiteEauxBaignadeByDepmt}
        />
      </Suspense>
    </div>
  );
};

export default Biodiversite;
