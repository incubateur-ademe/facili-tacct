import { type Metadata } from "next";
import dynamic from "next/dynamic";

import { StepperComp } from "@/components/Stepper";
import themes from "@/lib/utils/themes";

import { Box, Container, GridCol } from "../../dsfr/server";
import styles from "./donnees.module.scss";
import { Loader } from "./loader";
import { Get_CLC, Get_Communes } from "./queries";

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
interface CLC {
  centroid: string;
  geometry: string;
  label3: string;
  pk: number;
  shape_length: number;
}
type DbFiltered = {
  code_commune: string;
  coordinates: string;
  densite_bati: number;
  epci: string;
  geometry: string;
  libelle_commune: string;
  libelle_epci: string;
  precarite_logement: number;
};
// 200042497 CODE EPCI TEST 200069193 PARIS 200054781

const Page = async (searchParams: SearchParams) => {
  const theme = themes.inconfort_thermique;
  const code = searchParams.searchParams.code;
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
        <DynamicPageComp data={theme} db_filtered={db_parsed} clc={clc_parsed} />
      </div>
    </Container>
  );
};

export default Page;
