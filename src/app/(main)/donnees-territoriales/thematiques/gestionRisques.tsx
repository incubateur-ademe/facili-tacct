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
        title="Différence avec le nombre d’arrêtés GASPAR :"
        description="l’équipe Facili-TACCT a identifié plusieurs doublons dans la base de données GASPAR, 
          initialement supprimés. Suite à plusieurs retours concernant cet écart, les doublons ont été 
          réintégrés : notre base de données est désormais identique à celle de GASPAR. Veuillez noter 
          également que Facili-TACCT affiche à présent la date de début de l’évènement et non celle de publication de l’arrêté."
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
