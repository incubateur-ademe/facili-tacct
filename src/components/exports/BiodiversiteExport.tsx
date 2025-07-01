'use client';

import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';
import { fetchBiodiversiteForExport } from '@/lib/queries/exports/biodiversite';

export const BiodiversiteExport = (
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
        fetchFunction={() => fetchBiodiversiteForExport(code, libelle, type)}
        baseName="biodiversite"
        type={type}
        libelle={libelle}
      >
        Export biodiversité
      </FetchAndExportButton>
    </div>
  );
};
