import cx from "classnames";
import { memo } from "react";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import styles from "./Button.module.css";
import { ButtonType } from "./Button.types";

const ButtonComponent = ({
  variation = "default",
  icon,
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
        {icon === "close" && <Icon icon={IconsEnum.Close} size={"xs"} />}
        {children}
      </button>
      {warning && <div className={cx(styles.warning)}>{warning}</div>}
    </>
  );
};

export const Button = memo(ButtonComponent);
