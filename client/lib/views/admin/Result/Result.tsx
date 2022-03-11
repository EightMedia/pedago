import cx from "classnames";
import styles from "./Result.module.css";
import { ResultType } from "./Result.types";
import { Page } from "../../../components/Page";

export const ResultComponent = ({}: ResultType) => {
  return (
    <Page>
      <h2>Result</h2>
    </Page>
  );
};

export const Result = memo(ResultComponent);
