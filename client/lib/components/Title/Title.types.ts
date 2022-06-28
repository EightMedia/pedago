import { ReactNode } from "react";

export type TitleType = {
  children: ReactNode;
  size?: "sm" | "sm-md" | "md" | "lg";
  element?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: "dark" | "light"
};
