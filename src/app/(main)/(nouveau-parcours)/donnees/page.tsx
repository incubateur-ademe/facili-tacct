import { ErrorDisplay } from '@/app/ErrorDisplay';
import AgricultureEtPecheServerPage from './thematiques/agricultureEtPeche/AgricultureEtPecheServerPage';
import AmenagementServerPage from './thematiques/amenagement/AmenagementServerPage';
import BiodiversiteServerPage from './thematiques/biodiversite/BiodiversiteServerPage';
import ConfortThermiqueServerPage from './thematiques/confortThermique/ConfortThermiqueServerPage';
import EauServerPage from './thematiques/Eau/EauServerPage';
import GestionRisquesServerPage from './thematiques/gestionRisques/GestionRisquesServerPage';

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
            ) : thematique === "Eau" ? (
              <EauServerPage searchParams={props.searchParams} />
            ) : thematique === "Gestion des risques" ? (
              <GestionRisquesServerPage searchParams={props.searchParams} />
            ) : ""}
          </div>
          : <ErrorDisplay code="404" />
      }
    </>
  );
};

export default ExplorerTerritoirePage;
