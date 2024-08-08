import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import { themes } from "@/lib/utils/themes";

import { Loader } from "../../components/loader";
import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { Get_Communes, Get_Inconfort_Thermique, GetClcEpci } from "./queries";
import { type DbFiltered } from "./type";

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
  const db_inconfort_thermique = await Get_Inconfort_Thermique(code);
  const clc_epci = await GetClcEpci(code);

  const db_filtered = await Get_Communes(code);

  const db_parsed = db_filtered.map(function (elem: DbFiltered) {
    return {
      type: "Feature",
      properties: {
        epci: elem.epci,
        libelle_epci: elem.libelle_epci,
        libelle_commune: elem.libelle_commune,
        code_commune: elem.code_commune,
        precarite_logement: elem.precarite_logement,
        densite_bati: elem.densite_bati,
        coordinates: elem.coordinates,
      },
      geometry: JSON.parse(elem.geometry) as string,
    };
  });

  // const all_coordinates = db_filtered.map((el: DbFiltered) => el.coordinates.split(",").map(Number));

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
          inconfort_thermique={db_inconfort_thermique}
          db_filtered={db_parsed}
          clc={clc_epci}
        />
      </div>
    </Container>
  );
};

export default Page;
