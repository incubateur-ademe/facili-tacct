"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { exportMultipleSheetToXLSX } from '@/lib/utils/export/exportXlsx';
import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import styles from "../components.module.scss";

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
  code: string;
  children?: React.ReactNode;
  documentationSheet?: ExportDataRow[];
}

export const MultiSheetExportButton = ({
  sheetsData,
  baseName,
  type,
  libelle,
  code,
  children = 'Exporter',
  documentationSheet
}: MultiSheetExportButtonProps) => {
  const posthog = usePostHog();
  const [isExporting, setIsExporting] = useState(false);
  posthog.capture('export_xlsx_bouton', {
    thematique: baseName,
    code: code,
    libelle: libelle,
    type: type,
    date: new Date()
  });

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

      if (documentationSheet && documentationSheet.length > 0) {
        dataForExport['Documentation'] = documentationSheet;
      }

      exportMultipleSheetToXLSX(dataForExport, baseName, type, libelle);
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <button
      onClick={handleExport}
      disabled={isExporting}
      className={styles.exportIndicatorButton}
    >
      {isExporting ? 'Export en cours...' : children}
      <Image
        alt="Exporter les données"
        src={ExporterIcon}
        width={16}
        height={16}
      />
    </button>
  );
};
