'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { debroussaillementLegend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapTiles } from '@/components/maps/mapTiles';
import { CustomTooltipNouveauParcours } from '@/components/utils/Tooltips';
import { Body } from '@/design-system/base/Textes';
import { useHasMapData } from '@/hooks/useHasMapData';
import { DebroussaillementText } from '@/lib/staticTexts';
import { debroussaillementTooltipText } from '@/lib/tooltipTexts';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const Debroussaillement = ({
  coordonneesCommunes
}: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;

  const hasData = useHasMapData({
    bucketUrl: 'debroussaillement',
    layer: 'debroussaillement',
    coordonneesCommunes: coordonneesCommunes
  });

  return (
    <>
      <div className={styles.datavizMapContainer}>
        <DebroussaillementText />
        <CustomTooltipNouveauParcours
          title={debroussaillementTooltipText}
          texte="Définition"
        />
        <div className={styles.mapWrapper}>
          {coordonneesCommunes &&
            coordonneesCommunes.codes.length &&
            hasData ? (
            <>
              <MapTiles
                coordonneesCommunes={coordonneesCommunes}
                mapRef={mapRef}
                mapContainer={mapContainer}
                bucketUrl="debroussaillement"
                layer="debroussaillement"
                paint={{
                  'fill-color': '#F83DD9',
                  'fill-opacity': 0.8
                }}
                legend={<LegendCompColor legends={debroussaillementLegend} />}
              />
            </>
          ) : (
            <div className="p-10 flex flex-row justify-center">
              <DataNotFoundForGraph image={DataNotFound} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size="sm" style={{ color: 'var(--gris-dark)' }}>
          Source : Institut national de l’information géographique et forestière
        </Body>
        <ExportPngMaplibreButtonNouveauParcours
          mapRef={mapRef}
          mapContainer={mapContainer}
          documentDiv=".debroussaillementLegendWrapper"
          fileName={`debroussaillement_${type}_${libelle}`}
          anchor="Débroussaillement"
          type={type}
          libelle={libelle}
          code={code}
          thematique="Gestion des risques"
        />
      </div>
    </>
  );
};
