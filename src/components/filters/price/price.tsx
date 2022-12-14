import { useState } from "react";
import { TitleFilter } from "../title-filter/title-filter";
import styles from "./price.module.scss";

export const Price = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.itemFilter}>
      <TitleFilter
        title="Стоимость"
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
