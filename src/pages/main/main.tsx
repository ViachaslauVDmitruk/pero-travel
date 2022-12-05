import { AboutUs } from "../../components/about-us";
import { BlockRequest } from "../../components/block-request";
import { Excursions } from "../../components/excursions";
import { Footer } from "../../components/fotter";
import { Gallery } from "../../components/gallery";
import { Header } from "../../components/header";
import { SliderExcursions } from "../../components/slider-excursions";

import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <SliderExcursions />
        <AboutUs />
        <Excursions />
        <Gallery />
        <BlockRequest />
      </main>
      <Footer />
    </div>
  );
};
