import { Container } from '@/dsfr/layout';
import GetInsights from '../query';

const EpciCount = async () => {
  const totalEpci = await GetInsights('9LrQuRLc');
  return (
    <Container m="4w">
      {totalEpci ? (
        <div style={{ margin: '0 0 2rem' }}>
          <h2>Nombre total de collectivités recherchées</h2>
          <p>
            {totalEpci[0].count} depuis le {totalEpci[0].labels[0]}
          </p>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};

export default EpciCount;
