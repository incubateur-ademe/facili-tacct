import Amenagement from "./components/amenagement";
import Batiment from "./components/batiment";
import EspacesNaturels from "./components/espaces-naturels";
import GestionEau from "./components/gestion-eau";
import Sante from "./components/sante";
import Tourisme from "./components/tourisme";
import styles from "./explication.module.scss";

interface Props {
  states: boolean[];
}

const FilterState = (props: Props) => {
  const { states } = props;

  return (
    <div className={styles.explicationText}>
      {states[0] ? (
        <Batiment />
      ) : states[1] ? (
        <Tourisme />
      ) : states[2] ? (
        <Sante />
      ) : states[3] ? (
        <Amenagement />
      ) : states[4] ? (
        <EspacesNaturels />
      ) : states[5] ? (
        <GestionEau />
      ) : (
        <h3>Sélectionnez une thématique pour découvrir comment elle est liée à l'inconfort thermique</h3>
      )}
    </div>
  );
};

export default FilterState;
