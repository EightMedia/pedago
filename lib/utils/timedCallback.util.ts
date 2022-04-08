import { useEffect, useState } from "react";

export const TimedCallback = (time: number, callback?: () => void) => {
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
};
