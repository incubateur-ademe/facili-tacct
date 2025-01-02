import { BarChartStats } from '@/components/charts/stats/BarChart';
import { Container } from '@/dsfr/layout';
import GetInsights from '../query';

const RessourcesClicked = async () => {
  const ressourcesClicked = await GetInsights('4HSdF87O');
  const graphData = ressourcesClicked
    ? ressourcesClicked
        .filter((e) => e.action.math === 'total')
        .map((e) => {
          return {
            titre: e.breakdown_value[0],
            nombre: e.count
          };
        })
        .sort((a, b) => b.nombre - a.nombre)
    : null;

  return (
    <Container m="4w">
      {graphData ? (
        <div style={{ margin: '0 0 2rem' }}>
          <h2>Ressources recherchées</h2>
          {ressourcesClicked
            .filter((e) => e.action.math === 'total')
            .map((e, i) => {
              return (
                <p key={i}>
                  {e.breakdown_value[0]} : {e.count}
                </p>
              );
            })}
          <BarChartStats graphData={graphData} />
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};

export default RessourcesClicked;
