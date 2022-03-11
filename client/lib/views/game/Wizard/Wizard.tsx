import { memo, useState } from "react";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { WizardSteps, WizardType } from "./Wizard.types";
import { WizardGroup } from "./WizardGroup";
import { WizardInfo } from "./WizardInfo";
import { WizardName } from "./WizardName";
import { WizardRoomCode } from "./WizardRoomCode";

export const WizardComponent = ({
  handleEmit,
  groups,
  initialStep = WizardSteps.RoomCode,
}: WizardType) => {
  const [step, setStep] = useState<WizardSteps>(initialStep);
  return (
    <Page valign="center">
      <Panel>
        {(() => {
          switch (step) {
            case WizardSteps.RoomCode:
              return <WizardRoomCode setStep={setStep} />;
            case WizardSteps.Name:
              return <WizardName setStep={setStep} />;
            case WizardSteps.Group:
              return <WizardGroup groups={groups} setStep={setStep} />;
            case WizardSteps.Info:
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
