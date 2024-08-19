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
    code: string;
    thematique: string;
  };
};

// 200042497 CODE EPCI TEST 200069193 PARIS 200054781

const Page = async (searchParams: SearchParams) => {
  const theme = themes.inconfort_thermique;
  const code = searchParams.searchParams.code;
  const dbInconfortThermique = await GetInconfortThermique(code);
  const clcEpci = await GetClcEpci(code);

  const carteCommunes = await GetCommunes(code);

  return (
    <>
      <Container size="xl">
        <Breadcrumb
          currentPageLabel="Données socio-économiques"
          homeLinkProps={{
            href: "/",
          }}
          segments={[
            {
              label: "Thématiques",
              linkProps: {
                href: "/thematiques",
              },
            },
          ]}
        />
        <NoticeComp title="Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire à l'inconfort thermique" />
        <div className={styles.container}>
          <DynamicPageComp
            data={theme}
            inconfort_thermique={dbInconfortThermique}
            carteCommunes={carteCommunes}
            clc={clcEpci}
          />
        </div>
      </Container>
    </>
  );
};

export default Page;
