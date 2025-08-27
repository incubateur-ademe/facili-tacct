import RangeSlider from '@/components/Slider';
import SubTabs from '@/components/SubTabs';
import { BarChartCatnat } from '@/components/charts/gestionRisques/BarChartCatnat';
import PieChartCatnat from '@/components/charts/gestionRisques/pieChartCatnat';
import { ExportButton } from '@/components/exports/ExportButton';
import { LegendCatnat } from '@/components/maps/legends/legendCatnat';
import { MapCatnat } from '@/components/maps/mapCatnat';
import { CommunesIndicateursDto } from '@/lib/dto';
import { ArreteCatNat } from '@/lib/postgres/models';
import { ArreteCatNatExport } from '@/lib/utils/export/exportTypes';
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
  exportData: ArreteCatNatExport[]
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
    sliderValue,
    exportData
  } = props;
  const searchParams = useSearchParams();
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const code = searchParams.get('code')!;

  return (
    <div className={styles.graphWrapper}>
      <div className={styles.catnatGraphTitleWrapper}>
        <h2>Arrêtés de catastrophes naturelles</h2>
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
              lastValue={2025}
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
              lastValue={2025}
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
      <div className={styles.sourcesExportWrapper}>
        <p>
          Source : Base nationale de Gestion ASsistée des Procédures
          Administratives relatives aux Risques (GASPAR). Dernière mise à jour :
          août 2025.
        </p>
        <ExportButton
          data={exportData}
          baseName="arretes_catnat"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Arrêtés CatNat"
        />
      </div>
    </div>
  );
};

export default CatnatDataViz;
