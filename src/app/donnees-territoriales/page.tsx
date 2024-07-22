import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import themes from "@/lib/utils/themes";

import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { Loader } from "../../components/loader";
import { Get_CLC, Get_Communes, Get_Inconfort_Thermique } from "./queries";
import { CLC, DbFiltered } from "./type";

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
  const db_filtered: Awaited<DbFiltered[]> = await Get_Communes(code); //REPLACE

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
      geometry: JSON.parse(elem.geometry),
    };
  });

  const getCentroid = (arr: number[][]) => {
    return arr.reduce(
      (x: number[], y: number[]) => {
        return [x[0] + y[0] / arr.length, x[1] + y[1] / arr.length];
      },
      [0, 0],
    );
  };

  const all_coordinates = db_filtered.map((el: DbFiltered) => el.coordinates.split(",").map(Number));
  const centerCoord: number[] = getCentroid(all_coordinates);

  const clc_2018: Awaited<CLC[]> = await Get_CLC(centerCoord);
  const clc_parsed = clc_2018.map(function (elem: CLC) {
    return {
      type: "Feature",
      properties: {
        label: elem.label3,
        centroid: elem.centroid,
      },
      geometry: JSON.parse(elem.geometry),
    };
  });

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
        <DynamicPageComp data={theme} inconfort_thermique={db_inconfort_thermique} db_filtered={db_parsed} clc={clc_parsed} />
      </div>
    </Container>
  );
};

export default Page;
