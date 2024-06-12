import { Container, GridCol } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { StepperComp } from "@/components/Stepper";
import { Metadata } from "next";
import ThematiquesComp from "./pageComp";

export const metadata: Metadata = {
  title: "Thématiques",
  description: "Thématiques",
};

const Thematiques = () => {
  return (
    <div>
      <Box style={{backgroundColor: "white", margin: "1em 0"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Sélection d'une thématique"
            stepCount={4}
            currentStep={1}
          />
        </GridCol>
      </Box>
      <ThematiquesComp/>
    </div>
  );
};

export default Thematiques;
