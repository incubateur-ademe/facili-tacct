import { GetGestionRisques } from '@/lib/queries/databases/gestionRisques';
import {
  GetCommunes,
  GetEpci,
  GetErosionCotiere
} from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import GestionRisquesComp from './gestionRisquesComp';

const GestionRisques = async (props: { searchParams: SearchParams }) => {
  const theme = themes.gestionRisques;
  const { codepci, codgeo } = await props.searchParams;
  const dbGestionRisques = codgeo
    ? await GetGestionRisques(codgeo)
    : codepci
      ? await GetGestionRisques(codepci)
      : void 0;
  const carteCommunes = await GetCommunes(codepci);
  const erosionCotiere = await GetErosionCotiere(codepci, codgeo ?? undefined);
  const epciContours = await GetEpci(codepci, codgeo ?? undefined);

  return (
    <div>
      <div className={styles.container}>
        <Suspense>
          <GestionRisquesComp
            data={theme}
            gestionRisques={dbGestionRisques!}
            carteCommunes={carteCommunes}
            erosionCotiere={erosionCotiere}
            epciContours={epciContours}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default GestionRisques;
