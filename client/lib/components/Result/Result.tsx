import { LanguageContext } from "@contexts/LanguageContext";
import { useRouter } from "next/router";
import { memo, useContext, useState } from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { IconsEnum } from "../Icon/Icon";
import { Logo } from "../Logo";
import { Modal } from "../Modal";
import { Page } from "../Page";
import { PageSlot } from "../Page/Page";
import { ResultStep, ResultType } from "./Result.types";
import { ResultInfo } from "./ResultInfo";
import { ResultLoader } from "./ResultLoader.scene";
import { ResultOverview } from "./ResultOverview.scene";

const ResultComponent = ({
  autoPlay = true,
  data,
  initialStep,
  showEmailPanel = true,
}: ResultType) => {
  const [step, setStep] = useState(initialStep);
  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  const router = useRouter();
  const { text } = useContext(LanguageContext);
  const resultsText = text.results;

  const handleExitGame = () => {
    router.push("/");
  };

  return (
    <Page background={4}>
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <PageSlot location="headerRight">
        <Button variation="whiteBlocked" onClick={() => setShowInfoModal(true)}>
          <Icon icon={IconsEnum.Info} />
          <span className="lg-only">Info</span>
        </Button>
      </PageSlot>
      <PageSlot location="body">
        {(() => {
          let callback = undefined;
          switch (step) {
            case ResultStep.Loader:
              callback = autoPlay
                ? () => setStep(ResultStep.Result)
                : undefined;
              return <ResultLoader callback={callback} />;
            case ResultStep.Result:
              return (
                <ResultOverview data={data} showEmailPanel={showEmailPanel} />
              );
            default:
              return null;
          }
        })()}
      </PageSlot>
      {step === ResultStep.Result && (
        <PageSlot location="footer">
          <Button
            variation="whiteBlockedInactive"
            icon="close"
            onClick={handleExitGame}
          >
            {resultsText.exitGame}
          </Button>
        </PageSlot>
      )}
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <ResultInfo onClick={() => setShowInfoModal(false)} />
        </Modal>
      )}
    </Page>
  );
};

export const Result = memo(ResultComponent);
