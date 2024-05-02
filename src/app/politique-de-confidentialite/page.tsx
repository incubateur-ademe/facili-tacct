import Table from "@codegouvfr/react-dsfr/Table";
import { type Metadata } from "next";

import { MdxLink } from "../../components/mdx/Link";
import { Container } from "../../../src/dsfr/server";
import { AnchorLink } from "../../../src/dsfr/client";

import { sharedMetadata } from "../shared-metadata";

const title = "Politique de confidentialité";
const url = "/politique-de-confidentialite";

export const metadata: Metadata = {
  ...sharedMetadata,
  title,
  openGraph: {
    ...sharedMetadata.openGraph,
    title,
    url,
  },
  alternates: {
    canonical: url,
  },
};

const PolitiqueConfidentialite = () => {
  return (
    <Container my="4w">
      <h1>{title}</h1>
      <AnchorLink anchor="sous-traitants" as="h2">
        Sous-traitants
      </AnchorLink>
      <Table
        bordered
        headers={["Partenaire", "Pays destinataire", "Pays d'hébergement", "Traitement réalisé", "Garantie"]}
        data={[
          [
            "Vercel",
            "États-Unis",
            "France (AWS cdg1)",
            "Hébergement",
            <MdxLink
              key="vercel"
              title="Déclaration de confidentialité Vercel"
              href="https://vercel.com/legal/privacy-policy"
            >
              Déclaration de confidentialité Vercel
            </MdxLink>,
          ],
        ]}
      />
    </Container>
  );
};

export default PolitiqueConfidentialite;
