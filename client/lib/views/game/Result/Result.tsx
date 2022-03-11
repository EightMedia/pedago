import cx from "classnames";
import styles from "./Result.module.css";
import { ResultType } from "./Result.types";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";

export const ResultComponent = ({}: ResultType) => {
  return (
    <Page>
      <div className={cx("Result", styles.Result)}>
        <Title>Result</Title>
      </div>
    </Page>
  );
};

export const Result = memo(ResultComponent);
