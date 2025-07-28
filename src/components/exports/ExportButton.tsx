"use client";
import ExporterIcon from '@/assets/icons/export_icon_white.png';
import { exportToXLSX } from '@/lib/utils/export/exportXlsx';
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
}

export const ExportButton = ({
  data,
  baseName,
  type,
  libelle,
  code,
  sheetName,
  children = "Exporter",
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
      exportToXLSX(data, baseName, type, libelle, sheetName);
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

