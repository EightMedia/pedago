import { ComponentPropsWithoutRef } from "react";

export interface ButtonType extends ComponentPropsWithoutRef<"button"> {
  variation?:
    | "default"
    | "line"
    | "whiteActive"
    | "whiteInactive"
    | "whiteBlocked";
  stretch?: boolean;
}
