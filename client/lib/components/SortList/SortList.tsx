import React from "react";
import cx from "classnames";
import styles from "./SortList.module.css";
import { SortCardType, SortListType } from "./SortList.types";
import { Button } from "../Button";

export const SortListComponent = ({ cards }: SortListType) => {
  return (
    <div className={cx("SortList", styles.SortList)}>
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

export const SortList = React.memo(SortListComponent);
