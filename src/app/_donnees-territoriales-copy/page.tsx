import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import { themes } from "@/lib/utils/themes";

import { Loader } from "../../components/loader";
import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { GetClcEpci, GetCommunes, GetInconfortThermique } from "./queries";

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

  // const all_coordinates = carteCommunes.map((el: CarteCommunes) => el.coordinates.split(",").map(Number));

  return (
    <Container py="4w">
      <Box style={{ backgroundColor: "white" }}>
        <GridCol lg={6} offset={1}>
          <StepperComp title="Découverte de la donnée territoriale" stepCount={4} currentStep={2} />
        </GridCol>
      </Box>
      <p style={{ margin: "1em 1em 0" }}>
        Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire à l'inconfort thermique
      </p>
      <div className={styles.container}>
        <DynamicPageComp
          data={theme}
          inconfort_thermique={dbInconfortThermique}
          carteCommunes={carteCommunes}
          clc={clcEpci}
        />
      </div>
    </Container>
  );
};

export default Page;
