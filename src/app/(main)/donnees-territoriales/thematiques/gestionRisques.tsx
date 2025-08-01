import {
  GetArretesCatnat,
  GetIncendiesForet
} from '@/lib/queries/databases/gestionRisques';
import {
  GetCommunes,
  GetErosionCotiere
} from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import GestionRisquesComp from './gestionRisquesComp';

const GestionRisques = async (props: { searchParams: SearchParams }) => {
  const theme = themes.gestionRisques;
  const { code, libelle, type } = await props.searchParams;
  const dbGestionRisques = await GetArretesCatnat(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const erosionCotiere = await GetErosionCotiere(code, libelle, type);
  const dbIncendiesForet = await GetIncendiesForet(code, libelle, type);

  return (
    <div>
      {/* <GestionRisquesExport code={code} libelle={libelle} type={type} /> */}
      <div className={styles.container}>
        <Suspense>
          <GestionRisquesComp
            data={theme}
            gestionRisques={dbGestionRisques!}
            carteCommunes={carteCommunes}
            erosionCotiere={erosionCotiere}
            incendiesForet={dbIncendiesForet}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default GestionRisques;
