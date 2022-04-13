export type OptionValueType = string | number;

export type OptionType = {
  label: string;
  value: OptionValueType;
};

export type OptionsType = { [key: string]: string } | OptionType[];

export type InputOptionsType = {
  value?: OptionValueType[];
  label?: string;
  helptext?: string;
  multi?: boolean;
  options: OptionsType;
  handleChange?: any;
  id: string;
  condition?: boolean;
  enumOptions?: boolean;
};
