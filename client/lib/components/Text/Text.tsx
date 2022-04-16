import cx from "classnames";
import { memo } from "react";
import styles from "./Text.module.css";
import { TextType } from "./Text.types";

const TextComponent = ({
  size = "md",
  weight = "normal",
  tone = "dark",
  align = "left",
  children,
}: TextType) => {
  return (
    <p
      className={cx(
        styles.text,
        styles[tone],
        styles[weight],
        styles[size],
        styles[align]
      )}
      children={children}
    />
  );
};

export const Text = memo(TextComponent);
