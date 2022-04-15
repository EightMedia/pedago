import cx from "classnames";
import { createElement, memo } from "react";
import styles from "./TextTitle.module.css";
import { TextTitleType } from "./TextTitle.types";

const TextTitleComponent = ({ children, element = "h3" }: TextTitleType) => {
  return createElement(
    element,
    { className: cx(styles.title, styles[element]) },
    children
  );
};

export const TextTitle = memo(TextTitleComponent);
