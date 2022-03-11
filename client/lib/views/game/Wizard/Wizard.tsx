import { memo, useState } from "react";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { WizardStep, WizardType } from "./Wizard.types";
import { WizardGroup } from "./WizardGroup";
import { WizardInfo } from "./WizardInfo";
import { WizardName } from "./WizardName";
import { WizardRoomCode } from "./WizardRoomCode";

export const WizardComponent = ({
  handleEmit,
  groups,
  initialStep = WizardStep.RoomCode,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep);
  return (
    <Page valign="center">
      <Panel>
        {(() => {
          switch (step) {
            case WizardStep.RoomCode:
              return <WizardRoomCode setStep={setStep} />;
            case WizardStep.Name:
              return <WizardName setStep={setStep} />;
            case WizardStep.Group:
              return <WizardGroup groups={groups} setStep={setStep} />;
            case WizardStep.Info:
              return <WizardInfo onClick={() => handleEmit(1)} />;
            default:
              return null;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
