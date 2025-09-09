"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { etatCoursDeauLegends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import { CarteCommunes, EtatCoursDeau } from "@/lib/postgres/models";
import { EtatCoursEauRessourcesEauText } from '@/lib/staticTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from "next/navigation";
import styles from '../../explorerDonnees.module.scss';

export const EtatEcoCoursDeau = (props: {
  etatCoursDeau: EtatCoursDeau[];
  carteCommunes: CarteCommunes[];
}) => {
  const { etatCoursDeau, carteCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const etatCoursDeauMap = etatCoursDeau.map(EtatCoursDeauMapper);
  const carteCommunesMap = carteCommunes.map(CommunesIndicateursMapper);
  const exportData = IndicatorExportTransformations.ressourcesEau.EtatCoursEau(etatCoursDeau)

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className='pr-5'>
          <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
            La carte ci-contre reflète l’état écologique des cours d’eau
            présents sur votre territoire. Le bon fonctionnement des milieux
            aquatiques est évalué à partir d’éléments physico-chimiques
            (composition de l’eau, polluants…) mais aussi de la présence de
            la faune et de la flore (poissons, invertébrés, plantes
            aquatiques), ainsi que des propriétés hydromorphologiques (état
            des berges, continuité de la rivière, etc.).
          </Body>
          <ReadMoreFade maxHeight={100}>
            <EtatCoursEauRessourcesEauText />
          </ReadMoreFade>
        </div>
        <div className={styles.mapWrapper}>
          {etatCoursDeau.length ? (
            <>
              <MapEtatCoursDeau
                etatCoursDeau={etatCoursDeauMap}
                carteCommunes={carteCommunesMap}
              />
              <div className={styles.legendCoursDeauWrapper}>
                <LegendCompColor legends={etatCoursDeauLegends} />
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
          Source : Agences de l'eau
        </Body>
        <ExportButtonNouveauParcours
          data={exportData}
          baseName="etat_cours_deau"
          type={type}
          libelle={libelle}
          code={code}
          sheetName="État des cours d'eau"
        >
          Exporter
        </ExportButtonNouveauParcours>
      </div>
    </>
  );
};
