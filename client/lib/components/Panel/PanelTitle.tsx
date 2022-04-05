import cx from "classnames";
import { ReactNode } from "react";
import styles from "./Panel.module.css";

export interface PanelTitleType {
  children: ReactNode;
  space?: "lg" | "sm";
  align?: "left" | "center";
}

export const PanelTitle = ({
  children,
  space = "lg",
  align = "center",
}: PanelTitleType) => {
  return (
    <h2
      className={cx(styles.panelTitle, styles["space-" + space], styles[align])}
    >
      {children}
    </h2>
  );
};
