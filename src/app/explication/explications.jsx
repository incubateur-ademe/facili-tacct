import styles from "./explication.module.scss";

export const Explications = () => {
  return (
    <div className={styles.card}>
      <p>Bonjour</p>
      <h5>Gestion de l'eau</h5>
      <div className={styles.subcard}>
        <p>
          <b>Atelier </b>
        </p>
        <p>lorem ipsum sed dolor</p>
      </div>
    </div>
  );
};
