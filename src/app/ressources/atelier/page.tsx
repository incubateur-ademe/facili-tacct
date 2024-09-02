import { Container } from "@/dsfr/server";
import Breadcrumb from "@codegouvfr/react-dsfr/Breadcrumb";
import { Metadata } from "next";
import AtelierComp from "./comp";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Ressources",
};

const Atelier = () => {
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel="Atelier"
        homeLinkProps={{
          href: "/",
        }}
        segments={[
          {
            label: "Ressources",
            linkProps: {
              href: "/ressources",
            },
          },
        ]}
      />
      <AtelierComp />
    </Container>
  )
};

export default Atelier;
