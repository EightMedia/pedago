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
  const [timer, setTimer] = useState<number>((timeStamp + TIMER_SECONDS) - currentTime);
  
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (typeof window !== "undefined") {
      const localTime = localStorage.getItem("timer");
      const localTimeInt = localTime ? parseInt(localTime, 10) : null;
      if (
        localTimeInt !== null &&
        localTimeInt < timeStamp &&
        localTimeInt !== 0 &&
        localTimeInt > 0
      ) {
        setTimer(localTimeInt);
      }

        interval = setInterval(() => {
          setTimer(timer - 1);
          localStorage.setItem("timer", (timer - 1).toString());
          if (timer === 0 || timer < 0) {
            clearInterval(interval);
          }
        }, 1000);
      }
    
    return () => {
      clearInterval(interval);
    };
  }, [timer, timeStamp]);

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
