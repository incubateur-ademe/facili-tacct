'use client';
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from '@/components/graphDataNotFound';
import { o3Legend } from '@/components/maps/legends/datavizLegends';
import { LegendCompColor } from '@/components/maps/legends/legendComp';
import { MapTilesO3 } from '@/components/maps/mapTilesO3';
import { Body } from '@/design-system/base/Textes';
import { O3 } from '@/lib/postgres/models';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import styles from '../../explorerDonnees.module.scss';

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
            <>
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
                    ['/', ['round', ['*', ['get', 'valeur'], 100]], 100],
                    '#E0F9F7', // 0 - Bleu très très clair
                    1,
                    '#C8F3EE', // 1
                    2,
                    '#A4F5EE', // 2
                    3,
                    '#85E6D8', // 3
                    4,
                    '#A6E4D3', // 4
                    5,
                    '#C4E8A3', // 5 - Vert clair
                    6,
                    '#DFEC7B', // 6
                    7,
                    '#F5E290', // 7 - Jaune
                    8,
                    '#FFD97A', // 8
                    10,
                    '#FFBD6B', // 10 - Orange clair
                    12,
                    '#FFAB66', // 12
                    15,
                    '#FC9999', // 15 - Rose clair
                    20,
                    '#F37D7D', // 20
                    25,
                    '#E06060', // 25 - Rose foncé
                    30,
                    '#C97189', // 30
                    35,
                    '#B982B2' // >=35 - Violet
                  ],
                  'fill-opacity': 0.7,
                  'fill-antialias': false
                }}
                legend={<LegendCompColor legends={o3Legend} />}
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
