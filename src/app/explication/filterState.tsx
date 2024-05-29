import { useState } from "react"
import Sante from "./sante";
import Tourisme from "./tourisme";

interface Props {
  states: boolean[],
}

const FilterState = (props: Props) => {
  const { states } = props;

  return (
      <div>
        {
          states[2] ?
          <Sante/>
          : states[1] ?
          <Tourisme/>
          : <h3>Autre</h3>
        }
      </div>
  )
}

export default FilterState;