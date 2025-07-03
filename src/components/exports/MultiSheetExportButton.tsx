"use client";
import { exportMultipleSheetToXLSX } from '@/lib/utils/export/exportXlsx';
import { useEffect, useState } from 'react';
import { WaveButton } from '../WaveButton';

type ExportDataRow = Record<string, string | number | boolean | null | bigint | undefined>;

interface SheetData {
  sheetName: string;
  data: ExportDataRow[];
}

interface MultiSheetExportButtonProps {
  sheetsData: SheetData[];
  baseName: string;
  type: string;
  libelle: string;
  children?: React.ReactNode;
}

export const MultiSheetExportButton = ({
  sheetsData,
  baseName,
  type,
  libelle,
  children = 'Exporter les données',
}: MultiSheetExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    if (isExporting) {
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
  }, [isExporting]);

  const handleExport = async () => {
    const hasData = sheetsData.some(sheet => sheet.data && sheet.data.length > 0);
    if (!hasData) {
      console.log('Aucune donnée à exporter');
      return;
    }

    setIsExporting(true);
    try {
      const dataForExport: Record<string, ExportDataRow[]> = {};
      sheetsData.forEach(sheet => {
        if (sheet.data && sheet.data.length > 0) {
          dataForExport[sheet.sheetName] = sheet.data;
        }
      });

      exportMultipleSheetToXLSX(dataForExport, baseName, type, libelle);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <WaveButton
      onClick={handleExport}
      disabled={isExporting}
    >
      {isExporting ? 'Export en cours...' : children}
    </WaveButton>
  );
};
