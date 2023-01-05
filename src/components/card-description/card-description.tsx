import favoritesActive from "./assets/favorites-active.png";
import favoritesDisable from "./assets/favorites-disable.png";
import iconClock from "./assets/clock.png";
import iconCost from "./assets/cost.png";

import styles from "./card-description.module.scss";
import { Button } from "../button";
import { ToursProps } from "../../types/tours";

export const CardDescription = ({
  title,
  text,
  id,
  costAdult,
  costChild,
  duration,
  image,
}: ToursProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBlock}>
        <img src={image} alt="img" />
      </div>
      <div className={styles.content}>
        <div className={styles.typeTour}>Автобусный тур</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.costDuration}>
          <div className={styles.costItems}>
            <div className={styles.cost}>
              <div className={styles.image}>
                <img src={iconCost} alt="img" />
              </div>
              <div className={styles.text}>{costAdult} ₽</div>
            </div>
            <div className={styles.costType}>Взрослый</div>
          </div>
          <div className={styles.costItems}>
            <div className={styles.cost}>
              <div className={styles.image}>
                <img src={iconCost} alt="img" />
              </div>
              <div className={styles.text}>{costChild} ₽</div>
            </div>
            <div className={styles.costType}>Детский</div>
          </div>
          <div className={styles.duration}>
            <div className={styles.image}>
              <img src={iconClock} alt="img" />
            </div>
            <div className={styles.text}>{duration}</div>
          </div>
        </div>
        <div className={styles.textContent}>{text}</div>
        <div className={styles.buttons}>
          <Button buttonText="Подробнее" />
          <div className={styles.like}>
            <img src={favoritesDisable} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
