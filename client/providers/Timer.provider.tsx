import { ReactNode, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

const TimerProvider = ({
  children,
  time,
}: {
  children: ReactNode;
  time: number;
}) => {
  const [timer, setTimer] = useState<number>(time);

  useEffect(() => {
    if (typeof window !== "undefined") {        
      const localTime = localStorage.getItem("timer");
      const localTimeInt = localTime ? parseInt(localTime, 10) : null;
      if (localTimeInt !== null && localTimeInt < time) {
        setTimer(localTimeInt);
      }
    }

    const interval = setInterval(() => {
      setTimer(timer - 1);
        localStorage.setItem("timer", (timer - 1).toString());
      if (timer === 0) {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => {
      clearInterval(interval);
      localStorage.removeItem("timer");
    };
  }, [timer, setTimer, time]);

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

export default TimerProvider;
