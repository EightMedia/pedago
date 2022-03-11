import { memo } from "react";
import styles from "./Title.module.css";
import { TitleType } from "./Title.types";

const TitleComponent = ({ children }: TitleType) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export const Title = memo(TitleComponent);
