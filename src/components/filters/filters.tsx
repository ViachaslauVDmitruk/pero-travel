import styles from "./filters.module.scss";
import { Price } from "./price";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.title}>Фильтры</div>
      <Price />
    </div>
  );
};
