import React from "react";
import cx from "classnames";
import styles from "./Result.module.css";
import { ResultType } from "./Result.types";

export const ResultComponent = ({}: ResultType) => {
  return (
    <div className={cx("Result", styles.Result)}>
      <h2>Result</h2>
    </div>
  );
};

export const Result = React.memo(ResultComponent);
