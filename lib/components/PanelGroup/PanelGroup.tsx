import cx from "classnames";
import { memo } from "react";
import styles from "./PanelGroup.module.css";
import { PanelGroupType } from "./PanelGroup.types";

const PanelGroupComponent = ({ children, className }: PanelGroupType) => {
  return <div className={cx(styles.group, className)}>{children}</div>;
};

export const PanelGroup = memo(PanelGroupComponent);
