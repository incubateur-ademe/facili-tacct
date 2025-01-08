'use server';

import { ErrorDisplay } from '../../ErrorDisplay';
import Amenagement from './thematiques/amenagement';
import Biodiversite from './thematiques/biodiversite';
import GestionRisques from './thematiques/gestionRisques';
import InconfortThermique from './thematiques/inconfortThermique';
import RessourcesEau from './thematiques/ressourcesEau';

const FilterThemes = async (searchParams: SearchParams) => {
  const thematique = await searchParams.searchParams.thematique;
  return (
    <div>
      {thematique === 'Inconfort thermique' ? (
        <InconfortThermique searchParams={searchParams.searchParams} />
      ) : thematique === 'Biodiversité' ? (
        <Biodiversite searchParams={searchParams.searchParams} />
      ) : thematique === 'Gestion des risques' ? (
        <GestionRisques searchParams={searchParams.searchParams} />
      ) : thematique === 'Ressources en eau' ? (
        <RessourcesEau searchParams={searchParams.searchParams} />
      ) : thematique === 'Aménagement' ? (
        <Amenagement searchParams={searchParams.searchParams} />
      ) : (
        <ErrorDisplay code="404" />
      )}
    </div>
  );
};

export default FilterThemes;
