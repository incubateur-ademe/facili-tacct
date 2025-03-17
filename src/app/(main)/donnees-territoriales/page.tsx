import { ClientOnly } from '@/components/utils/ClientOnly';
import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

const Page = async (props: { searchParams: SearchParams }) => {
  const { thematique, code, libelle, type } = await props.searchParams;
  return (
    <Container size="xl" className="mb-24">
      <ClientOnly>
        <Breadcrumb
          currentPageLabel={`Données territoriales : ${thematique}`}
          homeLinkProps={{
            href: '/'
          }}
          segments={[
            {
              label: 'Thématiques',
              linkProps: {
                href: code
                  ? `/thematiques?code=${code}&libelle=${libelle}&type=${type}`
                  : `/thematiques?libelle=${libelle}&type=${type}`
              }
            }
          ]}
        />
        <FilterThemes {...props} />
      </ClientOnly>
    </Container>
  );
};

export default Page;
