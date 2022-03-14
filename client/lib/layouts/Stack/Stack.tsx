import cx from "classnames";
import { memo } from "react";
import styles from "./Stack.module.css";
import { StackType } from "./Stack.types";

export const StackComponent = ({ children, gap = "2xs" }: StackType) => {
  return (
    <div className={cx(styles.stack, styles["gap-" + gap])}>{children}</div>
  );
};

export const Stack = memo(StackComponent);
