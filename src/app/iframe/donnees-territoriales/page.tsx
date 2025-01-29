import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

const Page = async (props: { searchParams: SearchParams }) => {
  return (
    <Container size="xl" className="mb-24">
      <FilterThemes {...props} />
    </Container>
  );
};

export default Page;
