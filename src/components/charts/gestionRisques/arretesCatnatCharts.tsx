import { CatnatTypes } from '@/app/(main)/types';
import { BarChartCatnat } from '@/components/charts/gestionRisques/BarChartCatnat';
import PieChartCatnat from '@/components/charts/gestionRisques/pieChartCatnat';
import { LegendCatnat } from '@/components/maps/legends/legendCatnat';
import { MapCatnat } from '@/components/maps/mapCatnat';
import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/ui/SubTabs';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ArreteCatNat } from '@/lib/postgres/models';
import { useSearchParams } from 'next/navigation';
import styles from './gestionRisquesCharts.module.scss';

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

const ArretesCatnatCharts = (props: Props) => {
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
    sliderValue,
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;

  return (
    <div className={styles.dataWrapper}>
      <div className={styles.graphTabsWrapper}>
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
          <div className={styles.sliderWrapper}>
            <RangeSlider
              firstValue={1982}
              lastValue={2025}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
            />
          </div>
          <PieChartCatnat gestionRisques={gestionRisquesPieChart} />
        </>
      ) : datavizTab === 'Évolution' ? (
        <>
          <div className={styles.graphTabsWrapper} style={{ justifyContent: 'flex-start' }}>
            <SubTabs
              data={['Tous types', ...typesRisques]}
              defaultTab={typeRisqueValue}
              setValue={setTypeRisqueValue}
              maxWidth="65%"
              borderRight="solid 1px #D6D6F0"
            />
          </div>
          <div className={styles.sliderWrapper}>
            <RangeSlider
              firstValue={1982}
              lastValue={2025}
              minDist={1}
              setSliderValue={setSliderValue}
              sliderValue={sliderValue}
            />
          </div>
          <BarChartCatnat gestionRisques={gestionRisquesBarChart} />
        </>
      ) : datavizTab === 'Cartographie' ? (
        <>
          <div className={styles.graphTabsWrapper} style={{ justifyContent: 'flex-start' }}>
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
    </div>
  );
};

export default ArretesCatnatCharts;
