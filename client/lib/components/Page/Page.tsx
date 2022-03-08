import React from "react";
import cx from "classnames";
import styles from "./Page.module.css";
import { PageType } from "./Page.types";

export const PageComponent = ({ children }: PageType) => {
  return <div className={cx("Page", styles.Page)}>{children}</div>;
};

export const Page = React.memo(PageComponent);
