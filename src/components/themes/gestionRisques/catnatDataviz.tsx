import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { BarChartCatnat } from '@/components/charts/gestionRisques/BarChartCatnat';
import PieChartCatnat from '@/components/charts/gestionRisques/pieChartCatnat';
import { LegendCatnat } from '@/components/maps/legends/legendCatnat';
import { MapCatnat } from '@/components/maps/mapCatnat';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ArreteCatNat } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisques.module.scss';

type ArreteCatNatEnriched = ArreteCatNat & {
  annee_arrete: number;
};
type Props = {
  carteCommunes: CommunesIndicateursDto[];
  datavizTab: string;
  setDatavizTab: (value: string) => void;
  typeRisqueValue: CatnatTypes;
  gestionRisquesPieChart: ArreteCatNatEnriched[];
  gestionRisquesBarChart: ArreteCatNatEnriched[];
  typesRisques: (string | null)[];
  setTypeRisqueValue: (value: CatnatTypes) => void;
  setSliderValue: (value: number[]) => void;
  sliderValue: number[];
};

const CatnatDataViz = (props: Props) => {
  const {
    carteCommunes,
    datavizTab,
    setDatavizTab,
    typeRisqueValue,
    gestionRisquesPieChart,
    gestionRisquesBarChart,
    typesRisques,
    setTypeRisqueValue,
    setSliderValue,
    sliderValue
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Arrêtés catastrophes naturelles</h2>
        <SubTabs
          data={
            type === "commune"
              ? ['Répartition', 'Évolution']
              : ['Répartition', 'Évolution', 'Cartographie']
          }
          defaultTab={datavizTab}
          setValue={setDatavizTab}
        />
      </div>
      {datavizTab === 'Répartition' ? (
        <>
          <div className={styles.catnatGraphFiltersWrapper}>
            <RangeSlider
              firstValue={1982}
              lastValue={2024}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
              width={750}
            />
          </div>
          <PieChartCatnat gestionRisques={gestionRisquesPieChart} />
        </>
      ) : datavizTab === 'Évolution' ? (
        <>
          <div className={styles.catnatGraphFiltersWrapper}>
            <SubTabs
              data={['Tous types', ...typesRisques]}
              defaultTab={typeRisqueValue}
              setValue={setTypeRisqueValue}
              maxWidth="65%"
              borderRight="solid 1px #D6D6F0"
            />
            <RangeSlider
              firstValue={1982}
              lastValue={2024}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
              width={'-webkit-fill-available'}
              padding={'0 1rem 0 2rem'}
              maxWidth="50%"
            />
          </div>
          <BarChartCatnat gestionRisques={gestionRisquesBarChart} />
        </>
      ) : datavizTab === 'Cartographie' ? (
        <>
          <div className={styles.catnatGraphFiltersWrapper}>
            <SubTabs
              data={['Tous types', ...typesRisques]}
              defaultTab={typeRisqueValue}
              setValue={setTypeRisqueValue}
            />
          </div>
          <MapCatnat
            carteCommunes={carteCommunes}
            typeRisqueValue={typeRisqueValue}
          />
          <div
            className={styles.legend}
            style={{ width: 'auto', justifyContent: 'center' }}
          >
            <LegendCatnat
              data={'catnat'}
              typeRisqueValue={typeRisqueValue}
              carteCommunes={carteCommunes}
            />
          </div>
        </>
      ) : (
        ''
      )}
      <p style={{ padding: '1em', margin: '0' }}>
        Source : Base nationale de Gestion ASsistée des Procédures
        Administratives relatives aux Risques (GASPAR). Dernière mise à jour :
        septembre 2024.
      </p>
    </div>
  );
};

export default CatnatDataViz;
