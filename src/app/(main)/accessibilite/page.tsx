import { type Metadata } from 'next';

import { anchorHeadingMDXComponents } from '@/mdx-components';

import AccessibiliteContent from '../../../../content/accessibilite.mdx';
import { Container } from '../../../dsfr/server';
import { sharedMetadata } from '../shared-metadata';

const title = "Déclaration d'accessibilité";
const url = '/accessibilite';
export const metadata: Metadata = {
  ...sharedMetadata,
  title,
  openGraph: {
    ...sharedMetadata.openGraph,
    title,
    url
  },
  alternates: {
    canonical: url
  }
};

const Accessibilite = () => (
  <Container my="4w">
    <AccessibiliteContent components={anchorHeadingMDXComponents} />
  </Container>
);

export default Accessibilite;
