import Breadcrumb from '@codegouvfr/react-dsfr/Breadcrumb';
import { type Metadata } from 'next';

import { Container } from '../../../dsfr/server';
import FilterThemes from './filterThemes';

export const metadata: Metadata = {
  title: 'Données territoriales',
  description: 'Données territoriales'
};

type SearchParams = {
  searchParams: {
    codepci: string;
    codgeo: string;
    thematique: string;
  };
};

const Page = async (searchParams: SearchParams) => {
  const codepci = searchParams.searchParams.codepci;
  const codgeo = searchParams.searchParams.codgeo;
  const thematique = searchParams.searchParams.thematique;

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
      <FilterThemes searchParams={searchParams.searchParams} />
    </Container>
  );
};

export default Page;
