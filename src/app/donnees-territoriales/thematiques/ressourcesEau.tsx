import { Loader } from '@/components/loader';
import { GetRessourceEau } from '@/lib/queries/thematiques';
import { themes } from "@/lib/utils/themes";
import dynamic from 'next/dynamic';
import styles from "../donnees.module.scss";

const DynamicPageComp = dynamic(() => import("./ressourcesEauComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const RessourcesEau = async (searchParams: SearchParams) => {
  const theme = themes.ressourcesEau;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbRessourcesEau =  await GetRessourceEau(codepci);

  return (
    <div>
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          ressourcesEau={dbRessourcesEau}
        />
      </div>
    </div>
  );
};

export default RessourcesEau;
