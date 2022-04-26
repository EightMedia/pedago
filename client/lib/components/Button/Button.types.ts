import { ComponentPropsWithoutRef } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
  variation?:
    | "default"
    | "delete"
    | "line"
    | "whiteActive"
    | "whiteInactive"
    | "whiteBlocked"
    | "whiteBlockedOutline";
  stretch?: boolean;
}
