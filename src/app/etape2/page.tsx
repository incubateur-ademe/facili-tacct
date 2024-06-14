import { type Metadata } from "next";

import { StepperComp } from "@/components/Stepper";

import { Box, Container, GridCol } from "../../dsfr/server";
import Step2Comp from "./pageComp";

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

const Step2 = () => {
  return (
    <>
      <Container my="4w">
        <Box style={{ backgroundColor: "white" }}>
          <GridCol lg={6} offset={1}>
            <StepperComp title="Découverte de la donnée territoriale" stepCount={4} currentStep={2} />
          </GridCol>
        </Box>
      </Container>
      <Step2Comp />
    </>
  );
};

export default Step2;
