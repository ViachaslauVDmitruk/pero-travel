import { AboutUs } from "../../components/about-us";
import { Excursions } from "../../components/excursions";
import { Footer } from "../../components/fotter";
import { Gallery } from "../../components/gallery";
import { Header } from "../../components/header";
import { SliderExcursions } from "../../components/slider-excursions";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.page}> */}
      <Header />
      <main className={styles.main}>
        {/* <SliderExcursions /> */}
        {/* <AboutUs /> */}
        {/* <Excursions /> */}
        {/* <Gallery /> */}
      </main>
      <Footer />
      {/* </div> */}
    </div>
  );
};
