"use client";

import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import html2canvas from "html2canvas";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import styles from "../components.module.scss";

export const ExportPngMaplibreButton = ({
  mapRef,
  mapContainer,
  documentDiv = ".exportPNGWrapper",
  fileName = "indicateur-carte.png",
  style
}: {
  mapRef: RefObject<maplibregl.Map | null>,
  mapContainer: RefObject<HTMLDivElement | null>,
  documentDiv?: string,
  fileName?: string,
  style?: React.CSSProperties
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // ajout d'un overlay pour éviter les interactions pendant le chargement
    // et pour afficher un curseur de chargement
    if (isLoading) {
      document.body.style.setProperty('cursor', 'wait', 'important');
      const overlay = document.createElement('div');
      overlay.id = 'export-loading-overlay';
      overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: transparent;
          cursor: wait !important;
          z-index: 9999;
          pointer-events: auto;
        `;
      document.body.appendChild(overlay);
      document.body.classList.add('export-loading');
    } else {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    }
    return () => {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    };
  }, [isLoading]);

  const handleExportPng = async () => {
    setIsLoading(true);
    if (mapRef.current && mapContainer.current) {
      // On cache les contrôles de navigation pour éviter qu'ils n'apparaissent sur le screenshot
      const navControls = mapContainer.current.querySelectorAll('.maplibregl-ctrl-top-right');
      navControls.forEach(control => {
        (control as HTMLElement).style.display = 'none';
      });
      // Ajout du div de la légende et de la source pour le screenshot
      const originalLegendDiv = document.querySelector(documentDiv) as HTMLElement;
      // Cacher le bouton d'export avant la capture
      const exportButton = originalLegendDiv?.querySelector('.' + styles.exportIndicatorButton) as HTMLElement;
      if (exportButton) exportButton.style.display = 'none';
      // Trigger un render pour que le canvas soit prêt
      mapRef.current.once('render', async () => {
        try {
          const mapCanvas = await html2canvas(mapContainer.current!, { useCORS: true });
          const legendCanvas = await html2canvas(originalLegendDiv, { useCORS: true });
          //Combinaison des deux canvases
          const finalCanvas = document.createElement('canvas');
          const ctx = finalCanvas.getContext('2d') as CanvasRenderingContext2D;
          finalCanvas.width = mapCanvas.width;
          finalCanvas.height = mapCanvas.height + legendCanvas.height;
          ctx.drawImage(mapCanvas, 0, 0);
          ctx.drawImage(legendCanvas, 0, mapCanvas.height);

          finalCanvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
            navControls.forEach(control => {
              (control as HTMLElement).style.display = '';
            });
            if (exportButton) exportButton.style.display = '';
          });
        } catch (error) {
          console.error('Error capturing canvas:', error);
          navControls.forEach(control => {
            (control as HTMLElement).style.display = '';
          });
          if (exportButton) exportButton.style.display = '';
        } finally {
          setIsLoading(false);
        }
      });
      mapRef.current.triggerRepaint();
    } else {
      console.log('Map or container not found');
    }
  }
  return (
    <button
      onClick={handleExportPng}
      className={styles.exportIndicatorButton}
      disabled={isLoading}
      style={{ ...style }}
    >
      Exporter
      <Image
        alt="Exporter les données"
        src={ExporterIcon}
        width={16}
        height={16}
      />
    </button>
  );
};

export const ExportPngMaplibreButtonNouveauParcours = ({
  mapRef,
  mapContainer,
  documentDiv = ".exportPNGWrapper",
  fileName = "indicateur-carte.png",
  style
}: {
  mapRef: RefObject<maplibregl.Map | null>,
  mapContainer: RefObject<HTMLDivElement | null>,
  documentDiv?: string,
  fileName?: string,
  style?: React.CSSProperties
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // ajout d'un overlay pour éviter les interactions pendant le chargement
    // et pour afficher un curseur de chargement
    if (isLoading) {
      document.body.style.setProperty('cursor', 'wait', 'important');
      const overlay = document.createElement('div');
      overlay.id = 'export-loading-overlay';
      overlay.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: transparent;
          cursor: wait !important;
          z-index: 9999;
          pointer-events: auto;
        `;
      document.body.appendChild(overlay);
      document.body.classList.add('export-loading');
    } else {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    }
    return () => {
      document.body.style.removeProperty('cursor');
      const overlay = document.getElementById('export-loading-overlay');
      if (overlay) {
        overlay.remove();
      }
      document.body.classList.remove('export-loading');
    };
  }, [isLoading]);

  const handleExportPng = async () => {
    setIsLoading(true);
    if (mapRef.current && mapContainer.current) {
      // On cache les contrôles de navigation pour éviter qu'ils n'apparaissent sur le screenshot
      const navControls = mapContainer.current.querySelectorAll('.maplibregl-ctrl-top-right');
      navControls.forEach(control => {
        (control as HTMLElement).style.display = 'none';
      });
      // On modifie la taille du logo du cerema
      const logoCeremaDev = mapContainer.current.querySelector('.maps-module-scss-module__4-8-aW__ceremaLogoBottomRight') as HTMLElement;
      if (logoCeremaDev) { logoCeremaDev.style.display = 'none' }
      const logoCeremaPreprod = mapContainer.current.querySelector('.maps_ceremaLogoBottomRight__IZXf3') as HTMLElement;
      if (logoCeremaPreprod) { logoCeremaPreprod.style.display = 'none' }
      // Ajout du div de la légende et de la source pour le screenshot
      const originalLegendDiv = document.querySelector(documentDiv) as HTMLElement;
      // Cacher le bouton d'export avant la capture
      const exportButton = originalLegendDiv?.querySelector('.' + styles.exportIndicatorButton) as HTMLElement;
      if (exportButton) exportButton.style.display = 'none';
      // Trigger un render pour que le canvas soit prêt
      mapRef.current.once('render', async () => {
        try {
          const mapCanvas = await html2canvas(mapContainer.current!, { useCORS: true });
          const legendCanvas = await html2canvas(originalLegendDiv, { useCORS: true });
          //Combinaison des deux canvases
          const finalCanvas = document.createElement('canvas');
          const ctx = finalCanvas.getContext('2d') as CanvasRenderingContext2D;
          finalCanvas.width = mapCanvas.width - 16;
          finalCanvas.height = mapCanvas.height + legendCanvas.height;
          ctx.drawImage(mapCanvas, 0, 0);
          ctx.drawImage(legendCanvas, 0, mapCanvas.height);

          finalCanvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.download = fileName;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
            navControls.forEach(control => {
              (control as HTMLElement).style.display = '';
            });
            if (exportButton) exportButton.style.display = '';
          });
        } catch (error) {
          console.error('Error capturing canvas:', error);
          navControls.forEach(control => {
            (control as HTMLElement).style.display = '';
          });
          if (exportButton) exportButton.style.display = '';
        } finally {
          setIsLoading(false);
        }
      });
      mapRef.current.triggerRepaint();
    } else {
      console.log('Map or container not found');
    }
  }
  return (
    <BoutonPrimaireClassic
      onClick={handleExportPng}
      disabled={isLoading}
      icone={ExporterIcon}
      size='sm'
      text={isLoading ? 'Export en cours...' : 'Exporter'}
      style={{
        cursor: isLoading ? 'wait' : 'pointer',
        ...style,
      }}
    />
  );
};


