import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { type Metadata } from "next";

import { themes } from "@/lib/utils/themes";

import { Loader } from "@/components/loader";
import { GetCommunes } from "@/lib/queries/cartographie";
import { GetCollectivite } from "@/lib/queries/searchBar";
import { GetInconfortThermique } from "@/lib/queries/thematiques";
import dynamic from "next/dynamic";
import { NoticeComp } from "../../dsfr/base/Notice";
import { Container } from "../../dsfr/server";
import styles from "./donnees.module.scss";

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

type SearchParams = {
  searchParams: {
    codepci: string;
    codgeo: string;
    thematique: string;
  };
};

const DynamicPageComp = dynamic(() => import("./PageComp"), {
  ssr: false,
  loading: () => <Loader />,
});

const Page = async (searchParams: SearchParams) => {
  const theme = themes.inconfortThermique;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbInconfortThermique = codgeo ? await GetInconfortThermique(codgeo) 
        : codepci ? await GetInconfortThermique(codepci) 
        : void 0;
  const collectivite = codgeo ? await GetCollectivite(codgeo) 
    : codepci ? await GetCollectivite(codepci) 
    : void 0;
  const carteCommunes = await GetCommunes(codepci);
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel= "Données territoriales : Inconfort thermique" //{`${thematique}`}
        homeLinkProps={{
          href: "/",
        }}
        segments={[
          {
            label: "Thématiques",
            linkProps: {
              href: codgeo ? `/thematiques?codgeo=${codgeo}&codepci=${codepci}` : `/thematiques?codepci=${codepci}`,
            },
          },
        ]}
      />
      <NoticeComp title="Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire à l'inconfort thermique." />
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          inconfortThermique={dbInconfortThermique!}
          carteCommunes={carteCommunes}
          collectivite={collectivite!}
        />
      </div>
    </Container>
  );
};

export default Page;
