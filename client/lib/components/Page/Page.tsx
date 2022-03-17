import cx from "classnames";
import { memo } from "react";
import styles from "./Page.module.css";
import { PageType } from "./Page.types";

const PageComponent = ({
  children,
  valign = "top",
  halign = "stretch",
  background = 1,
}: PageType) => {
  return (
    <div
      className={cx(
        styles.page,
        styles["v-" + valign],
        styles["h-" + halign],
        styles["bg" + background]
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
};

export const Page = memo(PageComponent);