import styles from "./price.module.scss";

export const Price = () => {
  return (
    <div className={styles.itemFilter}>
      <div className={styles.topBlock}>
        <div className={styles.topTitle}>Стоимость</div>
        <div className={styles.buttonList}></div>
      </div>
      <div className={styles.range}>
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
};
