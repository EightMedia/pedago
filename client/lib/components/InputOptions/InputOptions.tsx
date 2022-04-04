import cx from "classnames";
import { ChangeEvent, memo, useState } from "react";
import styles from "./InputOptions.module.css";
import {
  InputOptionsType,
  OptionsType,
  OptionType,
  OptionValueType,
} from "./InputOptions.types";

const InputOptionsComponent = ({
  label,
  condition = true,
  id,
  data = [],
  options,
  multi = true,
  handleChange,
  enumOptions = false,
}: InputOptionsType) => {
  if (condition === false) return null;

  const convertToInt = (value: string) => {
    if (value === "" || value === "0") return 0;
    return parseInt(value, 10);
  };

  const prepVals = (vals: OptionValueType[]) => {
    return enumOptions ? vals.map((v: any) => convertToInt(v)) : vals;
  };
  const valsToString = (vals: OptionValueType[]) => {
    return vals.map((v: any) => v.toString());
  };

  const [selected, setSelected] = useState(valsToString(data));

  let optionsArr: OptionsType = Array.isArray(options) ? options : [];
  if (!Array.isArray(options)) {
    optionsArr = Object.keys(options).map((key) => ({
      label: options[key],
      value: key,
    }));
  }

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    let value: OptionType["value"] = e.target.value;

    const checked = e.target.checked;
    let newSelection: OptionValueType[];

    if (multi && Array.isArray(selected)) {
      newSelection = checked
        ? [...selected, value]
        : selected.filter((v: any) => v !== value && parseInt(v) !== value);
    } else {
      newSelection = checked ? [value] : [];
    }

    setSelected(valsToString(newSelection));

    handleChange
      ? handleChange(prepVals(newSelection))
      : console.log(
          "No handleChange, so loggin here: ",
          prepVals(newSelection)
        );
  };

  return (
    <div className={cx(styles.wrapper)}>
      {label ?? <p className={styles.groupLabel}></p>}
      <div className={styles.group}>
        {optionsArr?.map((item: OptionType, i: number) => (
          <label className={styles.option} key={i}>
            <input
              name={id}
              value={item.value}
              type={multi ? "checkbox" : "radio"}
              className={styles.checkbox}
              onChange={(e) => handleSelect(e)}
              checked={selected?.includes(item.value)}
            />
            <span className={styles.label}>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const InputOptions = memo(InputOptionsComponent);
