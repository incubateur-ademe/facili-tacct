import { Metadata } from 'next';
import { Container } from '../../../design-system/server';
import RessourcesCards from './cards';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Catalogue de ressources Facili-TACCT à destination des collectivités',
};

const Ressources = () => {
  return (
    <Container size="xl" className="my-16">
      <RessourcesCards />
    </Container>
  );
};

export default Ressources;
