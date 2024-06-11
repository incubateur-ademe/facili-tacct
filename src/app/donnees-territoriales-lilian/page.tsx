import { Box } from "../../dsfr/server";
import { Container, GridCol } from "../../dsfr/server";
import themes from "@/lib/utils/themes";
import PageComp from "./components/PageComp";
import { StepperComp } from "@/components/Stepper";
import styles from "./donnees.module.scss";
import { Metadata } from 'next';
import {DataCommune } from './type';

export const metadata: Metadata = {
  title: "Facili-TACCT - Données territoriales",
  description: "Données territoriales",
};

const FilterForm = async () => {
  const theme = themes.inconfort_thermique;
  const data_commune = (await import("@/lib/utils/maps/commune.json")).default as DataCommune;

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
              dataCommune={data_commune}
            />
      </div>
    </Container>
  );
};

export default FilterForm;
