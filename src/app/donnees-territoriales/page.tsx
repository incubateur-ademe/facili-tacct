import { Box } from "../../dsfr/server";
import { Container, GridCol } from "../../dsfr/server";
import themes from "@/lib/utils/themes";
import PageComp from "./components/PageComp";
import { StepperComp } from "@/components/Stepper";
import styles from "./donnees.module.scss";
import { Metadata } from 'next';
import { DataCommune, DataEPCI } from './type';

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

const Page = async () => {
  const theme = themes.inconfort_thermique;
  const data_commune = (await import("@/lib/utils/maps/commune.json")).default as DataCommune;
  const data_epci = (await import("@/lib/utils/maps/epci.json")).default as DataEPCI;

  return (
    <Container py="4w">
      <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Découverte de la donnée territoriale"
            stepCount={4}
            currentStep={2}
          />
        </GridCol>
      </Box>
      <div className={styles.container}>
        <PageComp
          data={theme}
          data_communes={data_commune}
          data_epci={data_epci}
        />
      </div>
    </Container>
  );
};

export default Page;
