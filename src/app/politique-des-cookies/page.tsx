import { type Metadata } from "next";

import { anchorHeadingMDXComponents } from "@/mdx-components";

import PolitiqueCookies from "../../../content/politique-de-confidentialite/cookies.mdx";
import { Container } from "../../dsfr/server";
import { sharedMetadata } from "../shared-metadata";

const title = "Politique des cookies";
const url = "/politique-des-cookies";

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
      <PolitiqueCookies components={anchorHeadingMDXComponents} />
    </Container>
  );
};

export default PolitiqueConfidentialite;
