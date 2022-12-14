import { useState } from "react";
import { TitleFilter } from "../title-filter";
import styles from "./number-of-people.module.scss";

export const NumberOfPeople = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.itemFilter}>
      <TitleFilter
        title="Количество человек"
        isActive={isActive}
        setActive={setIsActive}
      />
      {isActive && (
        <div className={styles.range}>
          <input type="text" />
          <input type="text" />
        </div>
      )}
    </div>
  );
};
