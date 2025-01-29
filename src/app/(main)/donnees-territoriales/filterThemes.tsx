'use server';

import { ErrorDisplay } from '../../ErrorDisplay';
import Amenagement from './thematiques/amenagement';
import Biodiversite from './thematiques/biodiversite';
import GestionRisques from './thematiques/gestionRisques';
import InconfortThermique from './thematiques/inconfortThermique';
import RessourcesEau from './thematiques/ressourcesEau';

const FilterThemes = async (props: { searchParams: SearchParams }) => {
  const { thematique } = await props.searchParams;
  return (
    <div>
      {thematique === 'Inconfort thermique' ? (
        <InconfortThermique {...props} />
      ) : thematique === 'Biodiversité' ? (
        <Biodiversite {...props} />
      ) : thematique === 'Gestion des risques' ? (
        <GestionRisques {...props} />
      ) : thematique === 'Ressources en eau' ? (
        <RessourcesEau {...props} />
      ) : thematique === 'Aménagement' ? (
        <Amenagement {...props} />
      ) : (
        <ErrorDisplay code="404" />
      )}
    </div>
  );
};

export default FilterThemes;
