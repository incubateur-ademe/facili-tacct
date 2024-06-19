import "./legend.css";

import React from "react";

interface Props {
  data: string
}

const Legend = (props: Props) => {
  const { data } = props;
  return (
    <>
    { data === "densite_bati" ? 
      <div className="legend">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FF5E54", width: "20px", height: "20px" }}></div>
          <p>&gt;0.2</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FFBD00", width: "20px", height: "20px" }}></div>
          <p>0.1-0.2</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FFFA6A", width: "20px", height: "20px" }}></div>
          <p>0.05-0.1</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#D5F4A3", width: "20px", height: "20px" }}></div>
          <p>0-0.05</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#5CFF54", width: "20px", height: "20px" }}></div>
          <p>0</p>
        </div>
        {/* <div style={{ "--color": '#FFD054' }}>&gt;0.2</div>
              <div style={{ "--color": '#D5F4A3' }}>&gt;0.1</div>
              <div style={{ "--color": '#A3F4CA' }}>&gt;0</div>
              <div style={{ "--color": '#5CFF54'}}>0</div> */}
      </div>
      : (
        <div className="legend">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#FF5E54", width: "20px", height: "20px" }}></div>
            <p>&gt;30%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#FFBD00", width: "20px", height: "20px" }}></div>
            <p>20%-30%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#FFFA6A", width: "20px", height: "20px" }}></div>
            <p>10%-20%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#D5F4A3", width: "20px", height: "20px" }}></div>
            <p>0-10%</p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ backgroundColor: "#5CFF54", width: "20px", height: "20px" }}></div>
            <p>0%</p>
          </div>
        </div>
      )
    }
    </>
    
  );
};
export default Legend;
