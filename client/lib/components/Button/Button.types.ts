import { ComponentPropsWithoutRef } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
  variation?:
    | "default"
    | "danger"
    | "dangerOutline"
    | "line"
    | "whiteActive"
    | "whiteInactive"
    | "whiteBlocked"
    | "whiteBlockedOutline";
  stretch?: boolean;
  warning?: string;
}
