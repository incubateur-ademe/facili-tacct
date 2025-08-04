import { type Metadata } from 'next';
import FilterThemes from '../../(main)/donnees-territoriales/filterThemes';
import { Container } from '../../../design-system/server';

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
