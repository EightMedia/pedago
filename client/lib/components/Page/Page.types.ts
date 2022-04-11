import { ReactNode } from "react";

// page slot
export type PageSlotType = {
  location: "headerLeft" | "headerMid" | "headerRight" | "footer" | "body";
  children: ReactNode | string;
  className?: string;
};

// page props
export type PageType = {
  children: ReactNode | string;
  background?: 1 | 2 | 3 | 4 | 5 | 6;
};
