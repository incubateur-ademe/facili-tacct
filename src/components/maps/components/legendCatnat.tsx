"use client";

import styles from "../../themes/gestionRisques/gestionRisques.module.scss";
import "../legend.css";

interface Props {
  data: string;
  typeRisqueValue: string;
  carteCommunes: any;
}

const colors: { [key: string]: string[] } = 
  {
    "Tous types": ["#F60000", "#FF5B37", "#FF8966", "#FFB297", "#FFD8CB"],
    "Inondations": ["#206EB4", "#588AC7", "#82A7D9", "#A9C4EC", "#D0E3FF"],
    "Sécheresse": ["#FF7700", "#FF9141", "#FFAA6D", "#FFC298", "#FFDAC3"],
    "Mouvements de terrain": ["#BE5415", "#D27641", "#E3976C", "#F2B897", "#FFFF8C"],
    "Retrait-gonflement des argiles": ["#FFBC5C", "#FCCE78", "#FBDE97", "#FBECB6", "#FFFAD6"],
    "Cyclones / Tempêtes": ["#82815A", "#A09F66", "#BFBE73", "#DEDE7F", "#F4F38A"],
    "Grêle / neige": ["#00A302", "#56B544", "#83C770", "#ABD99B", "#D1EAC7"],
    "Avalanches": ["#723AA0", "#9361B7", "#B289CF", "#D2B1E6", "#F1DBFE"],
  };

export const LegendCatnat = (props: Props) => {
  const { typeRisqueValue, carteCommunes } = props;

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
    } else if (typeRisqueValue === "Inondations") {
      const maxValue = Math.max(...carteCommunes.map((el: any) => el.properties.catnat?.Inondations ? el.properties.catnat?.Inondations : 0));
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
    <div className={styles.legendItemsWrapper}>
      {
        max > 5 ? colors[typeRisqueValue].map((color, index) => {
          return (
            <div className={styles.legendItem} key={index} >
              <div className={styles.legendColor} style={{ backgroundColor: color, opacity:"1" }}></div>
              {
                index === 0 ? <p>&#x2265;{Math.round((4/5) * max)}</p> :
                index === 1 ? <p>{Math.round((4/5) * max)}-{Math.round((3/5) * max)}</p> :
                index === 2 ? <p>{Math.round((3/5) * max)}-{Math.round((2/5) * max)}</p> :
                index === 3 ? <p>{Math.round((2/5) * max)}-{Math.round((1/5) * max)}</p> :
                <p>&lt;{Math.round((1/5) * max)}</p>
              }
            </div>
          );
        }) : colors[typeRisqueValue].slice(0, max).map((color, index) => {
          return (
            <div className={styles.legendItem} key={index} >
              <div className={styles.legendColor} style={{ backgroundColor: color, opacity:"1" }}></div>
              <p>{max - index}</p> 
            </div>
          );
        })
      }
    </div>
  );
}
