import { memo } from "react";
import { Page } from "../../../components/Page";
import { ResultType } from "./Result.types";

export const ResultComponent = ({}: ResultType) => {
  return (
    <Page>
      <h2>Result</h2>
    </Page>
  );
};

export const Result = memo(ResultComponent);
