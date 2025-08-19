"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import MapLCZNouveauParcours from '@/components/maps/mapLCZNouveauParcours';
import { LCZCeremaText1, LCZText } from '@/components/themes/inconfortThermique/staticTexts';
import { CustomTooltipNouveauParcours } from '@/components/utils/CalculTooltip';
import { ReadMoreFade } from '@/components/utils/ReadMoreFade';
import { Body, H3 } from "@/design-system/base/Textes";
import { CarteCommunes } from "@/lib/postgres/models";
import { GetLczCouverture } from '@/lib/queries/databases/inconfortThermique';
import { LCZTooltipText } from '@/lib/tooltipTexts';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import styles from '../../explorerDonnees.module.scss';

export const LCZ = ({
  carteCommunes,
}: {
  carteCommunes: CarteCommunes[];
}) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code')!;
  const libelle = searchParams.get('libelle')!;
  const type = searchParams.get('type')!;
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const exportPNGRef = useRef<HTMLDivElement | null>(null);
  const [isLczCovered, setIsLczCovered] = useState<boolean | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    void (async () => {
      const temp = await GetLczCouverture(code, libelle, type);
      setIsLczCovered(temp);
      setIsLoading(false);
    })()
  }, [code]);

  return (
    <>
      <H3 style={{ color: "var(--principales-vert)", fontSize: '1.25rem' }}>
        Cartographie des zones climatiques locales (LCZ)
      </H3>
      <div className={styles.datavizMapContainer}>
        <ReadMoreFade>
          <LCZCeremaText1 />
          <CustomTooltipNouveauParcours title={LCZTooltipText} texte='Que sont les LCZ ?' />
          <LCZText />
        </ReadMoreFade>
        <div className={styles.mapWrapper}>
          {
            carteCommunes ? (
              <div ref={exportPNGRef}>
                <MapLCZNouveauParcours
                  carteCommunes={carteCommunes}
                  isLoading={isLoading}
                  isLczCovered={isLczCovered}
                  mapRef={mapRef}
                  mapContainer={mapContainer}
                />
              </div>
            ) : <DataNotFoundForGraph image={DataNotFound} />
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : {
            isLczCovered
              ? "CEREMA, 2025"
              : <a
                href="https://doi.org/10.5194/essd-14-3835-2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matthias Demuzere et al. 2022
              </a>}
        </Body>
        <ExportPngMaplibreButtonNouveauParcours
          mapRef={mapRef}
          mapContainer={mapContainer}
          documentDiv=".lczLegendWrapper"
          fileName={`LCZ_${type}_${libelle}`}
          style={{ backgroundColor: 'var(--principales-vert)' }}
        />
      </div>
    </>
  );
};
