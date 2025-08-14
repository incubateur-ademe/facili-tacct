'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroChiffreTerritoire } from '@/components/charts/MicroDataviz';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { espacesNAFDatavizLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { ConsommationEspacesNAFBiodiversiteText } from '@/components/themes/inconfortThermique/staticTexts';
import { CustomTooltipNouveauParcours } from '@/components/utils/CalculTooltip';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body, H3 } from '@/design-system/base/Textes';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF } from '@/lib/postgres/models';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { consommationEspacesNafDoc } from '@/lib/utils/export/documentations';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import styles from '../../explorerDonnees.module.scss';

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
  const carteCommunesFiltered = communesMap.filter(
    (el) => el.properties.naf != undefined
  )
  const enveloppe = BoundsFromCollection(carteCommunesFiltered, type, code);
  const sumNaf = type === "commune"
    ? consommationNAF.filter((item) => item.code_geographique === code)[0]
      ?.naf09art23
    : consommationNAF.reduce((acc, item) => acc + item.naf09art23, 0);
  const exportData = IndicatorExportTransformations.biodiversite.EspacesNaf(consommationNAF);

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Sols imperméabilisés entre 2009 et 2023
      </H3>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          <MicroChiffreTerritoire
            value={sumNaf / 10000}
            unit="ha"
            arrondi={1}
            territoireContours={carteCommunesFiltered}
          />
          <div className={styles.text}>
            {
              sumNaf && sumNaf !== 0 ? (
                <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                  Entre 2009 et 2023, votre territoire a consommé{' '}
                  <b>{Round(sumNaf / 10000, 1)} hectare(s)</b> d’espaces naturels
                  et forestiers.{' '}
                </Body>
              ) : ""
            }
            <CustomTooltipNouveauParcours
              title={espacesNAFTooltipText}
              texte="D'où vient ce chiffre ?"
            />
          </div>
        </div>
        <div className='mt-4 pr-5'>
          <ReadMoreFade maxHeight={150}>
            <ConsommationEspacesNAFBiodiversiteText />
          </ReadMoreFade>
        </div>
        <div className={styles.mapWrapper}>
          {
            carteCommunes.length !== 0 && enveloppe && carteCommunesFiltered !== null ? (
              <>
                <MapEspacesNaf
                  carteCommunesFiltered={carteCommunesFiltered}
                  enveloppe={enveloppe}
                />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={espacesNAFDatavizLegend} />
                </div>
              </>
            ) : <DataNotFoundForGraph image={DataNotFound} />
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : CEREMA, avril 2024
        </Body>
        <ExportButtonNouveauParcours
          data={exportData}
          baseName="consommation_espaces_naf"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="Espaces NAF"
          documentation={consommationEspacesNafDoc}
        />
      </div>
    </>
  );
};
