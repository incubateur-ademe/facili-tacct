import { NoticeComp } from '@/dsfr/base/Notice';
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
      <NoticeComp
        title="Facili-TACCT prenait en compte la date de publication de l’arrêté et non celle de 
        l’évènement. Cet écart est désormais résolu, notre base de données est identique à celle de la base GASPAR"
        backgroundColor='#fff4ecff'
        color='#F66E19'
      />
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
