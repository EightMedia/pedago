import cx from "classnames";
import { memo } from "react";
import { Button } from "../Button";
import styles from "./SortList.module.css";
import { SortCardType, SortListType } from "./SortList.types";

const SortListComponent = ({ cards }: SortListType) => {
  return (
    <div className={cx("sortList", styles.sortList)}>
      <div className="sortlist">
        {cards.map((item: SortCardType) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      <Button onClick={() => alert("klaar!")}>Ik ben klaar</Button>
    </div>
  );
};

export const SortList = memo(SortListComponent);
