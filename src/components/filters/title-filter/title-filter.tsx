import showList from "./assets/show-list.png";
import hiddenList from "./assets/hidden-list.png";

import styles from "./title-filter.module.scss";
import { Dispatch, SetStateAction } from "react";

type TitleFilterProps = {
  title?: string;
  isActive?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

export const TitleFilter = ({
  title,
  isActive,
  setActive,
}: TitleFilterProps) => {
  return (
    <div className={styles.blockFlex}>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttonList} onClick={() => setActive(!isActive)}>
        <img src={isActive ? hiddenList : showList} alt="img" />
      </div>
    </div>
  );
};
