import AgricultureEtPecheServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/agriculture/AgricultureEtPecheServerPage';
import AmenagementServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/amenagement/AmenagementServerPage';
import BiodiversiteServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/biodiversite/BiodiversiteServerPage';
import ConfortThermiqueServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/confortThermique/ConfortThermiqueServerPage';
import EauServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/eau/EauServerPage';
import GestionRisquesServerPage from '@/app/(main)/(nouveau-parcours)/donnees/thematiques/gestionRisques/GestionRisquesServerPage';
import { ErrorDisplay } from '@/app/ErrorDisplay';

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
            ) : thematique === "Agriculture" ? (
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
