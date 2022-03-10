import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./Panel.module.css";
import { PanelType } from "./Panel.types";

export const PanelTitle = ({ children }: PanelType) => {
  return <h2 className={styles.PanelTitle}>{children}</h2>;
};
