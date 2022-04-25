import { createContext } from "react";

export const TIMER_SECONDS = 600;
export const TimerContext = createContext<number>(0);
