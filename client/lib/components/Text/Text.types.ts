import { ReactNode } from "react";

export type TextType = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "mdlg" | "lg";
  weight?: "normal" | "bold";
  tone?: "light" | "medium" | "dark";
  align?: "left" | "center" | "right";
};
