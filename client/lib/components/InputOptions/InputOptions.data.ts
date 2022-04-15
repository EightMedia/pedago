import { InputOptionsProps, InputOptionValue } from "./InputOptions.types";

export const inputOptionsDataSingle: InputOptionsProps<InputOptionValue> = {
  label: "A list of options",
  helptext: "Helptext for the input to help the user",
  id: "multi",
  value: undefined,
  options: new Array(4)
    .fill("")
    .map((_, i) => ({ label: `Option-${i + 1}`, value: i + 1 })),
  onChange: () => null,
};

export const inputOptionsDataMulti: InputOptionsProps<InputOptionValue> = {
  label: "A list of options",
  helptext: "Helptext for the input to help the user",
  id: "multi",
  multi: true,
  value: [],
  options: new Array(4)
    .fill("")
    .map((_, i) => ({ label: `Option-${i + 1}`, value: i + 1 })),
  onChange: () => null,
};
