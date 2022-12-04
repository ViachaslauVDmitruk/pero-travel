import { Button } from "../button";
import image from "./assets/main.jpg";

import styles from "./block-request.module.scss";

export const BlockRequest = () => {
  const imageFullScreen: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={styles.blockRequest}>
      <div className={styles.backgroundImage} style={imageFullScreen}>
        {/* <img src={main} alt="img" /> */}
        <div className={styles.boxForm}>
          <div className={styles.wrapperForm}>
            <div className={styles.title}>
              Остались вопросы?
              <br />
              <span>Оставь заявку и мы ответим</span>
            </div>
            <div className={styles.inputItems}>
              <input
                type="text"
                placeholder="Имя"
                className={styles.inputItem}
              />
              <input
                type="text"
                placeholder="Телефон"
                className={styles.inputItem}
              />
              <input
                type="text"
                placeholder="Почта"
                className={styles.inputItem}
              />
            </div>
            <Button buttonText="Оставить заявку" />
          </div>
        </div>
      </div>
    </div>
  );
};
