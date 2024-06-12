import { Container, GridCol, Grid } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { StepperComp } from "@/components/Stepper";
import { Metadata } from "next";
import Step3Comp from "./pageComp";

export const metadata: Metadata = {
  title: "Actions",
  description: "actions",
};

const Step3 = () => {
  return (
    <>
    <Container my="4w">
      <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Arguments pour convaincre"
            stepCount={4}
            currentStep={3}
          />
        </GridCol>
      </Box>
    </Container>
    <Step3Comp/>
    </>
  );
};

export default Step3;
