// import AccessibiliteContent from "@__content/accessibilite.mdx";
import { type Metadata } from 'next';

import { anchorHeadingMDXComponents } from '@/mdx-components';

import BudgetContent from '../../../../content/budget.mdx';
import { Container } from '../../../design-system/server';
import { sharedMetadata } from '../shared-metadata';

const url = '/budget';
export const metadata: Metadata = {
  ...sharedMetadata,
  openGraph: {
    ...sharedMetadata.openGraph,
    url
  },
  alternates: {
    canonical: url
  }
};

const Budget = () => (
  <Container my="4w">
    <BudgetContent components={anchorHeadingMDXComponents} />
  </Container>
);

export default Budget;
