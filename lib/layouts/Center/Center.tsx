import cx from "classnames";
import { memo } from "react";
import styles from "./Center.module.css";
import { CenterType } from "./Center.types";

const CenterComponent = ({ children, space }: CenterType) => {
  return (
    <div className={cx(styles.center, styles["space-" + space])}>
      {children}
    </div>
  );
};

export const Center = memo(CenterComponent);
