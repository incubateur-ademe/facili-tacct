"use client";

import "../inconfort-thermique/vegetalisation-legend.css";
import styles from "./gestionRisques.module.scss";

export const LegendErosionCotiere = () => {
  return (
    <div className={styles.ErosionCotiereLegendWrapper}>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#A74E10" }}></div>
        <p>Recul supérieur à 3m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#B87830" }}></div>
        <p>Recul entre 1.5 et 3m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#F59550" }}></div>
        <p>Recul entre 0.5 et 1.5m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#FEDD9A" }}></div>
        <p>Recul entre 0.1 et 0.5m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#AFF7F1" }}></div>
        <p>Non perceptible</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#DCEE9F" }}></div>
        <p>Avancée entre 0.1 et 0.5m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#86CD63" }}></div>
        <p>Avancée entre 0.5 et 1.5m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#1DA546" }}></div>
        <p>Avancée entre 1.5 et 3m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#046803" }}></div>
        <p>Avancée supérieure à 3m/an</p>
      </div>
      <div className={styles.colorWrapper}>
        <div className={styles.color} style={{ backgroundColor: "#9D9C9C" }}></div>
        <p>Pas de calcul</p>
      </div>
    </div>
  );
};
