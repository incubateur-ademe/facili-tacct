import { type Metadata } from "next";

import { Container, Grid, GridCol, Box } from "../../../src/dsfr/server";
import { sharedMetadata } from "../shared-metadata";

const title = "Mentions légales";
const url = "/mentions-legales";

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

const MentionsLegales = () => (
  <Container my="4w">
    <h1>{title}</h1>
  </Container>
);

export default MentionsLegales;
