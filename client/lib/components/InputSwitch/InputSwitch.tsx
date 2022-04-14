import cx from "classnames";
import { memo } from "react";
import { Text } from "../Text";
import styles from "./InputSwitch.module.css";
import { InputSwitchType } from "./InputSwitch.types";

const SwitchIcon = ({ checked }: { checked: boolean }) => {
  if (checked === true) {
    return (
      <svg
        width="56"
        height="32"
        viewBox="0 0 56 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="32" rx="16" fill="#196CFF" />
        <rect x="27" y="4" width="24" height="24" rx="12" fill="white" />
      </svg>
    );
  } else {
    return (
      <svg
        width="56"
        height="32"
        viewBox="0 0 56 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="56" height="32" rx="16" fill="#9B98AC" />
        <rect x="4" y="4" width="24" height="24" rx="12" fill="white" />
      </svg>
    );
  }
};

const InputSwitchComponent = ({
  id,
  label,
  helpText,
  optionLabels,
  onChange,
  checked = false,
}: InputSwitchType) => {
  return (
    <label className={cx(styles.wrapper)}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      <div className={styles.text}>
        <Text size="mdlg" weight="bold">
          {label}
        </Text>
        <Text size="sm" tone="light">
          {helpText}
        </Text>
      </div>
      <div className={styles.icon}>
        <SwitchIcon checked={checked} />
        {optionLabels?.length === 2 && (
          <span className={styles.switchLabel}>
            {checked ? optionLabels[0] : optionLabels[1]}
          </span>
        )}
      </div>
    </label>
  );
};

export const InputSwitch = memo(InputSwitchComponent);
