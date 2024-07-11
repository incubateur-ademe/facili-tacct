import styles from "./donnees.module.scss";

export function Loader() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center w-60 h-80">
      <div className={styles.loader}></div>
    </div>
  );
}
