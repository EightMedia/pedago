import { ReactNode } from "react";

export type TitleType = {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  element?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: "dark" | "light"
};
