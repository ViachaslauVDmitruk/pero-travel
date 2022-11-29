import { socialIcons } from "../../constans/social";
import { Button } from "../button";
import { HeaderTop } from "../header-top";

import mainImage from "./assets/main-image.jpg";
import arrow from "./assets/arrow.png";

import styles from "./header.module.scss";

export const Header = () => {
  const imageFullScreen: React.CSSProperties = {
    backgroundImage: `url(${mainImage})`,
  };

  return (
    <div className={styles.header}>
      <div className={styles.mainScreen} style={imageFullScreen}>
        <div className={styles.container}>
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
    </div>
  );
};
