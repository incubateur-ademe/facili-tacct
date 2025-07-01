'use client';

import { ExportButton } from '@/components/exports/ExportButton';
import { CustomTooltip } from '@/components/utils/CalculTooltip';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { ConsommationEspacesNAFBiodiversiteText } from '../inconfortThermique/staticTexts';
import styles from './biodiversite.module.scss';
import { ConsommationEspacesNAFDataviz } from './consommationEspacesNAFDataviz';

export const ConsommationEspacesNAF = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
}) => {
  const { consommationNAF, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  const carteCommunesEnriched = carteCommunes.map((el) => {
    return {
      ...el,
      naf: consommationNAF.find(
        (item) => item.code_geographique === el.code_geographique
      )?.naf09art23
    };
  });
  const communesMap = carteCommunesEnriched.map(CommunesIndicateursMapper);
  const sumNaf = type === "commune"
    ? consommationNAF.filter((item) => item.code_geographique === code)[0]
      ?.naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);
  const exportData = IndicatorExportTransformations.biodiversite.EspacesNaf(consommationNAF);

  return (
    <div className={styles.container}>
      <div className={carteCommunes.length !== 0 ? "w-2/5" : "w-1/2"}>
        <div className="mb-4">
          <ExportButton
            data={exportData}
            baseName="consommation_espaces_naf"
            type={type}
            libelle={libelle}
            sheetName="Espaces NAF"
          />
        </div>
        <div className={styles.explicationWrapper}>
          {
            sumNaf && sumNaf !== 0 ? (
              <p>
                Entre 2009 et 2023, votre territoire a consommé{' '}
                <b>{Round(sumNaf / 10000, 1)} hectare(s)</b> d’espaces naturels
                et forestiers.{' '}
              </p>
            ) : ""
          }
          <CustomTooltip title={espacesNAFTooltipText} texte="D'où vient ce chiffre ?" />
        </div>
        <ConsommationEspacesNAFBiodiversiteText />
      </div>
      <div className={carteCommunes.length !== 0 ? "w-3/5" : "w-1/2"}>
        <ConsommationEspacesNAFDataviz
          carteCommunes={communesMap}
        />
      </div>
    </div>
  );
};
