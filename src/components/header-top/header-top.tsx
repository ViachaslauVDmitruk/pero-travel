import { NAV_LINKS } from "../../constans/header-nav-links";
import logo from "./assets/logo.png";

import styles from "./header-top.module.scss";

type NavLinsProps = {
  id?: number;
  link?: string;
};

export const HeaderTop = ({ id, link }: NavLinsProps) => {
  return (
    <div className={styles.headerTop}>
      <div className={styles.logoMain}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.navlinks}>
        {NAV_LINKS.map(({ id, link }) => (
          <div className={styles.link}>{link}</div>
        ))}
      </div>
    </div>
  );
};
