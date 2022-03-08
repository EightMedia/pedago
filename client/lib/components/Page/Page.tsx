import React from "react";
import cx from "classnames";
import styles from "../../../styles/test.module.css";
import { PageType } from "./Page.types";

export const PageComponent = ({ children }: PageType) => {
  return <div className={cx("page", styles.page)}>{children}</div>;
};

export const Page = React.memo(PageComponent);
