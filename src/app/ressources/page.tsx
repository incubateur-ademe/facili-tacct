import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import { Container } from "../../dsfr/server";
import DiagnosticComp from "./diagnostic";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Ressources",
};

const Ressources = () => {
  // const { css } = useStyles();
  return (
    <Container size="xl">
      <Breadcrumb
        currentPageLabel="Ressources"
        homeLinkProps={{
          href: "/",
        }}
        segments={[]}
      />
      <DiagnosticComp />
    </Container>
  )
};

export default Ressources;
