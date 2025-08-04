import { ClientOnly } from '@/components/utils/ClientOnly';
import { type Metadata } from 'next';
import { Container } from '../../../design-system/server';
import { Cards } from './cards';

export const metadata: Metadata = {
  title: 'Thématiques',
  description: 'Thématiques'
};

const Thematiques = async () => {
  return (
    <Container size="xl" className="mb-24">
      <ClientOnly>
        <h1>Quelle thématique vous intéresse ?</h1>
        <Cards />
      </ClientOnly>
    </Container>
  );
};

export default Thematiques;
