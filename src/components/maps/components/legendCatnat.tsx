"use client";

import "../legend.css";

interface Props {
  data: string;
  typeRisqueValue: string;
  carteCommunes: any;
}

export const Legend = (props: Props) => {
  const { data, typeRisqueValue, carteCommunes } = props;

  const maxValue = () => {
    if (typeRisqueValue === "Tous types") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.sumCatnat ? el.properties.catnat?.sumCatnat : 0));
      return maxValue;
    } else if (typeRisqueValue === "Sécheresse") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.["Sécheresse"] ? el.properties.catnat?.["Sécheresse"] : 0));
      return maxValue;
    } else if (typeRisqueValue === "Cyclones / Tempêtes") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.["Cyclones / Tempêtes"] ? el.properties.catnat?.["Cyclones / Tempêtes"] : 0));
      return maxValue;
    } else if (typeRisqueValue === "Retrait-gonflement des argiles") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.["Retrait-gonflement des argiles"] ? el.properties.catnat?.["Retrait-gonflement des argiles"] : 0));
      return maxValue;
    } else if (typeRisqueValue === "Mouvements de terrain") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.["Mouvements de terrain"] ? el.properties.catnat?.["Mouvements de terrain"] : 0));
      return maxValue;
    } else if (typeRisqueValue === "Innondations") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.Innondations ? el.properties.catnat?.Innondations : 0));
      return maxValue;
    } else if (typeRisqueValue === "Grêle / neige") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.["Grêle / neige"] ? el.properties.catnat?.["Grêle / neige"] : 0));
      return maxValue;
    } else {
      return 0;
    }
  }
  const max = maxValue();

    return (
      <div className="legend">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FF5E54", width: "20px", height: "20px" }}></div>
          <p>&gt;{Math.round((4/5) * max)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FFBD00", width: "20px", height: "20px" }}></div>
          <p>{Math.round((4/5) * max)}-{Math.round((3/5) * max)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#FFFA6A", width: "20px", height: "20px" }}></div>
          <p>{Math.round((3/5) * max)}-{Math.round((2/5) * max)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#D5F4A3", width: "20px", height: "20px" }}></div>
          <p>{Math.round((2/5) * max)}-{Math.round((1/5) * max)}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ backgroundColor: "#5CFF54", width: "20px", height: "20px" }}></div>
          <p>&lt;{Math.round((1/5) * max)}</p>
        </div>
      </div>

    );
  }
