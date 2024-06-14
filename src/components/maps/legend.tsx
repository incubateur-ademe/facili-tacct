import "./legend.css";

import React from "react";

const Legend = () => {
  return (
    <div className="legend">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "#FF5E54", width: "20px", height: "20px" }}></div>
        <p>&gt;30%</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "#FFD054", width: "20px", height: "20px" }}></div>
        <p>20%-30%</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "#D5F4A3", width: "20px", height: "20px" }}></div>
        <p>10%-20%</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "#A3F4CA", width: "20px", height: "20px" }}></div>
        <p>0-10%</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ backgroundColor: "#5CFF54", width: "20px", height: "20px" }}></div>
        <p>0%</p>
      </div>
      {/* <div style={{ "--color": '#FFD054' }}>&gt;0.2</div>
            <div style={{ "--color": '#D5F4A3' }}>&gt;0.1</div>
            <div style={{ "--color": '#A3F4CA' }}>&gt;0</div>
            <div style={{ "--color": '#5CFF54'}}>0</div> */}
    </div>
  );
};
export default Legend;
