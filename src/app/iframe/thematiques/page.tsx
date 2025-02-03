import { type Metadata } from 'next';
import { Container } from '../../../dsfr/server';
import { Cards } from './cards';

export const metadata: Metadata = {
  title: 'Thématiques',
  description: 'Thématiques'
};

const Thematiques = () => {
  return (
    <Container size="xl">
      <h1>Quelle thématique vous intéresse ?</h1>
      {/* <NoticeComp title="Les thématiques suivantes ont été choisies selon " /> */}
      <Cards />
    </Container>
  );
};

export default Thematiques;
