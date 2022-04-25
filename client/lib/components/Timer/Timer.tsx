import cx from "classnames";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import styles from "./Timer.module.css";
import { TimerType } from "./Timer.types";

export const Timer = ({ time }: TimerType) => {

  const getTime = (sec: number): string => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec - minutes * 60;
    const getDigits = (amount: number, pad: string, length: number): string => {
      return (new Array(length + 1).join(pad) + amount).slice(-length);
    }

    return getDigits(minutes, "0", 2) + ":" + getDigits(seconds, "0", 2);
  };

  return (
    <div className={cx(styles.timer)}>
      <Icon icon={IconsEnum.Timer} className={styles.icon} />
      <span className={styles.text}>{getTime(time)}</span>
    </div>
  );
};
