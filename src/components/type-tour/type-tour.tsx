import { EXCURSIONS_PROPS } from "../../constans/excursions";
import { Button } from "../button";
import marker from "./assets/marker.png";
import calendar from "./assets/calendar.png";
import people from "./assets/people.png";

import styles from "./type-tour.module.scss";

export const TypeTour = () => {
  return (
    <div className={styles.typeTour}>
      <div className={styles.container}>
        <div className={styles.typeBlock}>
          <ul className={styles.typeItems}>
            {EXCURSIONS_PROPS.map(({ title, id }) => (
              <li key={id}>
                <div className={styles.typeItem}>{title}</div>
              </li>
            ))}
          </ul>
          <ul className={styles.inputItems}>
            <li className={styles.inputItem}>
              <input
                type="select"
                placeholder="Страна"
                style={{ backgroundImage: `url(${marker})` }}
              />
            </li>
            <li className={styles.inputItem}>
              <input
                type="select"
                placeholder="Дата"
                style={{ backgroundImage: `url(${calendar})` }}
              />
            </li>
            <li className={styles.inputItem}>
              <input
                type="select"
                placeholder="Мест"
                style={{ backgroundImage: `url(${people})` }}
              />
            </li>
            <li className={styles.inputItem}>
              <Button buttonText="Показать" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
