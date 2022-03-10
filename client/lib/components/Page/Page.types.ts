import { ReactNode } from "react";

// page props
export type PageType = {
  children: ReactNode;
  valign?: "top" | "middle";
  background?: 1 | 2 | 3 | 4 | 5 | 6;
};
