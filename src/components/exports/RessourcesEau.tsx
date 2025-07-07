'use client';

import { FetchAndExportButton } from '@/components/exports/FetchAndExportButton';
import { fetchRessourcesEauForExport } from '@/lib/queries/exports/ressourcesEau';

export const RessourcesEauExport = (
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
        fetchFunction={() => fetchRessourcesEauForExport(code, libelle, type)}
        baseName="ressources_eau"
        type={type}
        libelle={libelle}
        code={code}
      >
        Export ressources en eau
      </FetchAndExportButton>
    </div>
  );
};
