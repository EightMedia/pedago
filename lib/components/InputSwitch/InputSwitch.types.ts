import { ChangeEvent } from "react";

export type InputSwitchType = {
  id: string;
  label: string;
  helpText?: string;
  optionLabels?: [string, string];
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};
