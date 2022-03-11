import cx from "classnames";
import { memo } from "react";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";
import styles from "./Result.module.css";
import { ResultType } from "./Result.types";

export const ResultComponent = ({}: ResultType) => {
  return (
    <Page>
      <div className={cx("result", styles.result)}>
        <Title>Result</Title>
      </div>
    </Page>
  );
};

export const Result = memo(ResultComponent);
