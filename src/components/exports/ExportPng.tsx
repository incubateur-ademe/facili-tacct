"use client";

import html2canvas from "html2canvas";
import { RefObject, useEffect, useState } from "react";

export const ExportPngMaplibreButton = ({
  mapRef,
  mapContainer,
  documentDiv = ".exportPNGWrapper",
}: {
  mapRef: RefObject<maplibregl.Map | null>,
  mapContainer: RefObject<HTMLDivElement | null>,
  documentDiv?: string,
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
              link.download = 'indicateur-carte.png';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(url);
            }
            navControls.forEach(control => {
              (control as HTMLElement).style.display = '';
            });
          });
        } catch (error) {
          console.error('Error capturing canvas:', error);
          navControls.forEach(control => {
            (control as HTMLElement).style.display = '';
          });
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
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        zIndex: 1000,
        padding: '8px 12px',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      disabled={isLoading}
    >
      📸 Exporter PNG
    </button>
  );
};
