import { socialIcons } from "../../constans/social";
import { Button } from "../button";
import { HeaderTop } from "../header-top";
import arrow from "./assets/arrow.png";

import styles from "./header.module.scss";

type HeaderProps = {
  src: string;
  title?: string;
  mainPage: boolean;
  excursionsPage?: boolean;
};

export const Header = ({
  src,
  title,
  mainPage,
  excursionsPage,
}: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div
        className={styles.mainScreen}
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className={styles.container}>
          <HeaderTop />
          {mainPage && (
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
          )}
          {mainPage && <Button buttonText="К экскурсиям" src={arrow} />}
          {excursionsPage && (
            <div className={styles.centerBlock}>
              <div className={styles.title}>
                <div className={styles.firstWord}>{title}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
