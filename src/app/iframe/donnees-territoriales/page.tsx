import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

type SearchParams = {
  searchParams: {
    codepci: string;
    codgeo: string;
    thematique: string;
  };
};

const Page = async (searchParams: SearchParams) => {
  return (
    <Container size="xl" className="mb-24">
      <FilterThemes searchParams={searchParams.searchParams} />
    </Container>
  );
};

export default Page;
