import styles from "./filters.module.scss";
import { NumberOfPeople } from "./numbe-of-people";
import { Price } from "./price";

export const Filters = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.title}>Фильтры</div>
      <Price />
      <NumberOfPeople />
    </div>
  );
};
