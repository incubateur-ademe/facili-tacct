import { Container } from '@/design-system/server';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { Metadata } from 'next';
import UniqueUsers from './metrics/uniqueUsers';

export const metadata: Metadata = {
  title: 'Statistiques',
  description: 'Statistiques de l’utilisation de Facili-TACCT',
};

const Page = async () => {
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel="Statistiques"
        homeLinkProps={{
          href: '/'
        }}
        segments={[]}
      />
      <h1>Statistiques</h1>
      <i>
        Cette page présente les statistiques d’utilisation du site Facili-TACCT.
        Veuillez noter qu’il s’agit d’une page en cours de construction, de
        nouvelles données viendront progressivement l’enrichir.
      </i>
      <UniqueUsers />
      {/* <EpciCount /> */}
      {/* <ThematiquesTypes />
      <RessourcesClicked /> */}
    </Container>
  );
};

export default Page;
