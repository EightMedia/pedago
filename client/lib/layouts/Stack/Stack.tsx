import cx from "classnames";
import { memo } from "react";
import styles from "./Stack.module.css";
import { StackType } from "./Stack.types";

const StackComponent = ({ children, gap = "2xs", align = "unset" }: StackType) => {
  return (
    <div className={cx(styles.stack, styles["gap-" + gap])} style={{alignItems: align}}>{children}</div>
  );
};

export const Stack = memo(StackComponent);
