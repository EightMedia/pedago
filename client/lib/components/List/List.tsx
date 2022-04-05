import cx from "classnames";
import { memo } from "react";
import styles from "./List.module.css";
import { ListType } from "./List.types";

export const ListItem = ({
  label,
  value = "",
}: {
  label: string;
  value?: string;
}) => {
  return (
    <div className={styles.listItem}>
      <dt className={styles.dt}>{label}</dt>
      <dd className={styles.dd}>{value}</dd>
    </div>
  );
};

const ListComponent = ({ children, className }: ListType) => {
  return <dl className={cx(styles.list, className)}>{children}</dl>;
};

export const List = memo(ListComponent);
