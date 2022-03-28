import { memo } from "react";
import { Shape } from "../Shape";
import styles from "./Loader.module.css";
import { LoaderType } from "./Loader.types";

const LoaderComponent = ({}: LoaderType) => {
  return (
    <div className={styles.loader}>
      <Shape category={0} className={styles.i0} />
      <Shape category={1} className={styles.i1} />
      <Shape category={2} className={styles.i2} />
      <Shape category={3} className={styles.i3} />
      <Shape category={4} className={styles.i4} />
      <Shape category={5} className={styles.i5} />
    </div>
  );
};

export const Loader = memo(LoaderComponent);
