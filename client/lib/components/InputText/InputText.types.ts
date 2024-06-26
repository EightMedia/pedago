import { ChangeEvent } from "react";

export type InputTextType = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  success?: boolean;
  error?: string;
  showLabel?: boolean;
  value?: string;
  condition?: boolean;
  helptext?: string;
  align?: "left" | "center";
};
