import { ReactNode } from "react";

export type PanelType = {
  children: ReactNode;
  width?: "sm" | "md" | "mdlg" | "lg" | "full";
};
