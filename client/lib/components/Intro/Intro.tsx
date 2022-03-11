import { memo } from "react";
import styles from "./Intro.module.css";
import { IntroType } from "./Intro.types";

export const IntroComponent = ({ children }: IntroType) => {
  return <h2 className={styles.intro}>{children}</h2>;
};

export const Intro = memo(IntroComponent);
