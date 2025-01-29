import { GetCommunes, GetEpci } from '@/lib/queries/postgis/cartographie';
import { GetRessourceEau } from '@/lib/queries/thematiques';
import { themes } from '@/lib/utils/themes';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const RessourcesEau = async (props: { searchParams: SearchParams }) => {
  const theme = themes.ressourcesEau;
  const { codepci } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEau(codepci);
  const carteCommunes = await GetCommunes(codepci);
  const epciContours = await GetEpci(codepci);

  return (
    <div className={styles.container}>
      <RessourcesEauComp
        data={theme}
        ressourcesEau={dbRessourcesEau}
        carteCommunes={carteCommunes}
        epciContours={epciContours}
      />
    </div>
  );
};

export default RessourcesEau;
