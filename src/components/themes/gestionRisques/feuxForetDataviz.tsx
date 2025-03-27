import { BarLineFeuxForet } from '@/components/charts/gestionRisques/BarLineFeuxForet';
import PieChartFeuxForet from '@/components/charts/gestionRisques/pieChartFeuxForet';
import SubTabs from '@/components/SubTabs';
import { IncendiesForet } from '@/lib/postgres/models';
import { CountOcc } from '@/lib/utils/reusableFunctions/occurencesCount';
import styles from './gestionRisques.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  incendiesForet: IncendiesForet[];
};

const FeuxForetDataviz = (props: Props) => {
  const { datavizTab, setDatavizTab, incendiesForet } = props;
  const sumTypes = Object.values(CountOcc(incendiesForet, 'nature')).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className={styles.graphWrapper}>
      {sumTypes <= 3 ? (
        <>
          <div className={styles.graphTitleWrapper}>
            <h2>Feux de forêt</h2>
          </div>
          <BarLineFeuxForet incendiesForet={incendiesForet} />
        </>
      ) : (
        <>
          <div className={styles.catnatGraphTitleWrapper}>
            <h2>Feux de forêt</h2>
            <SubTabs
              data={['Répartition', 'Évolution']}
              defaultTab={datavizTab}
              setValue={setDatavizTab}
            />
          </div>
          {datavizTab === 'Répartition' ? (
            <PieChartFeuxForet incendiesForet={incendiesForet} />
          ) : datavizTab === 'Évolution' ? (
            <BarLineFeuxForet incendiesForet={incendiesForet} />
          ) : (
            ''
          )}
        </>
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : Base de Données sur les Incendies de Forêts en France,
        consultée en 2024 (derniers chiffres disponibles : 2023)
      </p>
    </div>
  );
};

export default FeuxForetDataviz;
