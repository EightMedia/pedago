import React from "react";
import cx from "classnames";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

export const ButtonComponent = ({ children, onClick }: ButtonType) => {
  return (
    <button className={cx("Button", styles.Button)} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = React.memo(ButtonComponent);
