import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

const Page = async (props: { searchParams: SearchParams }) => {
  const { thematique, codepci, codgeo } = await props.searchParams;
  return (
    <Container size="xl" className="mb-24">
      <Breadcrumb
        currentPageLabel={`Données territoriales : ${thematique}`}
        homeLinkProps={{
          href: '/'
        }}
        segments={[
          {
            label: 'Thématiques',
            linkProps: {
              href: codgeo
                ? `/thematiques?codgeo=${codgeo}&codepci=${codepci}`
                : `/thematiques?codepci=${codepci}`
            }
          }
        ]}
      />
      <FilterThemes {...props} />
    </Container>
  );
};

export default Page;
