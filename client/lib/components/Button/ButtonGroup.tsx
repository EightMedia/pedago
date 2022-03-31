import cx from "classnames";
import { ReactNode } from "react";
import styles from "./Button.module.css";

export const ButtonGroup = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={cx(styles.buttonGroup, className)}>{children}</div>;
};
