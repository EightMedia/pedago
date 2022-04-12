import cx from "classnames";
import { memo, useEffect, useState } from "react";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import styles from "./Timer.module.css";
import { TimerType } from "./Timer.types";

const TimerComponent = ({ time = 600 }: TimerType) => {
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [counter, setCounter]);
  return (
    <div className={cx(styles.timer)}>
      <Icon icon={IconsEnum.Timer} className={styles.icon} />
      <span className={styles.text}>{counter}</span>
    </div>
  );
};

export const Timer = memo(TimerComponent);
