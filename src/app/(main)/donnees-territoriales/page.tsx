import { ClientOnly } from '@/components/utils/ClientOnly';
import { type Metadata } from 'next';
import { Container } from '../../../design-system/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

const Page = async (props: { searchParams: SearchParams }) => {
  return (
    <Container size="xl" className="my-16">
      <ClientOnly>
        <FilterThemes {...props} />
      </ClientOnly>
    </Container>
  );
};

export default Page;
