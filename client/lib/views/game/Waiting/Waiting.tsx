import { memo } from "react";
import cx from "classnames";
import styles from "./Waiting.module.css";
import { WaitingType } from "./Waiting.types";

const WaitingComponent = ({}: WaitingType) => {
  return (
    <div className={cx(styles.wrapper)}>
      <h2>Waiting</h2>
    </div>
  );
};

export const Waiting = memo(WaitingComponent);
