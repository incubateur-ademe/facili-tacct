import { PieChartAgriculture } from '@/components/charts/agriculture/pieChartAgriculture';
import SurfacesAgricolesProgressBar from '@/components/charts/agriculture/surfacesAgricolesProgressBar';
import SubTabs from '@/components/SubTabs';
import { SurfacesAgricolesModel } from '@/lib/postgres/models';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import styles from './agriculture.module.scss';

type Props = {
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  surfacesAgricoles: SurfacesAgricolesModel[];
};

const SurfacesAgricolesDataviz = (props: Props) => {
  const { datavizTab, setDatavizTab, surfacesAgricoles } = props;

  const sommeToutesSuperficies = Sum(surfacesAgricoles.map(el => 
    el.superficie_sau_cultures_permanentes +
    el.superficie_sau_herbe +
    el.superficie_sau_terres_arables +
    el.superficie_sau_jardins
  ));
  const graphData = [
    {
      id: "Cultures permanentes",
      // label: 'Cultures permanentes',
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes)),
      color: '#00C190',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_cultures_permanentes))/sommeToutesSuperficies,
    },
    {
      id: "Surfaces toujours en herbe",
      // label: 'Surfaces toujours en herbe',
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe)),
      color: '#009ADC',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_herbe)) / sommeToutesSuperficies,
    },
    {
      id: "Terres arables",
      // label: 'Terres arables',
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables)),
      color: '#7A49BE',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_terres_arables)) / sommeToutesSuperficies,
    },
    {
      id: "Jardin",
      // label: 'Jardin',
      count: Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)) ,
      color: '#BB43BD',
      value: 100 * Sum(surfacesAgricoles.map(el => el.superficie_sau_jardins)) / sommeToutesSuperficies,
    },
  ];

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <SubTabs
          data={['Pie', 'Bar']}
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Pie' ? (
        <PieChartAgriculture graphData={graphData} surfacesAgricoles={surfacesAgricoles} />
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
