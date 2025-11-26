"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { exportMultipleSheetToXLSX } from '@/lib/utils/export/exportXlsx';
import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import { useEffect, useState } from 'react';
import styles from "../components.module.scss";
import { CopyLinkClipboard } from '../interactions/CopyLinkClipboard';

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
  anchor?: string;
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
    posthog.capture('export_xlsx_bouton', {
      thematique: baseName,
      code: code,
      libelle: libelle,
      type: type,
      date: new Date()
    });
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


export const MultiSheetExportButtonNouveauParcours = ({
  sheetsData,
  baseName,
  type,
  libelle,
  code,
  children = 'Exporter',
  documentationSheet,
  anchor
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

  const handleExport = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isExporting) return;

    e.currentTarget.blur();
    setIsExporting(true);

    // Attendre que React affiche "Export en cours..." avant de démarrer l'export
    await new Promise(resolve => setTimeout(resolve, 0));

    const hasData = sheetsData.some(sheet => sheet.data && sheet.data.length > 0);
    if (!hasData) {
      console.log('Aucune donnée à exporter');
      setIsExporting(false);
      return;
    }

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
      setTimeout(() => {
        setIsExporting(false);
      }, 3000);
    }
  };

  return (
    <>
      {
        sheetsData.map(sheet => sheet.data).flat(1).length === 0 ? null : (
          <div className={styles.exportShareWrapper}>
            {anchor && <CopyLinkClipboard anchor={anchor} />}
            <BoutonPrimaireClassic
              onClick={handleExport}
              disabled={isExporting}
              icone={isExporting ? null : ExporterIcon}
              size='sm'
              text={isExporting ? 'Export en cours...' : children as string}
              style={{
                cursor: isExporting ? 'wait' : 'pointer',
              }}
            />
          </div>
        )
      }
    </>
  );
};
