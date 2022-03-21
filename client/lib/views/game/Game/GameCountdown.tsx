import { useEffect, useState } from "react";
import styles from "./Game.module.css";

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
        callback();
      }
    }, 1000);
    return;
  }, [counter, setCounter, callback]);
  return (
    <>
      <span className={styles.countdownNumber}>{counter}</span>
    </>
  );
};
