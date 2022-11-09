import img01 from "./asstes/1.jpg";
import img02 from "./asstes/2.jpg";
import img03 from "./asstes/3.jpg";
import img04 from "./asstes/4.jpg";
import img05 from "./asstes/5.jpg";
import img06 from "./asstes/6.jpg";
import img07 from "./asstes/7.jpg";
import img08 from "./asstes/8.jpg";

import styles from "./gallery.module.scss";

export const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.wrapper}>
        <div className={styles.galleryTop}>
          <div className={styles.title}>Галерея</div>
          <div className={styles.viewAll}>Смотреть все</div>
        </div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.boxFirst}>
          <div className={styles.topFirst}>
            <img src={img01} alt="img" />
          </div>
          <div className={styles.bottomFirst}>
            <div className={styles.bottomLeft}>
              <img src={img05} alt="img" />
            </div>
            <div className={styles.bottomRight}>
              <div className={styles.topImage}>
                <img src={img06} alt="img" />
              </div>
              <div className={styles.bottomImage}>
                <img src={img07} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxSecond}>
          <img src={img02} alt="img" />
        </div>
        <div className={styles.boxThird}>
          <div className={styles.topThird}>
            <div className={styles.topRigth}>
              <img src={img03} alt="img" />
            </div>
            <div className={styles.topLeft}>
              <img src={img04} alt="img" />
            </div>
          </div>
          <div className={styles.bottomThird}>
            <img src={img08} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
