import SurfacesAgricolesProgressBar from '@/components/charts/agriculture/surfacesAgricolesProgressBar';
import SubTabs from '@/components/SubTabs';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import styles from './agriculture.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  surfacesAgricoles: SurfacesAgricolesModel[];
};

const SurfacesAgricolesDataviz = (props: Props) => {
  const { datavizTab, setDatavizTab, surfacesAgricoles } = props;

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Départs de feux et surfaces brûlées depuis 2006</h2>
        <SubTabs
          data={['Pie', 'Bar']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Pie' ? (
        "<PieChartFeuxForet incendiesForet={incendiesForet} />"
      ) : datavizTab === 'Bar' ? (
        <SurfacesAgricolesProgressBar surfacesAgricoles={surfacesAgricoles} />
      ) : (
        ''
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : Base de Données sur les Incendies de Forêts en France,
        consultée en 2024 (derniers chiffres disponibles : 2023)
      </p>
    </div>
  );
};

export default SurfacesAgricolesDataviz;
