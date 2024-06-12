import { Container, GridCol, Grid } from "../../dsfr/server";
import { Box } from "../../dsfr/server";
import { StepperComp } from "@/components/Stepper";
import { Metadata } from "next";
import ExplicationComp from "./pageComp";
import styles from "./explication.module.scss";

export const metadata: Metadata = {
  title: "Actions",
  description: "actions",
};

const Explication = () => {
  return (
    <>
    <div className={styles.container}>
      <Box style={{backgroundColor: "white"}}>
        <GridCol lg={6} offset={1}>
          <StepperComp
            title="Arguments pour convaincre"
            stepCount={4}
            currentStep={3}
          />
        </GridCol>
      </Box>
      <ExplicationComp/>
    </div>
    </>
  );
};

export default Explication;
