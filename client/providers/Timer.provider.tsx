import { ReactNode, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

const TimerProvider = ({
  children,
  timeStamp,
}: {
  children: ReactNode;
  timeStamp: number;
}) => {
  const currentTime = Math.floor(new Date().valueOf() / 1000);
  const endTime = timeStamp + 60;
  const initialTimer = endTime - currentTime;
  const [timer, setTimer] = useState<number>(initialTimer);

  useEffect(() => {    
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0 || currentTime > endTime) {
      setTimer(0);
    } else {
      setTimer(endTime - currentTime);
    }
    return () => clearInterval(interval);
  }, [timer, setTimer, endTime, currentTime]);

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
