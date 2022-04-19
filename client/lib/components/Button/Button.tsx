import cx from "classnames";
import { memo } from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonComponent = ({
  variation = "default",
  stretch,
  className,
  children,
  ...rest
}: ButtonType) => {
  return (
    <button
      className={cx(
        styles.button,
        styles[variation],
        stretch ? styles.stretch : null,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
