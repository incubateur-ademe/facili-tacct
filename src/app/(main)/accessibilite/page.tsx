import { type Metadata } from 'next';

import { anchorHeadingMDXComponents } from '@/mdx-components';

import { Suspense } from 'react';
import AccessibiliteContent from '../../../../content/accessibilite.mdx';
import { Container } from '../../../design-system/server';
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
    <Suspense>
      <AccessibiliteContent components={anchorHeadingMDXComponents} />
    </Suspense>
  </Container>
);

export default Accessibilite;
