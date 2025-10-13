"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MultiSheetExportButtonNouveauParcours } from '@/components/exports/MultiSheetExportButton';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import { etatCoursDeauLegends, qualiteEauxBaignadelegends } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor, LegendCompIcons } from '@/components/maps/legends/legendComp';
import { MapEtatCoursDeau } from '@/components/maps/mapEtatCoursDeau';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from "@/design-system/base/Textes";
import { CommunesIndicateursMapper } from '@/lib/mapper/communes';
import { EtatCoursDeauMapper } from '@/lib/mapper/etatCoursDeau';
import { CarteCommunes, EtatCoursDeau, ExportCoursDeau, QualiteSitesBaignade } from "@/lib/postgres/models";
import { EtatsCoursEauBiodiversiteTextNouveauParcours } from '@/lib/staticTexts';
import { etatCoursDeauTooltipTextBiodiv } from '@/lib/tooltipTexts';
import { sitesDeBaignadeDoc } from '@/lib/utils/export/documentations';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import styles from '../../explorerDonnees.module.scss';

type DataToExport = {
  code_geographique: string;
  libelle_geographique: string;
  code_epci: string;
  libelle_epci: string;
  ept: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  libelle_petr: string | null;
  code_departement: string;
  libelle_departement: string;
  region: number;
  nom_cours_d_eau: string;
  etat_cours_d_eau: string;
  longueur_m: number;
};

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
  const [exportDataCoursDeau, setExportDataCoursDeau] = useState<DataToExport[]>([]);

  useEffect(() => {
    const fetchExportData = async () => {
      try {
        const response = await fetch(`/api/export/cours_d_eau?code=${code}&libelle=${libelle}&type=${type}`);
        if (response.ok) {
          const { coursDeau }: { coursDeau: ExportCoursDeau[] } = await response.json();
          if (coursDeau && coursDeau.length > 0) {
            const transformedData = IndicatorExportTransformations.ressourcesEau.EtatCoursEau(coursDeau)
            setExportDataCoursDeau(transformedData);
          }
        }
      } catch (error) {
        console.error('Error fetching export data:', error);
      }
    };
    fetchExportData();
  }, [code, libelle, type]);

  const exportData = [
    {
      sheetName: 'État des cours d\'eau',
      data: exportDataCoursDeau
    },
    {
      sheetName: 'Qualité sites de baignade',
      data: IndicatorExportTransformations.ressourcesEau.QualiteSitesBaignade(qualiteEauxBaignade)
    }
  ];

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className='pr-5'>
          <ReadMoreFade maxHeight={100}>
            <EtatsCoursEauBiodiversiteTextNouveauParcours />
            <CustomTooltipNouveauParcours
              title={etatCoursDeauTooltipTextBiodiv}
              texte="Sur quoi repose ce classement ?"
            />
          </ReadMoreFade>
        </div>
        <div className={styles.mapWrapper}>
          {etatCoursDeau.length ? (
            <>
              <MapEtatCoursDeau
                etatCoursDeau={etatCoursDeauMap}
                carteCommunes={carteCommunesMap}
                qualiteEauxBaignade={qualiteEauxBaignade}
              />
              <div className={styles.legendCoursDeauWrapper}>
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
          ) : <div className='p-10 flex flex-row justify-center'>
            <DataNotFoundForGraph image={DataNotFound} />
          </div>
          }
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : Agences de l'eau.
        </Body>
        {
          etatCoursDeau.length > 0 && (
            <MultiSheetExportButtonNouveauParcours
              sheetsData={exportData}
              baseName="etat_ecologique_cours_deau"
              type={type}
              libelle={libelle}
              code={code}
              documentationSheet={sitesDeBaignadeDoc}
              anchor="État des cours d'eau"
            >
              Exporter
            </MultiSheetExportButtonNouveauParcours>
          )}
      </div>
    </>
  );
};
