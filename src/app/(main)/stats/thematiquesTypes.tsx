import { Container } from '@/dsfr/layout';
import GetInsights from './query';

const ThematiquesTypes = async () => {
  const query = await GetInsights();
  const thematiquesClicked = query.results?.filter(
    (e) => e.short_id === 'GllOqTd1'
  )[0].result;
  // console.log(thematiquesClicked)
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
        <h2>Thématiques recherchées</h2>
        {thematiquesClicked.slice(-4).map((e, i) => {
          return (
            <p key={i}>
              {e.breakdown_value} : {e.aggregated_value}
            </p>
          );
        })}
      </div>
    </Container>
  );
};

export default ThematiquesTypes;
