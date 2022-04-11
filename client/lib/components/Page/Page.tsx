import cx from "classnames";
import { isValidElement, memo } from "react";
import styles from "./Page.module.css";
import { PageSlotType, PageType } from "./Page.types";

export const PageSlot = ({ children, className, location }: PageSlotType) => (
  <div className={cx(styles[location], className)}>
    {isValidElement(children) ? children : <p>{children}</p>}
  </div>
);

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
