import { useState } from "react";
import { Places } from "../../../constans/places";
import { TitleFilter } from "../title-filter";
import styles from "./place.module.scss";

export const Place = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.place}>
      <TitleFilter title="Место" isActive={isActive} setActive={setIsActive} />
      {isActive && (
        <div className={styles.inputItems}>
          {Places.map(({ place, id }) => (
            <label id="place">
              <input id="place" type="radio" className={styles.inputItem} />
              {place}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
