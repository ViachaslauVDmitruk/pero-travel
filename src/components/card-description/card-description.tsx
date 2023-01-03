import image01 from "./assets/image-1.jpg";
import image02 from "./assets/image-2.jpg";
import image03 from "./assets/image-3.jpg";
import image04 from "./assets/image-4.jpg";
import image05 from "./assets/image-5.jpg";
import favoritesActive from "./assets/favorites-active.png";
import favoritesDisable from "./assets/favorites-disable.png";
import iconClock from "./assets/clock.png";
import iconCost from "./assets/cost.png";

import styles from "./card-description.module.scss";
import { Button } from "../button";

export const CardDescription = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBlock}>
        <img src={image01} alt="img" />
      </div>
      <div className={styles.content}>
        <div className={styles.typeTour}>Автобусный тур</div>
        <div className={styles.title}>Золотое кольцо Абхазии (из Адлера)</div>
        <div className={styles.costDuration}>
          <div className={styles.costItems}>
            <div className={styles.cost}>
              <div className={styles.image}>
                <img src={iconCost} alt="img" />
              </div>
              <div className={styles.text}>1200 ₽</div>
            </div>
            <div className={styles.costType}>Взрослый</div>
          </div>
          <div className={styles.costItems}>
            <div className={styles.cost}>
              <div className={styles.image}>
                <img src={iconCost} alt="img" />
              </div>
              <div className={styles.text}>1000 ₽</div>
            </div>
            <div className={styles.costType}>Детский</div>
          </div>
          <div className={styles.duration}>
            <div className={styles.image}>
              <img src={iconClock} alt="img" />
            </div>
            <div className={styles.text}>2,5 часа</div>
          </div>
        </div>
        <div className={styles.textContent}>
          Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер
          (20 мест). По маршруту вас будет сопровождать профессиональный гид.
          Посадка на экскурсию осуществляется с вашего отеля или ближайшей
          автобусной остановки. Пересечение границы без пересадок...
        </div>
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
