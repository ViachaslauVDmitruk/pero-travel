import logo from "./assets/logo-color.png";
import fb from "./assets/fb.png";
import insta from "./assets/insta.png";
import vk from "./assets/vk.png";
import mail from "./assets/mail.svg";
import tg from "./assets/tg.svg";
import wapp from "./assets/wapp.svg";

import styles from "./footer.module.scss";
import { NAV_LINKS } from "../../constans/header-nav-links";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="img" />
        </div>
        <div className={styles.navLinks}>
          <ul>
            {NAV_LINKS.map(({ id, text }) => (
              <li key={id}>{text}</li>
            ))}
          </ul>
        </div>
        <div className={styles.messangersItems}>
          <div className={styles.messangersItem}>
            <div className={styles.itemImage}>
              <img src={wapp} alt="img" />
            </div>
            <div className={styles.itemNumber}>+7 964 944 18 74</div>
          </div>
          <div className={styles.messangersItem}>
            <div className={styles.itemImage}>
              <img src={tg} alt="img" />
            </div>
            <div className={styles.itemNumber}>+7 918 919 98 28</div>
          </div>
          <div className={styles.messangersItem}>
            <div className={styles.itemImage}>
              <img src={tg} alt="img" />
            </div>
            <div className={styles.itemNumber}>Телеграм-бот PeroTravel</div>
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.mail}>
            <div className={styles.mailImage}>
              <img src={mail} alt="img" />
            </div>
            <a href="mailto:office@perotravel.ru">office@perotravel.ru</a>
          </div>
          <div className={styles.socialIcons}>
            <div className={styles.icon}>
              <img src={vk} alt="img" />
            </div>
            <div className={styles.icon}>
              <img src={insta} alt="img" />
            </div>
            <div className={styles.icon}>
              <img src={fb} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
