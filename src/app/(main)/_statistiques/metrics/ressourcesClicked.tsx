import { BarChartStats } from '@/components/charts/stats/BarChart';
import { Container } from '@/design-system/layout';
import { GetInsightById } from '../query';
import styles from '../stats.module.scss';

interface RessourceResult {
  data: number[];
  labels: string[];
  count: number;
  aggregated_value: number;
  label: string;
  breakdown_value: string[];
  action: {
    math: string;
    type: string;
  };
}

const RessourcesClicked = async () => {
  const ressourcesClicked = await GetInsightById(627429);
  const graphData = Array.isArray(ressourcesClicked)
    ? (ressourcesClicked as RessourceResult[])
      .filter((e) => e.action.math === 'total')
      .map((e) => {
        return {
          titre: e.breakdown_value[0],
          nombre: e.aggregated_value > 3 ? e.aggregated_value : 0
        };
      })
      .sort((a, b) => b.nombre - a.nombre)
    : null;

  return (
    <Container m="4w">
      {graphData ? (
        <div
          style={{
            backgroundColor: 'white',
            margin: '0 0 2rem'
          }}
        >
          <h2>Ressources recherchées</h2>
          <div className={styles.graphWrapper}>
            <div
              className={styles.graphTitleWrapper}
              style={{ padding: '1rem' }}
            >
              <h2>Nombre de recherche par ressources disponibles</h2>
            </div>
            <div
              style={{
                backgroundColor: 'white',
                height: '700px',
                width: '100%',
                padding: '0 3rem',
                borderRadius: '0.5rem'
              }}
            >
              <BarChartStats graphData={graphData.filter(el => el.nombre !== 0)} bottom={230} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
};

export default RessourcesClicked;
