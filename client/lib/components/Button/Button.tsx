import cx from "classnames";
import { memo, ReactNode } from "react";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonGroup = ({ children }: { children: ReactNode }) => {
  <div className={styles.buttonGroup}>{children}</div>;
};

const ButtonComponent = ({
  children,
  onClick,
  variation = "default",
  stretch = false,
}: ButtonType) => {
  return (
    <button
      className={cx(
        styles.button,
        styles[variation],
        stretch ? styles.stretch : null
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
