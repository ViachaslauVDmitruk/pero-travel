import { CardDescription } from "../card-description";
import styles from "./tours.module.scss";

export const Tours = () => {
  return (
    <div className={styles.tours}>
      <div className={styles.title}>Наши туры</div>
      <CardDescription />
    </div>
  );
};
