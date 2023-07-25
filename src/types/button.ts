import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  buttonText?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  classButton?: string;
  classText?: string;
  classImg?: string;
  src?: string;
  loading?: boolean;
  passStyle?: string;
};
