import { ReactNode } from "react";

export type TitleType = {
  children: ReactNode;
  size?: "md" | "lg";
  element?: "h1" | "h2";
};