/**
 * Génère un Blob PNG de la carte et de la légende/source, pour un export programmatique (par exemple dans un ZIP).
 * Retourne une Promise<Blob|null>.
 */
export async function generateMapPngBlob({
  mapRef,
  mapContainer,
  documentDiv = ".exportPNGWrapper",
}: {
  mapRef: RefObject<maplibregl.Map | null>,
  mapContainer: RefObject<HTMLDivElement | null>,
  documentDiv?: string,
  fileName?: string,
}): Promise<Blob | null> {
  if (mapRef.current && mapContainer.current) {
    const navControls = mapContainer.current.querySelectorAll('.maplibregl-ctrl-top-right');
    navControls.forEach(control => {
      (control as HTMLElement).style.display = 'none';
    });
    const originalLegendDiv = document.querySelector(documentDiv) as HTMLElement;
    const exportButton = originalLegendDiv?.querySelector('.' + styles.exportIndicatorButton) as HTMLElement;
    if (exportButton) exportButton.style.display = 'none';
    // Wait for map to render
    return new Promise((resolve) => {
      mapRef.current!.once('render', async () => {
        try {
          const mapCanvas = await html2canvas(mapContainer.current!, { useCORS: true });
          const legendCanvas = await html2canvas(originalLegendDiv, { useCORS: true });
          const finalCanvas = document.createElement('canvas');
          const ctx = finalCanvas.getContext('2d') as CanvasRenderingContext2D;
          finalCanvas.width = mapCanvas.width;
          finalCanvas.height = mapCanvas.height + legendCanvas.height;
          ctx.drawImage(mapCanvas, 0, 0);
          ctx.drawImage(legendCanvas, 0, mapCanvas.height);
          finalCanvas.toBlob((blob) => {
            navControls.forEach(control => {
              (control as HTMLElement).style.display = '';
            });
            if (exportButton) exportButton.style.display = '';
            resolve(blob);
          });
        } catch (error) {
          navControls.forEach(control => {
            (control as HTMLElement).style.display = '';
          });
          if (exportButton) exportButton.style.display = '';
          resolve(null);
        }
      });
      mapRef.current!.triggerRepaint();
    });
  } else {
    return null;
  }
}
