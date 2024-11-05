import { Loader } from '@/components/loader';
import { GetCommunes, GetErosionCotiere } from '@/lib/queries/cartographie';
import { GetGestionRisques } from '@/lib/queries/thematiques';
import { themes } from "@/lib/utils/themes";
import dynamic from 'next/dynamic';
import styles from "../donnees.module.scss";

const DynamicPageComp = dynamic(() => import("./gestionRisquesComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const GestionRisques = async (searchParams: SearchParams) => {
  const theme = themes.gestionRisques;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbGestionRisques = codgeo ? await GetGestionRisques(codgeo) 
  : codepci ? await GetGestionRisques(codepci) 
  : void 0;
  const carteCommunes = await GetCommunes(codepci);
  const erosionCotiere = await GetErosionCotiere();
  
  return (
    <div>
      {/* <NoticeComp title="Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire" /> */}
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          gestionRisques={dbGestionRisques!}
          carteCommunes={carteCommunes}
          erosionCotiere={erosionCotiere}
        />
      </div>
    </div>
  );
};

export default GestionRisques;
