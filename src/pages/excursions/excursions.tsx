import { Footer } from "../../components/fotter";
import { Header } from "../../components/header";
import { TypeTour } from "../../components/type-tour";
import mainImage from "./assets/main-image.jpg";
import styles from "./excursions.module.scss";

export const Excursions = () => {
  return (
    <div className={styles.wrapper}>
      <Header
        src={mainImage}
        title="наши экскурсии"
        mainPage={false}
        excursionsPage={true}
      />
      <main className={styles.main}>
        <TypeTour />
      </main>
      <Footer />
    </div>
  );
};
