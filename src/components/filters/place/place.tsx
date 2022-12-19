import { useState } from "react";
import { TitleFilter } from "../title-filter";
import styles from "./place.module.scss";

export const Place = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div className={styles.plase}>
      <TitleFilter title="Место" isActive={isActive} setActive={setIsActive} />
    </div>
  );
};
