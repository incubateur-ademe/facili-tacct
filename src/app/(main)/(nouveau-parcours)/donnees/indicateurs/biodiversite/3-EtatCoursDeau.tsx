"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MultiSheetExportButtonNouveauParcours } from '@/components/exports/MultiSheetExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { etatCoursDeauLegends, qualiteEauxBaignadelegends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor, LegendCompIcons } from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeauLegacy } from '@/components/maps/mapEtatCoursDeauLegacy';
import { EtatsCoursEauBiodiversiteTextNouveauParcours } from '@/components/themes/inconfortThermique/staticTexts';
import { Body, H3 } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import { CarteCommunes, EtatCoursDeau, QualiteSitesBaignade } from "@/lib/postgres/models";
import { sitesDeBaignadeDoc } from '@/lib/utils/export/documentations';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

export const EtatEcoCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  carteCommunes: CarteCommunes[];
  qualiteEauxBaignade: QualiteSitesBaignade[];
}) => {
  const { etatCoursDeau, carteCommunes, qualiteEauxBaignade } =
    props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);

  const exportData = [
    {
      sheetName: 'État des cours d\'eau',
      data: IndicatorExportTransformations.ressourcesEau.EtatCoursEau(etatCoursDeau)
    },
    {
      sheetName: 'Qualité sites de baignade',
      data: IndicatorExportTransformations.ressourcesEau.QualiteSitesBaignade(qualiteEauxBaignade)
    }
  ];

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        État écologique des cours d’eau et des plans d’eau
      </H3>
      <div className={styles.datavizMapContainer}>
        <div className='pr-5'>
          <EtatsCoursEauBiodiversiteTextNouveauParcours />
        </div>
        <div className={styles.mapWrapper}>
          {etatCoursDeau.length ? (
            <>
              <MapEtatCoursDeauLegacy
                etatCoursDeau={etatCoursDeauMap}
                carteCommunes={carteCommunesMap}
                qualiteEauxBaignade={qualiteEauxBaignade}
              />
              <div
                className={styles.legendCoursDeauWrapper}
              >
                <div className={styles.legendCoursDeau}>
                  <Body weight='bold' style={{ alignItems: 'center' }}>- État des cours d'eau -</Body>
                  <LegendCompColor legends={etatCoursDeauLegends} />
                </div>
                <div className={styles.legendPlanDeau}>
                  <Body weight='bold'>- Plans d'eau -</Body>
                  <LegendCompIcons legends={qualiteEauxBaignadelegends} />
                </div>
              </div>
            </>
          ) : <DataNotFoundForGraph image={DataNotFound} />
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : Agences de l'eau
        </Body>
        <MultiSheetExportButtonNouveauParcours
          sheetsData={exportData}
          baseName="etat_ecologique_cours_deau"
          type={type}
          libelle={libelle}
          code={code}
          documentationSheet={sitesDeBaignadeDoc}
        >
          Exporter
        </MultiSheetExportButtonNouveauParcours>
      </div>
    </>
  );
};
