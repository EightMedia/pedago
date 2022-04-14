import cx from "classnames";
import { Fragment, memo } from "react";
import ReactMarkdown from "react-markdown";
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
    <ReactMarkdown
      className={cx(
        styles.text,
        styles[tone],
        styles[weight],
        styles[size],
        styles[align]
      )}
      components={{
        p: Fragment,
      }}
      children={children}
    />
  );
};

export const Text = memo(TextComponent);
