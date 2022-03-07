import React from "react";
import "./Button.css";
import cx from "classnames";
import { buttonType } from "./Button.types";

export const ButtonComponent = ({
  className,
  children,
  href,
  variation = "primary",
}: buttonType) => {
  return (
    <a href={href} className={cx("button", variation, className)}>
      {children}
    </a>
  );
};

export const Button = React.memo(ButtonComponent);
