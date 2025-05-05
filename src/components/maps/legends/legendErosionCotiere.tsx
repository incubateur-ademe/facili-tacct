'use client';

import styles from '../../themes/gestionRisques/gestionRisques.module.scss';

const LegendItem = (props: { text: string; color: string }) => {
  const { text, color } = props;
  return (
    <div className={styles.legendItem}>
      <div
        className={styles.colorSquare}
        style={{ backgroundColor: color }}
      ></div>
      <p>{text}</p>
    </div>
  );
};

export const LegendErosionCotiere = () => {
  return (
    <div className={styles.ErosionCotiereLegendWrapper}>
      <div className={styles.bloc}>
        <p
          style={{
            width: '85px',
            minWidth: '85px',
            margin: 0,
            alignSelf: 'center'
          }}
        >
          <b>Recul</b>
        </p>
        <div className={styles.legendsWrappers}>
          <div className={styles.legendsLeft}>
            <LegendItem text="Supérieur à 3m/an" color="#A74E10" />
            <LegendItem text="Entre 1,5 et 3m/an" color="#B87830" />
          </div>
          <div className={styles.legendsRight}>
            <LegendItem text="Entre 0,5 et 1,5m/an" color="#F59550" />
            <LegendItem text="Entre 0,1 et 0,5m/an" color="#FEDD9A" />
          </div>
        </div>
      </div>
      <div className={styles.bloc}>
        <p
          style={{
            width: '85px',
            minWidth: '85px',
            margin: 0,
            alignSelf: 'center'
          }}
        >
          <b>Avancée</b>
        </p>
        <div className={styles.legendsWrappers}>
          <div className={styles.legendsLeft}>
            <LegendItem text="Entre 0,1 et 0,5m/an" color="#DCEE9F" />
            <LegendItem text="Entre 0,5 et 1,5m/an" color="#86CD63" />
          </div>
          <div className={styles.legendsRight}>
            <LegendItem text="Entre 1,5 et 3m/an" color="#1DA546" />
            <LegendItem text="Supérieur à 3m/an" color="#046803" />
          </div>
        </div>
      </div>
      <div className={styles.bloc}>
        <div className={styles.legendsWrappers} style={{ marginLeft: '85px' }}>
          <div className={styles.legendsLeft}>
            <LegendItem text="Non perceptible" color="#AFF7F1" />
          </div>
          <div className={styles.legendsRight}>
            <LegendItem text="Pas de calcul" color="#9D9C9C" />
          </div>
        </div>
      </div>
    </div>
  );
};
