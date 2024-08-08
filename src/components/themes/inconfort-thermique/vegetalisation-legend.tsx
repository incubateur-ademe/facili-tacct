"use client";

import "./vegetalisation-legend.css";

export const LegendCLC = () => {
  return (
    <div className="legendCLC">
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#DE7397" }}></div>
        <p>Constructions</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#7A5710" }}></div>
        <p>Prairies/Pâturages/Terres</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#FFE6A6" }}></div>
        <p>Agriculture/Plantations</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#7C9B39" }}></div>
        <p>Forêt</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#7EB47F" }}></div>
        <p>Espaces verts urbains</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#a6f200" }}></div>
        <p>Arbustes forestiers</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#a6e64d" }}></div>
        <p>Végétation</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#4D4DFF" }}></div>
        <p>Tourbières</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#CCCCFF" }}></div>
        <p>Mairais/Landes</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#000000" }}></div>
        <p>Zone brûlée</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#e0cda9" }}></div>
        <p>Roche/Sable/Mine</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#a6e6cc" }}></div>
        <p>Neige/Glaciers</p>
      </div>
      <div className="legendColor-wrapper">
        <div className="legendColor" style={{ backgroundColor: "#e6f2ff" }}></div>
        <p>Eau</p>
      </div>
    </div>
  );
};
