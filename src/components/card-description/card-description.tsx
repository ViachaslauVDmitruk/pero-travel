import favoritesActive from "./assets/favorites-active.png";
import favoritesDisable from "./assets/favorites-disable.png";
import iconClock from "./assets/clock.png";
import iconCost from "./assets/cost.png";

import styles from "./card-description.module.scss";
import { Button } from "../button";
import { ToursProps } from "../../types/tours";
import { TOURS } from "../../constans/tours";
import { useState } from "react";
import { ToursPagePagination } from "../tours-pagination";

export const CardDescription = ({
  title,
  text,
  id,
  costAdult,
  costChild,
  duration,
  image,
}: ToursProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toursPerPage] = useState<number>(3);

  const lastTourIndex = currentPage * toursPerPage;
  const firstTourtIndex = lastTourIndex - toursPerPage;
  const currentTour = TOURS.slice(firstTourtIndex, lastTourIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <ul>
      {currentTour.map(
        ({ text, title, id, image, costAdult, costChild, duration }) => (
          <div className={styles.card} key={id}>
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
        )
      )}
      <ToursPagePagination
        toursPerPage={toursPerPage}
        totalTours={TOURS.length}
        paginate={paginate}
      />
    </ul>
  );
};
