"use client";
import DataNotFound from '@/assets/images/no_data_on_territory.svg';
import { ExportPngMaplibreButtonNouveauParcours } from '@/components/exports/ExportPng';
import DataNotFoundForGraph from "@/components/graphDataNotFound";
import MapLCZNouveauParcours from '@/components/maps/mapLCZNouveauParcours';
import { Body, H3 } from "@/design-system/base/Textes";
import { CarteCommunes } from "@/lib/postgres/models";
import { GetLczCouverture } from '@/lib/queries/databases/inconfortThermique';
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from 'react';
import styles from '../explorerDonnees.module.scss';

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
        <Body size='sm' style={{ marginTop: '1rem', maxWidth: "850px" }}>
          Les zones climatiques locales (LCZ en anglais) reflètent le comportement
          thermique d’un territoire aux vagues de chaleur estivale. Elles permettent
          de spatialiser les enjeux en fonction de plusieurs indicateurs d’occupation
          du sol et de morphologie urbaine (portion de surface bâtie, perméable et
          imperméable, hauteur des bâtiments, présence et type de végétation, etc.).
        </Body>
        <Body size='sm' style={{ marginTop: '1rem', maxWidth: "850px" }}>
          Attention : les LCZ ne permettent pas de quantifier le phénomène d’îlot de
          chaleur urbain (ICU), qui repose sur des mesures dynamiques de température
          de l’air (et non de surface). Mais elles peuvent, par exemple, orienter
          l’implantation de ces capteurs de mesure de température. Les LCZ ne reflètent
          pas non plus les conditions météorologiques locales, ni le confort thermique
          ressenti par les usagers.
        </Body>
        <div className={styles.mapWrapper}>
          {
            carteCommunes ? (
              <div ref={exportPNGRef}>
                <MapLCZNouveauParcours carteCommunes={carteCommunes} isLoading={isLoading} isLczCovered={isLczCovered} />
              </div>
            ) : <DataNotFoundForGraph image={DataNotFound} />
          }
        </div>
      </div>
      <div className={styles.sourcesExportWrapper} style={{ marginLeft: '-2rem', borderTop: '1px solid var(--gris-medium)' }}>
        <Body size='sm' style={{ color: "var(--gris-dark)" }}>
          Source : {
            isLczCovered
              ? "CEREMA"
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
