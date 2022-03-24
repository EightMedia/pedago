import { memo, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { DiscussStep, DiscussType } from "./Discuss.types";
import { DiscussCompare } from "./DiscussCompare.scene";
import { DiscussInfo } from "./DiscussInfo.scene";
import { DiscussIntro } from "./DiscussIntro.scene";
import { DiscussReady } from "./DiscussReady.scene";

const DiscussComponent = ({
  round,
  roundMax,
  initialStep,
  teamMembers,
  handleReady,
  autoPlay = true,
}: DiscussType) => {
  const data = useContext(LanguageContext);
  const [step, setStep] = useState(initialStep);
  console.log(step);

  return (
    <Page valign="center">
      <div>
        {data.game.round} {round} {data.game.of} {roundMax}
      </div>
      {(() => {
        let callback = undefined;
        switch (step) {
          case DiscussStep.Ready:
            callback = autoPlay ? () => setStep(DiscussStep.Intro) : undefined;
            return (
              <DiscussReady
                teamMembers={teamMembers}
                time={3}
                callback={callback}
              />
            );
          case DiscussStep.Intro:
            callback = autoPlay ? () => setStep(DiscussStep.Info) : undefined;
            return <DiscussIntro time={3} callback={callback} />;
          case DiscussStep.Compare:
            return (
              <DiscussCompare teamMembers={[]} handleReady={handleReady} />
            );
          case DiscussStep.Info:
            return (
              <DiscussInfo handleBack={() => setStep(DiscussStep.Compare)} />
            );
          default:
            return <>Fail</>;
        }
      })()}
    </Page>
  );
};

export const Discuss = memo(DiscussComponent);
