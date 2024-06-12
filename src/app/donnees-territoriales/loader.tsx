import styles from "./donnees.module.scss";

export default function Loader() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
    <div className="w-60 h-80">
      <div className={styles.loader}>
        
      </div>
      </div>
    )
  }