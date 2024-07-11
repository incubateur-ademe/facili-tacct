import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import themes from "@/lib/utils/themes";

import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { Loader } from "./loader";
import { Get_Prisma } from "../_test/prismafunc";

export const metadata: Metadata = {
  title: "Données territoriales",
  description: "Données territoriales",
};

const DynamicPageComp = dynamic(() => import("./PageComp"), {
  ssr: false,
  loading: () => <Loader />,
});

type Properties = {
  code_commune: string;
  epci: string;
  precarite_logement: number;
};

type DBType = {
  type: string;
  code_commune: string;
  epci: string;
  precarite_logement: number;
  geometry: string;
};

// 200042497 CODE EPCI TEST 200069193 PARIS 200054781

const Page = async () => {
  const theme = themes.inconfort_thermique;
  const db_filtered: any = await Get_Prisma(); //REPLACE
  var db_parsed = db_filtered.map(function (elem: DBType) {
    return {
      type: "Feature",
      properties: {
        epci: elem.epci,
        code_commune: elem.code_commune,
        precarite_logement: elem.precarite_logement
      },
      geometry: JSON.parse(elem.geometry)
    }
  })

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
        <DynamicPageComp data={theme} db_filtered={db_parsed}/>
      </div>
    </Container>
  );
};

export default Page;
