import { BarLineFeuxForet } from '@/components/charts/gestionRisques/BarLineFeuxForet';
import PieChartFeuxForet from '@/components/charts/gestionRisques/pieChartFeuxForet';
import { feuxForetLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapFeuxDeForet } from '@/components/maps/mapFeuxDeForet';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { CarteCommunes, IncendiesForet } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisques.module.scss';

type Props = {
  carteCommunes: CarteCommunes[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  setSliderValue: (value: number[]) => void;
  sliderValue: number[];
  incendiesForet: IncendiesForet[];
};

const FeuxForetDataviz = (props: Props) => {
  const {
    carteCommunes,
    datavizTab,
    setDatavizTab,
    setSliderValue,
    sliderValue,
    incendiesForet
  } = props;
  const searchParams = useSearchParams();
  const codgeo = searchParams.get('codgeo')!;

  return (
    <div className={styles.graphWrapper}>
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
      ) : datavizTab === 'Cartographie' ? (
        <>
          <div className={styles.catnatGraphFiltersWrapper}>
            <div
              style={{
                padding: '0 3rem',
                maxWidth: '65%',
                borderRight: 'solid 1px #D6D6F0'
              }}
            >
              Legend nombre feux
            </div>
            <RangeSlider
              firstValue={2006}
              lastValue={2023}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
              width={'-webkit-fill-available'}
              padding={'0 1rem 0 2rem'}
              maxWidth="50%"
            />
          </div>
          <MapFeuxDeForet
            carteCommunes={carteCommunes}
            sliderValue={sliderValue}
            incendiesForet={incendiesForet}
          />
          <div
            className={styles.legend}
            style={{ width: 'auto', justifyContent: 'center' }}
          >
            <LegendCompColor legends={feuxForetLegend} />
          </div>
        </>
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

export default FeuxForetDataviz;
