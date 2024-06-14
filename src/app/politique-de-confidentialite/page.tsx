import { type Metadata } from "next";

import { anchorHeadingMDXComponents } from "@/mdx-components";

import PolitiqueContent from "../../../content/politique-de-confidentialite/traitement.mdx";
import { Container } from "../../dsfr/server";
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
      <PolitiqueContent components={anchorHeadingMDXComponents} />
    </Container>
  );
};

export default PolitiqueConfidentialite;
