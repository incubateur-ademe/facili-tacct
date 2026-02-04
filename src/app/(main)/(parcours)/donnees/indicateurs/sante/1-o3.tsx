'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { o3Legend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { Loader } from '@/components/ui/loader';
import { Body } from '@/design-system/base/Textes';
import { O3 } from '@/lib/postgres/models';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { lazy, Suspense, useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

const MapTilesO3 = lazy(() => import('@/components/maps/mapTilesO3').then(m => ({ default: m.MapTilesO3 })));

export const SeuilsReglementairesO3 = ({
  coordonneesCommunes,
  o3
}: {
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
  o3: O3[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapContainer = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className={styles.datavizMapContainer}>
        <div
          className={styles.chiffreDynamiqueWrapper}
          style={{ alignItems: 'center' }}
        >
          <div className={styles.text}>
            <Body weight="bold" style={{ color: 'var(--gris-dark)' }}>
              Texte dynamique des seuils réglementaires O3
            </Body>
          </div>
        </div>
        <Body size="sm" style={{ marginTop: '1rem' }}>
          Texte statique des seuils réglementaires O3
        </Body>
        <div className={styles.mapWrapper}>
          {coordonneesCommunes && coordonneesCommunes.codes.length ? (
            <Suspense fallback={<Loader />}>
              <MapTilesO3
                coordonneesCommunes={coordonneesCommunes}
                mapRef={mapRef}
                mapContainer={mapContainer}
                bucketUrl="seuils_reglementaires_o3"
                layer="o3"
                o3={o3}
                paint={{
                'fill-color': [
                  'step',
                  ['round', ['get', 'valeur']],
                  '#E0F9F7', // < 1
                  1,
                  '#C8F3EE',
                  2,
                  '#A4F5EE',
                  3,
                  '#85E6D8',
                  4,
                  '#A6E4D3',
                  5,
                  '#C4E8A3',
                  6,
                  '#DFEC7B', 
                  8,
                  '#F5E290', 
                  10,
                  '#FFD97A', 
                  12,
                  '#FFBD6B', 
                  15,
                  '#FFAB66', 
                  20,
                  '#FC9999',
                  25,
                  '#F37D7D',
                  30,
                  '#E06060',
                  35,
                  '#C97189',
                  40,
                  '#B982B2'
                ],
                'fill-opacity': 0.7,
                'fill-antialias': false
              }}
              legend={<LegendCompColor legends={o3Legend} />}
            />
            </Suspense>
          ) : (
            <div className="p-10 flex flex-row justify-center">
              <DataNotFoundForGraph image={DataNotFound} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.sourcesExportMapWrapper}>
        <Body size="sm" style={{ color: 'var(--gris-dark)' }}>
          Source :
        </Body>
        <ExportPngMaplibreButtonNouveauParcours
          mapRef={mapRef}
          mapContainer={mapContainer}
          documentDiv=".lczLegendWrapper"
          fileName={`Seuils_reglementaires_o3_${type}_${libelle}`}
          anchor="Seuils réglementaires O3"
          type={type}
          libelle={libelle}
          code={code}
          thematique="Santé"
        />
      </div>
    </>
  );
};
