import { Container } from '@/dsfr/layout';
import GetInsights from './query';

const EpciCount = async () => {
  const query = await GetInsights();
  const totalEpci = query.results?.filter((e) => e.short_id === '9LrQuRLc')[0]
    .result;
  // console.log("totalEpci", totalEpci)

  return (
    <Container m="4w">
      <div style={{ margin: '0 0 2rem' }}>
        <h2>Nombre total de collectivités recherchées</h2>
        <p>
          {totalEpci[0].count} depuis le {totalEpci[0].labels[0]}
        </p>
      </div>
    </Container>
  );
};

export default EpciCount;
