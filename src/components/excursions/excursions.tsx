import { Button } from "../button";
import { Excursion } from "./excursion/excursion";
import arrow from "../header/assets/arrow.png";

import styles from "./excursions.module.scss";

export const Excursions = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <div className={styles.title}>Виды экскурсий</div>
        <div className={styles.items}>
          <Excursion />
        </div>
        <div className={styles.bottomText}>
          Выбирайте на нашем сайте экскурсию, которая подходит именно вам и
          записывайтесь онлайн без очередей, просто и быстро!
        </div>
        <div className={styles.button}>
          <Button buttonText="К экскурсиям" src={arrow} />
        </div>
      </div>
    </div>
  );
};
