export type InputOptionValue = string | number;

export interface InputOption<Value extends InputOptionValue> {
  label: string;
  value: Value;
}

interface InputOptionsPropsBase<Value extends InputOptionValue> {
  label?: string;
  helptext?: string;
  id: string;
  condition?: boolean;
  customStyles?: {
    readonly [key: string]: string;
  };
  options: InputOption<Value>[];
}
interface InputOptionsPropsSingle<Value extends InputOptionValue>
  extends InputOptionsPropsBase<Value> {
  value: Value | undefined;
  multi?: false;
  onChange: (value: Value | undefined) => void;
}

interface InputOptionsPropsMulti<Value extends InputOptionValue>
  extends InputOptionsPropsBase<Value> {
  value: Value[];
  multi: true;
  onChange: (value: Value[]) => void;
}

export type InputOptionsProps<Value extends InputOptionValue> =
  | InputOptionsPropsSingle<Value>
  | InputOptionsPropsMulti<Value>;
