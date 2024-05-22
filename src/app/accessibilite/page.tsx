// import AccessibiliteContent from "@__content/accessibilite.mdx";
import { type Metadata } from "next";
import AccessibiliteContent from "../../../content/accessibilite.mdx";
import { Container } from "../../../src/dsfr/server";
import { anchorHeadingMDXComponents } from "@/mdx-components";
import { sharedMetadata } from "../shared-metadata";

const title = "Déclaration d'accessibilité";
const url = "/accessibilite";
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

const Accessibilite = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <AccessibiliteContent components={anchorHeadingMDXComponents} />
  </Container>
);

export default Accessibilite;
