import cx from "classnames";
import { ReactNode } from "react";
import styles from "./Panel.module.css";

export const PanelTitle = ({
  children,
  space = "lg",
}: {
  children: ReactNode;
  space?: "lg" | "sm";
}) => {
  return (
    <h2 className={cx(styles.panelTitle, styles["space-" + space])}>
      {children}
    </h2>
  );
};
