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
    "Tous types": ["#FFD8CB", "#FFB297", "#FF8966", "#FF5B37", "#F60000"],
    "Inondations": ["#D0E3FF", "#A9C4EC", "#82A7D9", "#588AC7", "#206EB4"],
    "Sécheresse": ["#FFDAC3", "#FFC298", "#FFAA6D", "#FF9141", "#FF7700"],
    "Mouvements de terrain": ["#FFFF8C", "#F2B897", "#E3976C", "#D27641", "#BE5415"],
    "Retrait-gonflement des argiles": ["#FFFAD6", "#FBECB6", "#FBDE97", "#FCCE78", "#FFBC5C"],
    "Cyclones / Tempêtes": ["#F4F38A", "#DEDE7F", "#BFBE73", "#A09F66", "#82815A"],
    "Grêle / neige": ["#D1EAC7", "#ABD99B", "#83C770", "#56B544", "#00A302"],
    "Avalanches": ["#F1DBFE", "#D2B1E6", "#B289CF", "#9361B7", "#723AA0"],
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
  const step0 = Math.round((1/5) * max);
  const step1 = Math.round((2/5) * max);
  const step2 = Math.round((3/5) * max);
  const step3 = Math.round((4/5) * max);

  return (
    <div className={styles.legendItemsWrapper}>
      {
        max > 5 ? colors[typeRisqueValue].map((color, index) => {
          return (
            <div className={styles.legendItem} key={index} >
              <div className={styles.legendColor} style={{ backgroundColor: color, opacity:"1" }}></div>
              {
                index === 0 ? <p>&#8804;{step0}</p> :
                index === 1 ? (step0 + 1 === step1 ? <p>{step1}</p> : <p>{step0 + 1}-{step1}</p>) :
                index === 2 ? (step1 + 1 === step2 ? <p>{step2}</p> : <p>{step1 + 1}-{step2}</p>) :
                index === 3 ? (step2 + 1 === step3 ? <p>{step3}</p> : <p>{step2 + 1}-{step3}</p>) :
                <p>&#x2265;{step3 + 1}</p>
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
