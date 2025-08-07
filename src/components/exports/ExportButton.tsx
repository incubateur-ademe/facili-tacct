"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.svg';
import { BoutonPrimaireClassic } from '@/design-system/base/Boutons';
import { exportMultipleSheetToXLSX, exportToXLSX } from '@/lib/utils/export/exportXlsx';
import Image from 'next/image';
import { usePostHog } from 'posthog-js/react';
import { useState } from 'react';
import styles from "../components.module.scss";

type ExportDataRow = Record<string, string | number | boolean | null | bigint | undefined>;

interface ExportButtonProps {
  data: ExportDataRow[];
  baseName: string;
  type: string;
  libelle: string;
  code: string;
  sheetName: string;
  children?: React.ReactNode;
  documentation?: { [key: string]: string; }[];
  style?: React.CSSProperties;
}

export const ExportButton = ({
  data,
  baseName,
  type,
  libelle,
  code,
  sheetName,
  documentation,
  children = "Exporter",
  style
}: ExportButtonProps) => {
  const posthog = usePostHog();
  const [isExporting, setIsExporting] = useState(false);
  posthog.capture(
    baseName === "inconfort_thermique"
      ? "export_xlsx_thematique_bouton"
      : 'export_xlsx_bouton', {
    thematique: baseName,
    code: code,
    libelle: libelle,
    type: type,
    date: new Date()
  });
  const handleExport = async () => {
    if (!data || data.length === 0) {
      console.log('Aucune donnée à exporter');
      return;
    }
    setIsExporting(true);
    try {
      if (documentation) {
        exportMultipleSheetToXLSX(
          {
            [sheetName]: data,
            Documentation: Array.isArray(documentation) ? documentation : [{ Documentation: documentation }],
          },
          baseName,
          type,
          libelle
        );
      } else {
        exportToXLSX(data, baseName, type, libelle, sheetName);
      }
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
      style={{
        cursor: isExporting ? 'wait' : 'pointer',
        ...style,
      }}
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

export const ExportButtonNouveauParcours = ({
  data,
  baseName,
  type,
  libelle,
  code,
  sheetName,
  documentation,
  children = "Exporter",
  style
}: ExportButtonProps) => {
  const posthog = usePostHog();
  const [isExporting, setIsExporting] = useState(false);
  posthog.capture(
    baseName === "inconfort_thermique"
      ? "export_xlsx_thematique_bouton"
      : 'export_xlsx_bouton', {
    thematique: baseName,
    code: code,
    libelle: libelle,
    type: type,
    date: new Date()
  });
  const handleExport = async () => {
    if (!data || data.length === 0) {
      console.log('Aucune donnée à exporter');
      return;
    }
    setIsExporting(true);
    try {
      if (documentation) {
        exportMultipleSheetToXLSX(
          {
            [sheetName]: data,
            Documentation: Array.isArray(documentation) ? documentation : [{ Documentation: documentation }],
          },
          baseName,
          type,
          libelle
        );
      } else {
        exportToXLSX(data, baseName, type, libelle, sheetName);
      }
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <BoutonPrimaireClassic
      onClick={handleExport}
      disabled={isExporting}
      icone={ExporterIcon}
      size='sm'
      text={isExporting ? 'Export en cours...' : children as string}
      style={{
        cursor: isExporting ? 'wait' : 'pointer',
        ...style,
      }}
    />
  );
};
