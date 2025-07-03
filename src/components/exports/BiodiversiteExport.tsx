'use client';

import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';
import { EtatCoursDeau } from '@/lib/postgres/models';
import { fetchBiodiversiteForExport } from '@/lib/queries/exports/biodiversite';

export const BiodiversiteExport = (
  {
    code,
    libelle,
    type,
    etatCoursDeau
  }: {
    code: string;
    libelle: string;
    type: string;
    etatCoursDeau: EtatCoursDeau[];
  }) => {
  return (
    <div className="mb-4">
      <FetchAndExportButton
        fetchFunction={() => fetchBiodiversiteForExport(code, libelle, type, etatCoursDeau)}
        baseName="biodiversite"
        type={type}
        libelle={libelle}
      >
        Export biodiversité
      </FetchAndExportButton>
    </div>
  );
};
