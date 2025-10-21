import { ErrorDisplay } from '@/app/ErrorDisplay';
import { LoaderText } from '@/components/ui/loader';
import { GetTablecommune } from '@/lib/queries/databases/tableCommune';
import { Suspense } from 'react';
import { SearchParams } from '../../types';
import AgricultureServerPage from './thematiques/agriculture/AgricultureServerPage';
import AmenagementServerPage from './thematiques/amenagement/AmenagementServerPage';
import BiodiversiteServerPage from './thematiques/biodiversite/BiodiversiteServerPage';
import ConfortThermiqueServerPage from './thematiques/confortThermique/ConfortThermiqueServerPage';
import EauServerPage from './thematiques/eau/EauServerPage';
import GestionRisquesServerPage from './thematiques/gestionRisques/GestionRisquesServerPage';

const ExplorerTerritoirePage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type, thematique } = await props.searchParams;
  const dbTableCommune = await GetTablecommune(code, libelle, type);
  return (
    <>
      {
        ((code || libelle) && type) ?
          <Suspense fallback={<LoaderText text='Nous chargeons vos données' />}>
            {thematique === 'Confort thermique' ? (
              <ConfortThermiqueServerPage searchParams={props.searchParams} />
            ) : thematique === "Biodiversité" ? (
              <BiodiversiteServerPage searchParams={props.searchParams} tableCommune={dbTableCommune} />
            ) : thematique === "Agriculture" ? (
              <AgricultureServerPage searchParams={props.searchParams} />
            ) : thematique === "Aménagement" ? (
              <AmenagementServerPage searchParams={props.searchParams} />
            ) : thematique === "Eau" ? (
              <EauServerPage searchParams={props.searchParams} />
            ) : thematique === "Gestion des risques" ? (
              <GestionRisquesServerPage searchParams={props.searchParams} />
            ) : ""}
          </Suspense>
          : <ErrorDisplay code="404" />
      }
    </>
  );
};

export default ExplorerTerritoirePage;
