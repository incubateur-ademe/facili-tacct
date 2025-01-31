import { GetRessourceEau } from '@/lib/queries/thematiques';
import { themes } from '@/lib/utils/themes';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const RessourcesEau = async (props: { searchParams: SearchParams }) => {
  const theme = themes.ressourcesEau;
  const { codepci } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEau(codepci);

  return (
    <div>
      <div className={styles.container}>
        <Suspense>
          <RessourcesEauComp data={theme} ressourcesEau={dbRessourcesEau} />
        </Suspense>
      </div>
    </div>
  );
};

export default RessourcesEau;
