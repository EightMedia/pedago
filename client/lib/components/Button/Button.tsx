import cx from "classnames";
import { memo } from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonComponent = ({ children, onClick }: ButtonType) => {
  return (
    <button className={cx("Button", styles.Button)} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
