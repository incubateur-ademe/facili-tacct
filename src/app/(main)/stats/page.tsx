import { Container } from '@/design-system/server';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Metadata } from 'next';
import RessourcesClicked from './metrics/ressourcesClicked';
import ThematiquesTypes from './metrics/thematiquesTypes';
import UniqueUsers from './metrics/uniqueUsers';

export const metadata: Metadata = {
  title: 'Stats',
  description: 'Stats'
};

const Page = async () => {
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel="Stats"
        homeLinkProps={{
          href: '/'
        }}
        segments={[]}
      />
      <UniqueUsers />
      {/* <EpciCount /> */}
      <ThematiquesTypes />
      <RessourcesClicked />
    </Container>
  );
};

export default Page;
