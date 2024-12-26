import { LineChart } from '@/components/charts/stats/lineChart';
import { Container } from '@/dsfr/layout';
import GetInsights from './query';

const UniqueUsers = async () => {
  const query = await GetInsights();
  const uniqueUsers = query.results?.filter((e) => e.short_id === 'XZ6d0n8p')[0]
    .result;

  return (
    <Container m="4w">
      <div
        style={{
          backgroundColor: 'white',
          height: '500px',
          width: '100%',
          margin: '0 0 12rem'
        }}
      >
        <h2>Utilsateurs uniques</h2>
        <LineChart rawData={uniqueUsers} />
      </div>
    </Container>
  );
};

export default UniqueUsers;
