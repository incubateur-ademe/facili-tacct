import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import RessourcesCards from './cards';

export const metadata: Metadata = {
  title: 'Ressources',
  description: 'Catalogue de ressources Facili-TACCT à destination des collectivités',
};

const Ressources = () => {
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel="Ressources"
        homeLinkProps={{
          href: '/'
        }}
        segments={[]}
      />
      <RessourcesCards />
    </Container>
  );
};

export default Ressources;
