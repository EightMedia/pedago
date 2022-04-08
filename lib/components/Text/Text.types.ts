import { ReactNode } from "react";

export type TextType = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg"; // 12,16,18
  weight?: "normal" | "bold";
  tone?: "light" | "dark";
};
