import { memo, useEffect, useState } from "react";
import { Logo } from "../Logo";
import { Page } from "../Page";
import { PageSlot } from "../Page/Page";
import { ResultStep, ResultType } from "./Result.types";
import { ResultLoader } from "./ResultLoader.scene";
import { ResultOverview } from "./ResultOverview.scene";

const ResultComponent = ({
  autoPlay = true,
  data,
  initialStep,
}: ResultType) => {
  const [step, setStep] = useState(initialStep);

  useEffect(() => {
    return () => localStorage.removeItem("room");
  }, []);

  return (
    <Page background={4}>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      {(() => {
        let callback = undefined;
        switch (step) {
          case ResultStep.Loader:
            callback = autoPlay ? () => setStep(ResultStep.Result) : undefined;
            return <ResultLoader callback={callback} />;
          case ResultStep.Result:
            return <ResultOverview data={data} showEmailPanel={true} />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const Result = memo(ResultComponent);
