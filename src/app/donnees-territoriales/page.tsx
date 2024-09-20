import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { type Metadata } from "next";

import { themes } from "@/lib/utils/themes";

import { GetCommunes } from "@/lib/queries/cartographie";
import { GetInconfortThermique } from "@/lib/queries/thematiques";
import { NoticeComp } from "../../dsfr/base/Notice";
import { Container } from "../../dsfr/server";
import PageComp from "./PageComp";
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

const Page = async (searchParams: SearchParams) => {
  const theme = themes.inconfort_thermique;
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const dbInconfortThermique = codgeo ? await GetInconfortThermique(codgeo) 
        : codepci ? await GetInconfortThermique(codepci) 
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
        <PageComp
          data={theme}
          inconfort_thermique={dbInconfortThermique!}
          carteCommunes={carteCommunes}
        />
      </div>
    </Container>
  );
};

export default Page;
