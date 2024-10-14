import { ErrorDisplay } from "../ErrorDisplay";
import Biodiversite from "./thematiques/biodiversite";
import InconfortThermique from "./thematiques/inconfortThermique";

const FilterThemes = (searchParams: SearchParams) => {
  const thematique = searchParams.searchParams.thematique;
    return (
      <div>
        {thematique === "Inconfort thermique" ? (
          <InconfortThermique searchParams={searchParams.searchParams}/>
        ) : thematique === "Biodiversité" ? (
          <Biodiversite searchParams={searchParams.searchParams}/>
        ) : (
          <ErrorDisplay code="404" />
        )}        
      </div>
    );
}

export default FilterThemes;
