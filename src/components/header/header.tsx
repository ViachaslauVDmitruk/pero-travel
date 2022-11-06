import { socialIcons } from "../../constans/social";
import { Button } from "../button";
import { HeaderTop } from "../header-top";

import mainImage from "./assets/main-image.jpg";
import mainLaptope from "./assets/main-laptop.jpg";
import arrow from "./assets/arrow.png";

import styles from "./header.module.scss";
import { useEffect } from "react";

export const Header = () => {
  useEffect(() => {
    let width = window.screen.width;
    console.log("width", width);
  }, []);

  console.log("width", window.screen.width);

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.fullScreen}>
          <img src={mainImage} alt="main" />
        </div>
        <HeaderTop />
        <div className={styles.centerBlock}>
          <div className={styles.title}>
            <div className={styles.firstWord}>Путешествуй</div>
            <div className={styles.secondWord}>вместе с</div>
            <div className={styles.thirdWord}>Pero Travel</div>
          </div>
          <div className={styles.socialIcons}>
            <ul>
              {socialIcons.map(({ id, icon }) => (
                <li key={id}>
                  <img src={icon} alt="icon" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Button buttonText="К экскурсиям" src={arrow} />
      </div>
    </div>
  );
};
