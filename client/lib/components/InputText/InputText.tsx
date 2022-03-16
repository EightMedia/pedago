import cx from "classnames";
import { memo } from "react";
import styles from "./InputText.module.css";
import { InputTextType } from "./InputText.types";

export const InputTextComponent = ({
  onChange,
  id,
  error,
  type = "text",
  label,
  placeholder,
  showLabel = false,
}: InputTextType) => {
  return (
    <div className={cx(styles.wrapper)}>
      <label
        htmlFor={id}
        className={cx("label", styles.label, showLabel ? "" : "sr-only")}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        onChange={onChange}
        className={cx(styles.input, styles[error ? "valid" : "invalid"])}
        placeholder={placeholder}
      />
      {error ?? <div className="error">{error}</div>}
    </div>
  );
};

export const InputText = memo(InputTextComponent);
