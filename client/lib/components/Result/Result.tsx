import { removeCookies } from "cookies-next";
import { memo, useEffect, useState } from "react";
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

  useEffect(() => {
    return () => removeCookies("room");
  }, []);

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
      {showInfoModal && (
        <Modal handleClose={() => setShowInfoModal(false)}>
          <ResultInfo onClick={() => setShowInfoModal(false)} />
        </Modal>
      )}
    </Page>
  );
};

export const Result = memo(ResultComponent);
