import cx from "classnames";
import { createElement, memo } from "react";
import styles from "./Title.module.css";
import { TitleType } from "./Title.types";

const TitleComponent = ({
  children,
  size = "md",
  element = "h2",
  align = "center",
}: TitleType) => {
  return createElement(
    element,
    { className: cx(styles.title, styles[size], styles[align]) },
    typeof children === "object" ? children : <p>{children}</p>
  );
};

export const Title = memo(TitleComponent);
