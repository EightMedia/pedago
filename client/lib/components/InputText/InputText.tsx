import cx from "classnames";
import { memo } from "react";
import { Text } from "../Text";
import styles from "./InputText.module.css";
import { InputTextType } from "./InputText.types";

export const InputTextComponent = ({
  onChange,
  condition = true,
  id,
  error,
  type = "text",
  label,
  helptext,
  placeholder,
  showLabel = false,
  value,
  align = "center",
}: InputTextType) => {
  if (condition === false) return null;
  return (
    <div className={cx(styles.wrapper)}>
      <label
        htmlFor={id}
        className={cx("label", styles.label, showLabel ? "" : "sr-only")}
      >
        <Text size="md" weight="bold">
          {label}
        </Text>
        {helptext && (
          <Text size="sm" tone="light">
            {helptext}
          </Text>
        )}
      </label>
      <input
        tabIndex={1}
        id={id}
        type={type}
        onChange={onChange}
        className={cx(styles.input, styles[!error ? "valid" : "invalid"])}
        style={{ textAlign: align }}
        placeholder={placeholder}
        value={value}
      />
      <div className={cx(styles.error)}>{error}</div>
    </div>
  );
};

export const InputText = memo(InputTextComponent);
