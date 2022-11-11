import { Button } from "../button";
import main from "./assets/main.jpg";

import styles from "./block-request.module.scss";

export const BlockRequest = () => {
  return (
    <div className={styles.blockRequest}>
      <div className={styles.backgroundImage}>
        <img src={main} alt="img" />
      </div>
      <div className={styles.boxForm}>
        <div className={styles.wrapperForm}>
          <div className={styles.title}>
            Остались вопросы?
            <br />
            <span>Оставь заявку и мы ответим</span>
          </div>
          <div className={styles.inputItems}>
            <div className={styles.inputItem}>Имя</div>
            <div className={styles.inputItem}>Телефон</div>
            <div className={styles.inputItem}>Почта</div>
          </div>
          <Button buttonText="Оставить заявку" />
        </div>
      </div>
    </div>
  );
};
