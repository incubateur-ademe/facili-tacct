'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroNumberCircle } from '@/components/charts/MicroDataviz';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { BoundsFromCollection } from '@/components/maps/components/boundsFromCollection';
import { espacesNAFDatavizLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEspacesNaf } from '@/components/maps/mapEspacesNAF';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from '@/design-system/base/Textes';
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { CarteCommunes, ConsommationNAF, TableCommuneModel } from '@/lib/postgres/models';
import { SolsImpermeabilisesText } from '@/lib/staticTexts';
import { SolsImpermeabilisesBiodiversiteDynamicText } from '@/lib/textesIndicateurs/biodiversiteDynamicTexts';
import { espacesNAFTooltipText } from '@/lib/tooltipTexts';
import { consommationEspacesNafDoc } from '@/lib/utils/export/documentations';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from 'next/navigation';
import styles from '../../explorerDonnees.module.scss';

export const SolsImpermeabilises = (props: {
  consommationNAF: ConsommationNAF[];
  carteCommunes: CarteCommunes[];
  tableCommune: TableCommuneModel[];
}) => {
  const { consommationNAF, carteCommunes, tableCommune } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;
  const atlasBiodiversite = tableCommune.filter((el) =>
    el.atlas_biodiversite_avancement !== null &&
    el.atlas_biodiversite_annee_debut !== null
  );
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
      <div className={styles.datavizMapContainer}>
        <div className={styles.dataTextWrapper}>
          <div className={styles.chiffreDynamiqueWrapper}>
            <MicroNumberCircle valeur={sumNaf / 10000} arrondi={1} unite='ha' />
            <div className={styles.text}>
              <SolsImpermeabilisesBiodiversiteDynamicText
                sumNaf={sumNaf}
                atlasBiodiversite={atlasBiodiversite}
                type={type}
              />
              <CustomTooltipNouveauParcours
                title={espacesNAFTooltipText}
                texte="D'où vient ce chiffre ?"
              />
            </div>
          </div>
          <div className='mt-4 pr-5'>
            <ReadMoreFade maxHeight={100}>
              <SolsImpermeabilisesText />
            </ReadMoreFade>
          </div>
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
            ) : <div className='p-10 flex flex-row justify-center'>
              <DataNotFoundForGraph image={DataNotFound} />
            </div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : CEREMA, avril 2024.
        </Body>
        {
          carteCommunes.length !== 0 && enveloppe && carteCommunesFiltered !== null && (
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="consommation_espaces_naf"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Espaces NAF"
              documentation={consommationEspacesNafDoc}
              anchor="Sols imperméabilisés"
            />
          )}
      </div>
    </>
  );
};
