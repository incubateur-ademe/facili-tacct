import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { themes } from "@/lib/utils/themes";

import { GetClcEpci, GetCommunes } from "@/lib/queries/cartographie";
import { GetInconfortThermique } from "@/lib/queries/thematiques";
import { Loader } from "../../components/loader";
import { NoticeComp } from "../../dsfr/base/Notice";
import { Container } from "../../dsfr/server";
import styles from "./donnees.module.scss";

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

const DynamicPageComp = dynamic(() => import("./PageComp"), {
  ssr: false,
  loading: () => <Loader />,
});

type SearchParams = {
  searchParams: {
    codepci: string;
    codgeo: string;
    thematique: string;
  };
};

// 200042497 CODE EPCI TEST 200069193 PARIS 200054781

const Page = async (searchParams: SearchParams) => {
  const theme = themes.inconfort_thermique;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const thematique = searchParams.searchParams.thematique;
  const dbInconfortThermique = codgeo ? await GetInconfortThermique(codgeo) 
        : codepci ? await GetInconfortThermique(codepci) 
        : void 0;
  const clcEpci = await GetClcEpci(codepci);
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
          inconfort_thermique={dbInconfortThermique!}
          carteCommunes={carteCommunes}
          clc={clcEpci}
        />
      </div>
    </Container>
  );
};

export default Page;
