'use client';
import fortesChaleursIcon from '@/assets/icons/chaleur_icon_black.svg';
import secheresseIcon from '@/assets/icons/secheresse_icon_black.svg';
import { BarChart } from '@/components/charts/inconfortThermique/BarChartAgeBati';
import { ExportButton } from '@/components/exports/ExportButton';
import { Loader } from '@/components/loader';
import { AlgoPatch4 } from '@/components/patch4/AlgoPatch4';
import TagInIndicator from '@/components/patch4/TagInIndicator';
import { AgeBatiDto } from '@/lib/dto';
import { ageBatiMapper } from '@/lib/mapper/inconfortThermique';
import { InconfortThermique, Patch4 } from '@/lib/postgres/models';
import { GetPatch4 } from '@/lib/queries/patch4';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { eptRegex } from '@/lib/utils/regex';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AgeBatiText } from '../../../lib/staticTexts';
import styles from './themes.module.scss';

interface ChartData {
  France: number;
  FranceColor: string;
  'Votre Collectivité'?: string;
  'Votre CollectiviteColor'?: string;
  periode: string;
}

const average = (
  array: AgeBatiDto[],
  prop:
    | 'age_bati_pre_19'
    | 'age_bati_19_45'
    | 'age_bati_46_90'
    | 'age_bati_91_05'
    | 'age_bati_post06'
) => array.reduce((a: number, b: AgeBatiDto) => a + b[prop], 0) / array.length;

export const AgeBati = (props: {
  inconfortThermique: InconfortThermique[];
}) => {
  const { inconfortThermique } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const [patch4, setPatch4] = useState<Patch4 | undefined>();
  const [isLoadingPatch4, setIsLoadingPatch4] = useState(true);
  const ageBatiMapped = inconfortThermique.map(ageBatiMapper);

  const ageBatiTerritoire =
    type === 'commune'
      ? ageBatiMapped.filter((e) => e.code_geographique === code)
      : type === 'ept' && eptRegex.test(libelle)
        ? ageBatiMapped.filter((e) => e.ept === libelle)
        : type === 'epci' && !eptRegex.test(libelle)
          ? ageBatiMapped.filter((e) => e.epci === code)
          : ageBatiMapped;
  const exportData = IndicatorExportTransformations.inconfort_thermique.AgeBati(ageBatiTerritoire);

  const averages = {
    averageAgeBatiPre19: average(ageBatiTerritoire, 'age_bati_pre_19'),
    averageAgeBati1945: average(ageBatiTerritoire, 'age_bati_19_45'),
    averageAgeBati4690: average(ageBatiTerritoire, 'age_bati_46_90'),
    averageAgeBati9105: average(ageBatiTerritoire, 'age_bati_91_05'),
    averageAgeBatiPost06: average(ageBatiTerritoire, 'age_bati_post06')
  };

  const constructionBefore2006 =
    averages.averageAgeBatiPre19 +
    averages.averageAgeBati1945 +
    averages.averageAgeBati4690 +
    averages.averageAgeBati9105;

  const chartData: ChartData[] = [
    {
      periode: 'Avant 1919',
      'Votre Collectivité': averages.averageAgeBatiPre19.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 20.5,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1919-1945',
      'Votre Collectivité': averages.averageAgeBati1945.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 9.2,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1946-1990',
      'Votre Collectivité': averages.averageAgeBati4690.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 43.4,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: '1991-2005',
      'Votre Collectivité': averages.averageAgeBati9105.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 15.5,
      FranceColor: 'hsl(125, 70%, 50%)'
    },
    {
      periode: 'Après 2006',
      'Votre Collectivité': averages.averageAgeBatiPost06.toFixed(1),
      'Votre CollectiviteColor': '#ececfe',
      France: 11.4,
      FranceColor: 'hsl(125, 70%, 50%)'
    }
  ];
  const sumAllCount = chartData.reduce((sum, item) => sum + (Number(item["Votre Collectivité"]) || 0), 0);

  useEffect(() => {
    void (async () => {
      if (type === 'commune' || type === 'epci' || type === 'ept') {
        const temp = await GetPatch4(code, type, libelle);
        setPatch4(temp);
      }
      setIsLoadingPatch4(false);
    })()
  }, [code]);

  const fortesChaleurs = patch4 ? AlgoPatch4(patch4, 'fortes_chaleurs') : 'null';
  const secheresse = patch4 ? AlgoPatch4(patch4, 'secheresse_sols') : 'null';

  return (
    <>
      {!isLoadingPatch4 ? (
        <div className={styles.container}>
          <div className={sumAllCount > 0 ? "w-2/5" : "w-1/2"}>
            <div className={styles.explicationWrapper}>
              {
                constructionBefore2006 &&
                  !Object.values(averages).includes(NaN) &&
                  Sum(Object.values(averages)) != 0 ?
                  <p style={{ color: '#161616' }}>
                    Sur votre territoire,{' '}
                    <b>{Round(constructionBefore2006, 1)} %</b> des résidences
                    principales sont construites avant 2006.
                  </p>
                  : ""
              }
              <TagInIndicator
                indice={["Fortes Chaleurs", "Sécheresse des sols"]}
                icon={[fortesChaleursIcon, secheresseIcon]}
                tag={[fortesChaleurs, secheresse]}
              />
            </div>
            <AgeBatiText />
          </div>
          <div className={sumAllCount > 0 ? "w-3/5" : "w-1/2"}>
            <div className={styles.graphWrapper}>
              <p style={{ padding: '1em', margin: '0' }}>
                <b>Part des résidences principales par période de construction</b>
              </p>
              {chartData ? <BarChart chartData={chartData} /> : <Loader />}
              <div className={styles.sourcesExportWrapper}>
                <p>Source : INSEE</p>
                <ExportButton
                  data={exportData}
                  baseName="age_bati"
                  type={type}
                  libelle={libelle}
                  code={code}
                  sheetName="Age du bâti"
                />
              </div>
            </div>
          </div>
        </div>
      ) : <Loader />}
    </>
  );
};
