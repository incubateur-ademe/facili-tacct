import { Breadcrumb } from "@codegouvfr/react-dsfr/Breadcrumb";
import { type Metadata } from "next";

import { NoticeComp } from "@/dsfr/base/Notice";

import { Container } from "../../dsfr/server";
import { Cards } from "./cards";

export const metadata: Metadata = {
  title: "Thématiques",
  description: "Thématiques",
};

const Thematiques = () => {
  return (
    <>
      <Container size="xl">
        <Breadcrumb
          currentPageLabel="Thématique"
          homeLinkProps={{
            href: "/",
          }}
          segments={[]}
        />
        <h1>Quelle thématique vous intéresse ?</h1>
        <NoticeComp title="Les thématiques suivantes ont été choisies selon " />
        <Cards />
      </Container>

      {/* <div>
        <Box style={{ backgroundColor: "white", margin: "1em 0" }}>
          <GridCol lg={6} offset={1}>
            <StepperComp title="Sélection d'une thématique" stepCount={4} currentStep={1} />
          </GridCol>
        </Box>
        <ThematiquesComp />
      </div> */}
    </>
  );
};

export default Thematiques;
