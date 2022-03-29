import cx from "classnames";
import { createElement, memo } from "react";
import styles from "./Title.module.css";
import { TitleType } from "./Title.types";

const TitleComponent = ({
  children,
  size = "md",
  element = "h2",
}: TitleType) => {
  // render element based on element var
  return createElement(
    element,
    { className: cx(styles.title, styles[size]) },
    children
  );
};

export const Title = memo(TitleComponent);
