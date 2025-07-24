import { GetRessourceEau } from '@/lib/queries/databases/ressourcesEau';
import { GetCommunes } from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import styles from '../donnees.module.scss';
import RessourcesEauComp from './ressourcesEauComp';

const RessourcesEau = async (props: { searchParams: SearchParams }) => {
  const theme = themes.ressourcesEau;
  const { code, libelle, type } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEau(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);

    // const res = await fetch(
  //   `http://localhost:3000/api/ressources-eau?code=${code}&libelle=${libelle}&type=${type}`,
  //   { cache: 'no-store' }
  // );
  // const dbRessourcesEauTest = await res.json();
  
  return (
    <div className={styles.container}>
      <RessourcesEauComp
        data={theme}
        ressourcesEau={dbRessourcesEau}
        carteCommunes={carteCommunes}
      />
    </div>
  );
};

export default RessourcesEau;
