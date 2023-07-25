import classNames from "classnames";
import { BUTTON_TYPES } from "../../constans/button-const";
import { ButtonProps } from "../../types/button";
import styles from "./button.module.scss";

export const Button = ({
  buttonText,
  onClick,
  type = BUTTON_TYPES.BUTTON,
  src,
  passStyle,
}: ButtonProps) => {
  const buttonStyle = classNames(passStyle, styles.button);
  return (
    <button className={buttonStyle} type={type}>
      {buttonText}
      {src && <img src={src} alt="img" />}
    </button>
  );
};
