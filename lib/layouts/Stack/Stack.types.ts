import { ReactNode } from "react";

export type StackType = {
  children: ReactNode;
  gap?: "3xs" | "2xs" | "xs" | "sm" | "md";
};
