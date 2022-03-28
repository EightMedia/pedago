import { memo, useState } from "react";
import { Page } from "../../../components/Page";
import { ResultStep, ResultType } from "./Result.types";
import { ResultLoader } from "./ResultLoader.scene";
import { ResultOverview } from "./ResultOverview.scene";

const ResultComponent = ({
  autoPlay = true,
  data,
  initialStep,
}: ResultType) => {
  const [step, setStep] = useState(initialStep);

  return (
    <Page valign="center">
      {(() => {
        let callback = undefined;
        switch (step) {
          case ResultStep.Loader:
            callback = autoPlay ? () => setStep(ResultStep.Result) : undefined;
            return <ResultLoader callback={callback} />;
          case ResultStep.Result:
            return <ResultOverview data={data} />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const Result = memo(ResultComponent);
