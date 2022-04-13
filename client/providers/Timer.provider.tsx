import { ReactNode, useEffect, useState } from "react";
import { TimerContext, TIMER_SECONDS } from "../contexts/TimerContext";

const TimerProvider = ({
  children,
  timeStamp,
}: {
  children: ReactNode;
  timeStamp: number;
}) => {
  const currentTime = Math.floor(Date.now() / 1000);
  const endTime = timeStamp + TIMER_SECONDS;
  
  const [timer, setTimer] = useState<number>(endTime - currentTime);
  console.log(timeStamp, currentTime, timer, TIMER_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
      if (timer <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, timeStamp]);

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
