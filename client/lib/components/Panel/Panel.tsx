import { ReactNode } from "react";
import cx from "classnames";
import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

export const PanelComponent = ({ children }: PanelType) => {
  return <div className={cx("Panel", styles.Panel)}>{children}</div>;
};

export const Panel = memo(PanelComponent);
