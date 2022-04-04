import {memo} from "react";
import cx from "classnames";
import styles from "./InputOptions.module.css";
import { InputOptionsType } from "./InputOptions.types";

const InputOptionsComponent = ({}: InputOptionsType) => {
  return (
    <div className={cx(styles.wrapper)}>
      <h2>InputOptions</h2>
    </div>
  );
};

export const InputOptions = memo(InputOptionsComponent);
