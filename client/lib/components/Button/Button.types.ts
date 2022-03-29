import { MouseEventHandler } from "react";

export type ButtonType = {
  children: React.ReactNode;
  onClick: MouseEventHandler;
  variation?: "default" | "line" | "whiteActive" | "whiteInactive";
  stretch?: boolean;
};
