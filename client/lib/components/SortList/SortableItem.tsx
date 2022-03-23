import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { Shape } from "../Shape";
import styles from "./SortList.module.css";
import { SortItemType } from "./SortList.types";

export function SortableItem({ id, title }: SortItemType) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: id });

  let tf;

  if (transform) {
    transform["scaleY"] = 1;
    tf = CSS.Transform.toString(transform);
  }

  const style = {
    transform: tf,
    transition,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={styles.item}
    >
      <div className={styles.inner}>
        <Shape category={id} className={styles.icon} />
        <div className={styles.title}>{title}</div>
      </div>
    </button>
  );
}
