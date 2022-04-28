import cx from "classnames";
import { memo } from "react";
import styles from "./Text.module.css";
import { TextType } from "./Text.types";

const TextComponent = ({
  size = "md",
  weight = "normal",
  tone = "dark",
  align = "left",
  height = "low",
  children,
}: TextType) => {  
  if (typeof children === "object") {
    return (
      <span
        className={cx(
          styles.text,
          styles[tone],
          styles[weight],
          styles[size],
          styles[align],
          styles[height]
        )}
      >
        {children}
      </span>
    );
  }
  return (
    <p
      className={cx(
        styles.text,
        styles[tone],
        styles[weight],
        styles[size],
        styles[align],
        styles[height]
      )}
    >
      {children}
    </p>
  );
};

export const Text = memo(TextComponent);
