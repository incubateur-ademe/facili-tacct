import { useState } from "react"
import Sante from "./components/sante";
import Tourisme from "./components/tourisme";
import Batiment from "./components/batiment";
import styles from "./explication.module.scss"

interface Props {
  states: boolean[],
}

const FilterState = (props: Props) => {
  const { states } = props;

  return (
      <div className={styles.explicationText}>
        {
          states[0] ?
          <Batiment/>
          : states[2] ?
          <Sante/>
          : states[1] ?
          <Tourisme/>
          : <h3>Autre</h3>
        }
      </div>
  )
}

export default FilterState;