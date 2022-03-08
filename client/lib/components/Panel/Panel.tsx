import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

export const PanelTitle = ({ children }: { children: ReactNode }) => (
  <h2 className={styles.PanelTitle}>{children}</h2>
);

export const PanelComponent = ({ children }: PanelType) => {
  return <div className={cx("Panel", styles.Panel)}>{children}</div>;
};

export const Panel = React.memo(PanelComponent);
