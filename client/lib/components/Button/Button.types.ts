import { ComponentPropsWithoutRef } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
  variation?:
    | "default"
    | "danger"
    | "dangerOutline"
    | "line"
    | "whiteActive"
    | "whiteInactive"
    | "whiteBlockedInactive"
    | "whiteBlocked"
    | "whiteBlockedOutline";
  icon?: "close";
  stretch?: boolean;
  warning?: string;
}
