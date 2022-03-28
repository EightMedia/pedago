import cx from "classnames";
import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

export const PanelTitle = ({ children, space = "lg" }: PanelType) => {
  return (
    <h2 className={cx(styles.panelTitle, styles["space-" + space])}>
      {children}
    </h2>
  );
};
