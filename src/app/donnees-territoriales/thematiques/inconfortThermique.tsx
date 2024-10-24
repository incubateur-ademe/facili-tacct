import { Loader } from '@/components/loader';
import { NoticeComp } from '@/dsfr/base/Notice';
import { GetCommunes } from '@/lib/queries/cartographie';
import { GetCollectivite } from '@/lib/queries/searchBar';
import { GetInconfortThermiqueDepartment } from '@/lib/queries/thematiques';
import { themes } from "@/lib/utils/themes";
import dynamic from 'next/dynamic';
import styles from "../donnees.module.scss";

const DynamicPageComp = dynamic(() => import("./inconfortThermiqueComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const InconfortThermique = async (searchParams: SearchParams) => {
  const theme = themes.inconfortThermique;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbInconfortThermique = await GetInconfortThermiqueDepartment(codepci);
  const collectivite = codgeo ? await GetCollectivite(codgeo) 
    : codepci ? await GetCollectivite(codepci) 
    : void 0;
  const carteCommunes = await GetCommunes(codepci);
  // const departement = !codgeo ? await GetInconfortThermiqueDepartment(codepci) : [];

  return (
    <div>
      <NoticeComp title="Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire à l'inconfort thermique." />
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          inconfortThermique={dbInconfortThermique!}
          carteCommunes={carteCommunes}
          collectivite={collectivite!}
          // departement={departement}
        />
      </div>
    </div>
  );
};

export default InconfortThermique;
