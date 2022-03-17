import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

export const PanelTitle = ({ children }: PanelType) => {
  return <h2 className={styles.panelTitle}>{children}</h2>;
};
