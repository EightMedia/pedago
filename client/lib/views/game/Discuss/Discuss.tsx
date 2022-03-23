import { memo } from "react";
import cx from "classnames";
import styles from "./Discuss.module.css";
import { DiscussType } from "./Discuss.types";

const DiscussComponent = ({}: DiscussType) => {
  return (
    <div className={cx(styles.wrapper)}>
      <h2>Discuss</h2>
    </div>
  );
};

export const Discuss = memo(DiscussComponent);
