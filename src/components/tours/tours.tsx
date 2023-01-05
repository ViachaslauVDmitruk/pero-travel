import { TOURS } from "../../constans/tours";
import { ToursProps } from "../../types/tours";
import { CardDescription } from "../card-description";
import styles from "./tours.module.scss";

export const Tours = ({
  text,
  title,
  id,
  image,
  costAdult,
  costChild,
  duration,
}: ToursProps) => {
  return (
    <div className={styles.tours}>
      <div className={styles.title}>Наши туры</div>
      {TOURS.map(
        ({ text, title, id, image, costAdult, costChild, duration }) => (
          <CardDescription
            text={text}
            title={title}
            id={id}
            image={image}
            costAdult={costAdult}
            costChild={costChild}
            duration={duration}
          />
        )
      )}
    </div>
  );
};
