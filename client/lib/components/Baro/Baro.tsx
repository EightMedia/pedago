import cx from "classnames";
import { memo } from "react";
import styles from "./Baro.module.css";
import { BaroType } from "./Baro.types";

const BaroComponent = ({ value, max, color, className }: BaroType) => {
  const baroWidth = `${(value / max) * 100}%`;
  const baroStyle = {
    width: baroWidth,
  };
  return (
    <div className={cx(styles.wrapper, className)}>
      <div style={baroStyle} className={styles["color-" + color]} />
    </div>
  );
};

export const Baro = memo(BaroComponent);
