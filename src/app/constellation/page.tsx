import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import Constellation from "./d3"
const Page = (dimensions:any ) => {
  const dimensions2 = {
    width: "100dvw",
    height: 800,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  };
  return (
  <div className="App">
    <Constellation
      dimensions={dimensions2}
    />
    </div>
    )
};
export default Page;