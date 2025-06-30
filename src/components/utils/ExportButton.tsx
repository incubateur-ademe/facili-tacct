"use client";
import { exportToXLSX } from '@/lib/utils/export/exportData';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useState } from 'react';

type ExportDataRow = Record<string, string | number | boolean | null | bigint | undefined>;

interface ExportButtonProps {
  data: ExportDataRow[];
  baseName: string;
  type: string;
  libelle: string;
  sheetName: string;
  children?: React.ReactNode;
}

export const ExportButton = ({
  data,
  baseName,
  type,
  libelle,
  sheetName,
  children = 'Exporter les données',
}: ExportButtonProps) => {
  const [isExporting, setIsExporting] = useState(false);

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
    <Button
      onClick={handleExport}
    >
      {isExporting ? 'Export en cours...' : children}
    </Button>
  );
};
