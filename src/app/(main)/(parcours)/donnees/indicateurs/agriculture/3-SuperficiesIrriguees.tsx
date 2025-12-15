'use client';

import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { MicroRemplissageTerritoire } from '@/components/charts/MicroDataviz';
import { ExportButtonNouveauParcours } from '@/components/exports/ExportButton';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { surfacesIrrigueesLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapSurfacesIrriguees } from '@/components/maps/mapSurfacesIrriguees';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from '@/design-system/base/Textes';
import { TableCommuneModel } from '@/lib/postgres/models';
import { SurfacesIrrigueesText } from '@/lib/staticTexts';
import { surfacesIrrigueesTooltipText } from '@/lib/tooltipTexts';
import { IndicatorExportTransformations } from '@/lib/utils/export/environmentalDataExport';
import { Round } from '@/lib/utils/reusableFunctions/round';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const SuperficiesIrriguees = (props: {
  tableCommune: TableCommuneModel[];
  coordonneesCommunes: { codes: string[], bbox: { minLng: number, minLat: number, maxLng: number, maxLat: number } } | null;
  contoursCommunes: { geometry: string } | null;
}) => {
  const { tableCommune, coordonneesCommunes, contoursCommunes } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const type = searchParams.get('type')!;
  const libelle = searchParams.get('libelle')!;

  // Parse la géométrie GeoJSON du contour du territoire
  const territoireContours = contoursCommunes ? [{
    type: 'Feature' as const,
    properties: {
      epci: '',
      libelle_epci: '',
      libelle_geographique: libelle,
      code_geographique: code,
      coordinates: ''
    },
    geometry: JSON.parse(contoursCommunes.geometry)
  }] : [];

  const tableCommuneFiltered = useMemo(() =>
    coordonneesCommunes
      ? tableCommune.filter(c => coordonneesCommunes.codes.includes(c.code_geographique))
      : []
    , [tableCommune, coordonneesCommunes]);

  const surfacesIrrigueesData = useMemo(() =>
    tableCommuneFiltered.map(c => ({
      code: c.code_geographique,
      value: c.part_irr_sau_2020 === null ? null : Number(c.part_irr_sau_2020),
      name: c.libelle_geographique
    }))
    , [tableCommuneFiltered]);

  const exportData = useMemo(() => {
    const data = tableCommuneFiltered.map(c => ({
      code_geographique: c.code_geographique,
      libelle_geographique: c.libelle_geographique,
      part_irr_sau_2020: c.part_irr_sau_2020,
      geometry: { coordinates: [[[]]] },
      coordinates: null,
      epci: c.epci,
      libelle_epci: c.libelle_epci,
      ept: null,
      departement: c.departement,
      libelle_departement: c.libelle_departement,
      pnr: null,
      petr: null
    }));
    return IndicatorExportTransformations.agriculture.surfacesIrriguees(data as any);
  }, [tableCommuneFiltered]);

  const surfaceTerritoire = useMemo(() => {
    if (type === "commune") {
      const commune = tableCommuneFiltered.find(c => c.code_geographique === code);
      return commune?.part_irr_sau_2020 ? Number(commune.part_irr_sau_2020) : undefined;
    }
    return tableCommuneFiltered
      .map(c => Number(c.part_irr_sau_2020) || 0)
      .reduce((acc, value) => acc + value, 0);
  }, [tableCommuneFiltered, type, code]);


  const averageSurfaceTerritoire = useMemo(() => {
    if (type === "commune" || !surfaceTerritoire || tableCommuneFiltered.length === 0) {
      return surfaceTerritoire;
    }
    return surfaceTerritoire / tableCommuneFiltered.length;
  }, [surfaceTerritoire, type, tableCommuneFiltered.length]);

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div className={styles.chiffreDynamiqueWrapper}>
          {
            surfaceTerritoire !== undefined && !isNaN(surfaceTerritoire) ? (
              <>
                {contoursCommunes && (
                  <MicroRemplissageTerritoire
                    key={`${type}-${code}-${libelle}`}
                    pourcentage={averageSurfaceTerritoire ?? 0}
                    territoireContours={territoireContours}
                    arrondi={1}
                  />
                )}
                <div className={styles.text}>
                  <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                    Une réalité locale :{' '}
                    {Round(averageSurfaceTerritoire ?? 0, 1)} % de
                    votre agriculture dépend de l'irrigation.
                  </Body>
                  <CustomTooltipNouveauParcours
                    title={surfacesIrrigueesTooltipText}
                    texte="D'où vient ce chiffre ?"
                  />
                </div>
              </>
            ) : (
              <Body weight='bold' style={{ color: "var(--gris-dark)" }}>
                Il n'y a pas de données référencées sur le territoire que vous avez sélectionné
              </Body>
            )
          }
        </div>
        <div className='mt-4 pr-5'>
          <ReadMoreFade maxHeight={100}>
            <SurfacesIrrigueesText />
          </ReadMoreFade>
        </div>
        <div className={styles.mapWrapper}>
          {
            coordonneesCommunes && tableCommuneFiltered.length > 0 ? (
              <>
                <MapSurfacesIrriguees
                  communesCodes={coordonneesCommunes.codes}
                  surfacesIrriguees={surfacesIrrigueesData}
                  boundingBox={[
                    [coordonneesCommunes.bbox.minLng, coordonneesCommunes.bbox.minLat],
                    [coordonneesCommunes.bbox.maxLng, coordonneesCommunes.bbox.maxLat]
                  ]}
                />
                <div
                  className={styles.legend}
                  style={{ width: 'auto', justifyContent: 'center' }}
                >
                  <LegendCompColor legends={surfacesIrrigueesLegend} />
                </div>
              </>
            ) : (
              <div className={styles.dataNotFoundForMap}>
                <DataNotFoundForGraph image={DataNotFound} />
              </div>
            )
          }
        </div>
      </div>
      {
        surfaceTerritoire !== undefined && !isNaN(surfaceTerritoire) && surfaceTerritoire !== 0 ? (
          <div className={styles.sourcesExportMapWrapper}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020.
            </Body>
            <ExportButtonNouveauParcours
              data={exportData}
              baseName="surfaces_irriguees"
              type={type}
              libelle={libelle}
              code={code}
              sheetName="Surfaces irriguées"
              anchor='Superficies irriguées'
            />
          </div>
        ) : (
          <div
            className={styles.sourcesExportWrapper}
            style={{
              marginLeft: '-2rem',
              borderTop: '1px solid var(--gris-medium)',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 0
            }}>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>
              Source : AGRESTE, 2020.
            </Body>
            <Body size='sm' style={{ color: "var(--gris-dark)" }}>Export indisponible : données non référencées ou nulles.</Body>
          </div>
        )
      }
    </>
  );
};
