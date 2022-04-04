import { ChangeEvent } from "react";

export type InputTextType = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showLabel?: boolean;
  value?: string;
};
