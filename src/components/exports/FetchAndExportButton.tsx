"use client";
import { exportMultipleSheetToXLSX } from '@/lib/utils/export/exportData';
import { Button } from '@codegouvfr/react-dsfr/Button';
import { useState } from 'react';

interface FetchAndExportButtonProps<T extends Record<string, unknown[]>> {
  fetchFunction: () => Promise<T>;
  baseName: string;
  type: string;
  libelle: string;
  children?: React.ReactNode;
}

export const FetchAndExportButton = <T extends Record<string, unknown[]>>({
  fetchFunction,
  baseName,
  type,
  libelle,
  children = 'Télécharger les données',
}: FetchAndExportButtonProps<T>) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchAndExport = async () => {
    setIsLoading(true);
    try {
      const rawData = await fetchFunction();
      // Check si la donnée existe
      const hasData = Object.values(rawData).some(dataArray => dataArray && dataArray.length > 0);
      if (!hasData) {
        console.log('Aucune donnée à exporter');
        return;
      }
      // Export XLSX avec plusieurs feuilles
      exportMultipleSheetToXLSX(rawData, baseName, type, libelle);
    } catch (error) {
      console.error('Erreur lors de la récupération et de l\'export des données:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleFetchAndExport}
      disabled={isLoading}
    >
      {isLoading ? 'Téléchargement en cours...' : children}
    </Button>
  );
};
