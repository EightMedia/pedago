import { ReactNode, useEffect, useState } from "react";
import { TimerContext, TIMER_SECONDS } from "../contexts/TimerContext";

const TimerProvider = ({
  children,
  timeStamp,
}: {
  children: ReactNode;
  timeStamp: number;
}) => {
  const currentTime = Math.floor(new Date().valueOf() / 1000);
  const endTime = timeStamp + TIMER_SECONDS;
  const initialTimer = endTime - currentTime;
  const [timer, setTimer] = useState<number>(initialTimer);

  useEffect(() => {
    if (timeStamp <= 0) {
      setTimer(() => 0);
    } else {
      setTimer(endTime - currentTime);
    }
  }, [endTime, timeStamp, timer, currentTime]);

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
