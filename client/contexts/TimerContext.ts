import { createContext } from "react";

export const TIMER_SECONDS = 10;
export const TimerContext = createContext<number>(0);
