import { Loader } from '@/components/loader';
import { GetCommunes } from '@/lib/queries/cartographie';
import { GetBiodiversite } from '@/lib/queries/thematiques';
import { themes } from "@/lib/utils/themes";
import dynamic from 'next/dynamic';
import styles from "../donnees.module.scss";

const DynamicPageComp = dynamic(() => import("./biodiversiteComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const Biodiversite = async (searchParams: SearchParams) => {
  const theme = themes.biodiversite;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbBiodiversite = codgeo ? await GetBiodiversite(codgeo) 
    : codepci ? await GetBiodiversite(codepci) 
    : void 0;
  const carteCommunes = await GetCommunes(codepci);

  return (
    <div>
      {/* <NoticeComp title="Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire" /> */}
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          biodiversite={dbBiodiversite!}
          carteCommunes={carteCommunes}
        />
      </div>
    </div>
  );
};

export default Biodiversite;
