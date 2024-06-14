import { type Metadata } from "next";

import { StepperComp } from "@/components/Stepper";

import { Box, GridCol } from "../../dsfr/server";
import styles from "./explication.module.scss";
import ExplicationComp from "./pageComp";

export const metadata: Metadata = {
  title: "Actions",
  description: "actions",
};

const Explication = () => {
  return (
    <>
      <div className={styles.container}>
        <Box style={{ backgroundColor: "white" }}>
          <GridCol lg={6} offset={1}>
            <StepperComp title="Arguments pour convaincre" stepCount={4} currentStep={3} />
          </GridCol>
        </Box>
        <ExplicationComp />
      </div>
    </>
  );
};

export default Explication;
