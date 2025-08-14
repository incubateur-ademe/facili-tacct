import { ErrorDisplay } from '@/app/ErrorDisplay';
import AgricultureEtPecheServerPage from './thematiques/AgricultureEtPeche/AgricultureEtPecheServerPage';
import AmenagementServerPage from './thematiques/amenagement/AmenagementServerPage';
import BiodiversiteServerPage from './thematiques/biodiversite/BiodiversiteServerPage';
import ConfortThermiqueServerPage from './thematiques/confortThermique/ConfortThermiqueServerPage';

const ExplorerTerritoirePage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type, thematique } = await props.searchParams;
  return (
    <>
      {
        ((code || libelle) && type) ?
          <div>
            {thematique === 'Confort thermique' ? (
              <ConfortThermiqueServerPage searchParams={props.searchParams} />
            ) : thematique === "Biodiversité" ? (
              <BiodiversiteServerPage searchParams={props.searchParams} />
            ) : thematique === "Agriculture et pêche" ? (
              <AgricultureEtPecheServerPage searchParams={props.searchParams} />
            ) : thematique === "Aménagement" ? (
              <AmenagementServerPage searchParams={props.searchParams} />
            ) : ""}
          </div>
          : <ErrorDisplay code="404" />
      }
    </>
  );
};

export default ExplorerTerritoirePage;
