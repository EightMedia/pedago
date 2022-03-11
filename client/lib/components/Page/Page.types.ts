import { ReactNode } from "react";

// page props
export type PageType = {
  children: ReactNode;
  valign?: "top" | "center";
  halign?: "left" | "center" | "stretch";
  background?: 1 | 2 | 3 | 4 | 5 | 6;
};
