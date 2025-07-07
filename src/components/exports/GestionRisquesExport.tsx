'use client';

import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';
import { fetchGestionRisquesForExport } from '@/lib/queries/exports/gestionRisques';

export const GestionRisquesExport = (
  {
    code,
    libelle,
    type
  }: {
    code: string;
    libelle: string;
    type: string;
  }) => {
  return (
    <div className="mb-4">
      <FetchAndExportButton
        fetchFunction={() => fetchGestionRisquesForExport(code, libelle, type)}
        baseName="gestion_risques"
        type={type}
        libelle={libelle}
      >
        Export gestion des risques
      </FetchAndExportButton>
    </div>
  );
};
