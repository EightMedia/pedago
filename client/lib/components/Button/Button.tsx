import cx from "classnames";
import { memo } from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonComponent = ({
  variation = "default",
  stretch,
  className,
  children,
  warning,
  ...rest
}: ButtonType) => {
  return (
    <>
      <button
        tabIndex={1}
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
      <div className={cx(styles.warning)}>{warning}</div>
    </>
  );
};

export const Button = memo(ButtonComponent);
