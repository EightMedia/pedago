import cx from "classnames";
import { memo } from "react";
import styles from "./GlassPanel.module.css";
import { GlassPanelType } from "./GlassPanel.types";

const GlassPanelComponent = ({ children }: GlassPanelType) => {
  return <div className={cx(styles.glass)}>{children}</div>;
};

export const GlassPanel = memo(GlassPanelComponent);
