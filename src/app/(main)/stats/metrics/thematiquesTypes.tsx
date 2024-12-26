import { BarChartStats } from '@/components/charts/stats/BarChart';
import { Container } from '@/dsfr/layout';
import GetInsights from '../query';

const ThematiquesTypes = async () => {
  const thematiquesClicked = await GetInsights('GllOqTd1');
  const graphData = thematiquesClicked
    .filter((e) => e.action.math === 'dau')
    .map((e) => {
      return {
        titre: e.breakdown_value[0],
        nombre: e.aggregated_value
      };
    })
    .sort((a, b) => b.nombre - a.nombre);

  return (
    <Container m="4w">
      <div style={{ margin: '0 0 2rem' }}>
        <h2>Thématiques recherchées</h2>
        <div className="flex flex-row gap-8">
          {graphData.map((e, i) => {
            return (
              <p key={i}>
                {e.titre} : {e.nombre}
              </p>
            );
          })}
        </div>
        <BarChartStats graphData={graphData} />
      </div>
    </Container>
  );
};

export default ThematiquesTypes;
