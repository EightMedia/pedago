import { ReactNode, useEffect, useState } from "react";
import { TimerContext } from "../contexts/TimerContext";

const TimerProvider = ({
  children,
  time,
}: {
  children: ReactNode;
  time: number;
}) => {
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let timerFromLocalStorage: number | null = time;

    if (typeof window !== "undefined") {
      const localTime = localStorage.getItem("timer");
      const locaTimeInt = localTime ? parseInt(localTime, 10) : null;
      timerFromLocalStorage = locaTimeInt ? locaTimeInt : time;
    }

    const interval = setInterval(() => {
      setTimer((timerFromLocalStorage as number) - 1);
      localStorage.setItem("timer", timer.toString());

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
