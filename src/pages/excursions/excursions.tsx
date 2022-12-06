import { Header } from "../../components/header";
import mainImage from "./assets/main-image.jpg";
import styles from "./excursions.module.scss";

export const Excursions = () => {
  return (
    <div className={styles.excursions}>
      <Header
        src={mainImage}
        title="наши экскурсии"
        mainPage={false}
        excursionsPage={true}
      />
    </div>
  );
};
