import cx from "classnames";
import { ChangeEvent } from "react";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import { Text } from "../Text";
import defaultStyles from "./InputOptions.module.css";
import { InputOptionsProps, InputOptionValue } from "./InputOptions.types";

function isChecked<Value extends InputOptionValue>(
  optionValue: Value,
  value: Value | Value[] | undefined
): value is Value {
  if (Array.isArray(value)) {
    return value.includes(optionValue);
  }

  return value === optionValue;
}

export function InputOptions<Value extends InputOptionValue>(
  props: InputOptionsProps<Value>
) {
  const {
    label,
    helptext,
    condition = true,
    id,
    value,
    options,
    customStyles,
  } = props;

  const styles = customStyles ? customStyles : defaultStyles;

  if (condition === false) return null;

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const isNumber = typeof options?.[0]?.value === "number";

    const newValue = (
      isNumber ? parseInt(e.target.value) : e.target.value
    ) as Value;

    const checked = e.target.checked;

    if (props.multi) {
      const { onChange, value } = props;

      onChange(
        checked ? [...value, newValue] : value.filter((v) => v !== newValue)
      );
    } else {
      const { onChange } = props;
      onChange(checked ? newValue : undefined);
    }
  };

  const isMulti = "multi" in props;

  const iconType = isMulti ? "iconMulti" : "iconSingle";

  return (
    <div className={cx(styles.wrapper)}>
      {label && <Text weight="bold">{label}</Text>}
      {helptext && (
        <Text size="sm" tone="light">
          {helptext}
        </Text>
      )}
      <div className={styles.group}>
        {options.map((option) => {
          const checked = isChecked(option.value, value);
          return (
            <label
              className={cx(
                styles.option,
                styles[checked ? "optionChecked" : "optionUnchecked"]
              )}
              key={option.value}
            >
              <input
                name={id}
                value={option.value}
                type={isMulti ? "checkbox" : "radio"}
                className={styles.checkbox}
                onChange={(e) => handleSelect(e)}
                checked={isChecked(option.value, value)}
              />
              <span
                className={cx(
                  styles.iconCheck,
                  styles[iconType],
                  styles[
                    checked ? iconType + "Checked" : iconType + "Unchecked"
                  ]
                )}
              >
                {isMulti && (
                  <Icon
                    icon={IconsEnum.Check}
                    color="var(--color-white)"
                    className={styles.icon}
                  />
                )}
              </span>
              <span className={styles.label}>{option.label}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
