import { ClientOnly } from '@/components/utils/ClientOnly';
import { GetPatch4 } from '@/lib/queries/patch4';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import { Cards } from './cards';
import { Patch4Accordion } from './patch4/patch4Accordion';

export const metadata: Metadata = {
  title: 'Thématiques',
  description: 'Thématiques'
};

const Thematiques = async (props: { searchParams: SearchParams }) => {
  const { codgeo, codepci } = await props.searchParams;
  const patch4 = codgeo ? await GetPatch4(codgeo) : await GetPatch4(codepci);

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
        {patch4.length > 0 && <Patch4Accordion patch4={patch4[0]} />}
        <h1>Quelle thématique vous intéresse ?</h1>
        <Cards />
      </ClientOnly>
    </Container>
  );
};

export default Thematiques;
