import { NoticeComp } from '@/dsfr/base/Notice';
import { GetInconfortThermique } from '@/lib/queries/databases/inconfortThermique';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import InconfortThermiqueComp from './inconfortThermiqueComp';

const InconfortThermique = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const theme = themes.inconfortThermique;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);

  return (
    <div>
      <NoticeComp
        title="Auparavant occasionnelles (tous les 5 à 10 ans), les canicules se succèdent tous les étés depuis 2015 (à l'exception de 2021).
        Explorez ici des leviers d'action possibles vous permettant de réduire la sensibilité de votre territoire à l'inconfort thermique."
      />
      <div className={styles.container}>
        <Suspense>
          <InconfortThermiqueComp
            data={theme}
            inconfortThermique={dbInconfortThermique!}
            carteCommunes={carteCommunes}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default InconfortThermique;
