import cx from "classnames";
import { memo } from "react";
import styles from "./Page.module.css";
import { PageSlotType, PageType } from "./Page.types";

export const PageSlot = ({ children, className, location }: PageSlotType) => (
  <div className={cx(styles[location], className)}>
    {typeof children === "object" ? children : <p>{children}</p>}
  </div>
);

const PageComponent = ({
  children,
  background = 1,
  valign = "top",
}: PageType) => {
  return (
    <div className={cx(styles.page, styles["bg" + background])}>
      <div className={cx(styles.container, styles["v-" + valign])}>
        {typeof children === "object" ? children : <p>{children}</p>}
      </div>
    </div>
  );
};

export const Page = memo(PageComponent);
