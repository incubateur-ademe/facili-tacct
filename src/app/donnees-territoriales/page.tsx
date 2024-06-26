import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import themes from "@/lib/utils/themes";

import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { Loader } from "./loader";

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

const DynamicPageComp = dynamic(() => import("./PageComp"), {
  ssr: false,
  loading: () => <Loader />,
});

// 200042497 CODE EPCI TEST 200069193

const Page = () => {
  const theme = themes.inconfort_thermique;
  // const data_commune = (await import("@/lib/json-db/maps/commune.json")).default as DataCommune;
  // const data_epci = (await import("@/lib/json-db/maps/epci.json")).default as DataEPCI;

  return (
    <Container py="4w">
      <Box style={{ backgroundColor: "white" }}>
        <GridCol lg={6} offset={1}>
          <StepperComp title="Découverte de la donnée territoriale" stepCount={4} currentStep={2} />
        </GridCol>
      </Box>
      <p style={{margin: "1em 1em 0"}}>Explorez des leviers d'action possibles en réduisant la sensibilité de votre territoire à l'inconfort thermique</p>
      <div className={styles.container}>
        <DynamicPageComp data={theme} />
      </div>
    </Container>
  );
};

export default Page;
