"use client";
import { WaveButton } from '@/components/WaveButton';
import { exportToXLSX } from '@/lib/utils/export/exportXlsx';
import { usePostHog } from 'posthog-js/react';
import { useState } from 'react';

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
  children = "Exporter l'indicateur",
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
    <WaveButton
      onClick={handleExport}
      disabled={isExporting}
      style={{
        cursor: isExporting ? 'wait' : 'pointer',
      }}
    >
      {isExporting ? 'Export en cours...' : children}
    </WaveButton>
  );
};

