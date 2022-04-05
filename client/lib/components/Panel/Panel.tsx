import cx from "classnames";
import { memo } from "react";
import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

const PanelComponent = ({ children, width = "md" }: PanelType) => {
  return <div className={cx(styles.panel, styles[width])}>{children}</div>;
};

export const Panel = memo(PanelComponent);
