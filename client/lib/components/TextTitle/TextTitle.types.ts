import { ReactNode } from "react";

export type TextTitleType = {
  children: ReactNode;
  element?: "h2" | "h3" | "h4" | "h5" | "h6";
};
