import { LineChart } from '@/components/charts/stats/lineChart';
import { Container } from '@/dsfr/layout';
import GetInsights from '../query';

const UniqueUsers = async () => {
  const uniqueUsers = await GetInsights('XZ6d0n8p');
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
        <p>
          Somme totale depuis le {uniqueUsers[0].labels[0]} :{' '}
          {uniqueUsers[0].count} utilisateurs
        </p>
        <LineChart rawData={uniqueUsers} />
      </div>
    </Container>
  );
};

export default UniqueUsers;
