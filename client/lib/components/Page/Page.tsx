import React from "react";
import cx from "classnames";
import styles from "./Page.module.css";
import { PageType } from "./Page.types";

export const PageComponent = ({
  children,
  valign = "top",
  background = 1,
}: PageType) => {
  return (
    <div className={cx(styles.page, styles[valign], styles["bg" + background])}>
      <div className="container">{children}</div>
    </div>
  );
};

export const Page = React.memo(PageComponent);
