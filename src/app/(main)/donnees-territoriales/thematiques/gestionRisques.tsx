import { ExportButton } from '@/components/utils/ExportButton';
import {
  GetArretesCatnat,
  GetIncendiesForet
} from '@/lib/queries/databases/gestionRisques';
import {
  GetCommunes,
  GetErosionCotiere
} from '@/lib/queries/postgis/cartographie';
import { themes } from '@/lib/themes';
import { ThematiquesExports } from '@/lib/utils/export/environmentalDataExport';
import { FilterDataTerritory } from '@/lib/utils/reusableFunctions/filterDataTerritories';
import { Suspense } from 'react';
import styles from '../donnees.module.scss';
import GestionRisquesComp from './gestionRisquesComp';

const GestionRisques = async (props: { searchParams: SearchParams }) => {
  const theme = themes.gestionRisques;
  const { code, libelle, type } = await props.searchParams;
  const dbGestionRisques = await GetArretesCatnat(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const erosionCotiere = await GetErosionCotiere(code, libelle, type);
  const dbIncendiesForet = await GetIncendiesForet(code, libelle, type);
  const exportData = ThematiquesExports.inconfortThermique(FilterDataTerritory(type, code, libelle, dbIncendiesForet));

  return (
    <div>
      <div className="mb-4">
        <ExportButton
          data={exportData}
          baseName="gestion_risques"
          type={type}
          libelle={libelle}
          sheetName="Gestion des risques"
          children="Export gestion des risques"
        />
      </div>
      <div className={styles.container}>
        <Suspense>
          <GestionRisquesComp
            data={theme}
            gestionRisques={dbGestionRisques!}
            carteCommunes={carteCommunes}
            erosionCotiere={erosionCotiere}
            incendiesForet={dbIncendiesForet}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default GestionRisques;
