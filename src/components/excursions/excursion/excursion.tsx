import { EXCURSIONS_PROPS } from "../../../constans/excursions";
import styles from "./excursion.module.scss";

type ExcursionProps = {
  title?: string;
  text?: string;
  icon?: string;
  id?: number;
};

export const Excursion = ({ title, text, id, icon }: ExcursionProps) => {
  return (
    <>
      {EXCURSIONS_PROPS.map(({ title, text, icon, id }) => (
        <div className={styles.item} key={id}>
          <div className={styles.image}>
            <img src={icon} alt="img" />
          </div>
          <div className={styles.content}>
            <div className={styles.itemTitle}>{title}</div>
            <div className={styles.itemText}>{text}</div>
          </div>
        </div>
      ))}
    </>
  );
};
