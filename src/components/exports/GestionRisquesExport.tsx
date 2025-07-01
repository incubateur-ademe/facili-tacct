'use client';

import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';
import { fetchGestionRisquesForExport } from '@/lib/queries/exports/gestionRisques';

interface GestionRisquesExportProps {
  code: string;
  libelle: string;
  type: string;
}

export const GestionRisquesExport = ({ code, libelle, type }: GestionRisquesExportProps) => {
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
