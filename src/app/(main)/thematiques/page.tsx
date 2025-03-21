import { ClientOnly } from '@/components/utils/ClientOnly';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import { Cards } from './cards';

export const metadata: Metadata = {
  title: 'Thématiques',
  description: 'Thématiques'
};

const Thematiques = () => {
  return (
    <Container size="xl" className="mb-24">
      <ClientOnly>
        <Breadcrumb
          currentPageLabel="Thématique"
          homeLinkProps={{
            href: '/'
          }}
          segments={[]}
        />
        <h1>Quelle thématique vous intéresse ?</h1>
        {/* <NoticeComp title="Les thématiques suivantes ont été choisies selon " /> */}
        <Cards />
      </ClientOnly>
    </Container>
  );
};

export default Thematiques;
