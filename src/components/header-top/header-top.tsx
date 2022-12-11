import { NAV_LINKS } from "../../constans/header-nav-links";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

import styles from "./header-top.module.scss";

type NavLinsProps = {
  id?: number;
  link?: string;
  text?: string;
};

export const HeaderTop = ({ id, link, text }: NavLinsProps) => {
  return (
    <div className={styles.headerTop}>
      <Link to="/" className={styles.logoMain}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.navlinks}>
        {NAV_LINKS.map(({ id, link, text }) => (
          <li className={styles.link} key={id}>
            <Link to={`/${link}`}>{text}</Link>
          </li>
        ))}
      </div>
    </div>
  );
};
