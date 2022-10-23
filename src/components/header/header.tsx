import { HeaderTop } from "../header-top";
import mainImage from "./assets/main-image.jpg";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.fullScreen}>
        <img src={mainImage} alt="main" />
      </div>
      <HeaderTop />
    </div>
  );
};
