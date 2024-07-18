import styles from "./components.module.scss";

export function Loader() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex flex-col justify-center" style={{height: "80dvh"}}>
      <div className={styles.loader}></div>
    </div>
  );
}
