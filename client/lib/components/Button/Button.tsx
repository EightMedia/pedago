import cx from "classnames";
import { memo } from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonComponent = ({
  children,
  onClick,
  variation = "default",
}: ButtonType) => {
  return (
    <button className={cx(styles.button, styles[variation])} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
