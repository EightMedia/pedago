import cx from "classnames";
import { ChangeEvent, memo, useState } from "react";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import { Text } from "../Text";
import defaultStyles from "./InputOptions.module.css";
import {
  InputOptionsType,
  OptionsType,
  OptionType,
  OptionValueType,
} from "./InputOptions.types";

const convertToInt = (value: string) => {
  if (value === "" || value === "0") return 0;
  return parseInt(value, 10);
};

const prepVals = (vals: OptionValueType[], enumOptions: boolean) => {
  if (!Array.isArray(vals)) return [];
  return enumOptions ? vals.map((v: any) => convertToInt(v)) : vals;
};
const valsToString = (vals: OptionValueType[]) => {
  if (!Array.isArray(vals)) return [];
  return vals.map((v: any) => v.toString());
};

const InputOptionsComponent = ({
  label,
  helptext,
  condition = true,
  id,
  value = [],
  options,
  multi = true,
  handleChange,
  enumOptions = false,
  customStyles,
}: InputOptionsType) => {
  const [selected, setSelected] = useState(valsToString(value));
  const styles = customStyles ? customStyles : defaultStyles;

  if (condition === false) return null;

  let optionsArr: OptionsType = Array.isArray(options) ? options : [];
  if (!Array.isArray(options)) {
    optionsArr = Object.keys(options).map((key) => ({
      label: options[key],
      value: key,
    }));
  }

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const value: OptionType["value"] = e.target.value;

    const checked = e.target.checked;
    let newSelection: OptionValueType[];

    if (multi && Array.isArray(selected)) {
      newSelection = checked
        ? [...selected, value]
        : selected.filter((v: any) => v !== value);
    } else {
      newSelection = checked ? [value] : [];
    }

    setSelected(valsToString(newSelection));

    handleChange
      ? handleChange(prepVals(newSelection, enumOptions))
      : console.log(
          "No handleChange, so loggin here: ",
          prepVals(newSelection, enumOptions)
        );
  };

  const iconType = multi ? "iconMulti" : "iconSingle";

  return (
    <div className={cx(styles.wrapper)}>
      {label && <Text weight="bold">{label}</Text>}
      {helptext && (
        <Text size="sm" tone="light">
          {helptext}
        </Text>
      )}
      <div className={styles.group}>
        {optionsArr?.map((item: OptionType, i: number) => (
          <label
            className={cx(
              styles.option,
              styles[
                selected?.includes(item.value)
                  ? "optionChecked"
                  : "optionUnchecked"
              ]
            )}
            key={i}
          >
            <input
              name={id}
              value={item.value}
              type={multi ? "checkbox" : "radio"}
              className={styles.checkbox}
              onChange={(e) => handleSelect(e)}
              checked={selected?.includes(item.value)}
            />
            <span
              className={cx(
                styles.iconCheck,
                styles[iconType],
                styles[
                  selected?.includes(item.value)
                    ? iconType + "Checked"
                    : iconType + "Unchecked"
                ]
              )}
            >
              {multi && (
                <Icon
                  icon={IconsEnum.Check}
                  color="var(--color-white)"
                  className={styles.icon}
                />
              )}
            </span>
            <span className={styles.label}>{item.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const InputOptions = memo(InputOptionsComponent);
