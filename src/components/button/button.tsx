import { BUTTON_TYPES } from "../../constans/button-const";
import { ButtonProps } from "../../types/button";
import styles from "./button.module.scss";

export const Button = ({
  buttonText,
  onClick,
  type = BUTTON_TYPES.BUTTON,
  src,
}: ButtonProps) => {
  return (
    <button className={styles.button}>
      {buttonText}
      {src && <img src={src} alt="img" />}
    </button>
  );
};
