import styles from "./Game.module.css";
import { useEffect, useState } from "react";

export const GameCountdown = ({
  time = 3,
  callback,
}: {
  time?: number;
  callback?: () => void;
}) => {
  const [counter, setCounter] = useState(time);
  useEffect(() => {
    if (!callback) return;
    const interval = setInterval(() => {
      setCounter(counter - 1);
      if (counter === 0) {
        clearInterval(interval);
        callback && callback();
      }
    }, 1000);
  }, [counter, setCounter, callback]);
  return (
    <>
      <span className={styles.countdownNumber}>{counter}</span>
    </>
  );
};
