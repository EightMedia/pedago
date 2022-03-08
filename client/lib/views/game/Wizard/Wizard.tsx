import { memo, useState } from "react";
import cx from "classnames";
import styles from "./Wizard.module.css";
import { WizardType } from "./Wizard.types";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { ViewName } from "models";
import { WizardRoomCode } from "./WizardRoomCode";
import { WizardName } from "./WizardName";
import { WizardGroup } from "./WizardGroup";
import { WizardInfo } from "./WizardInfo";

export const WizardComponent = ({
  handleEmit,
  groups,
  initialStep,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep);
  return (
    <Page>
      <Panel>
        {step === 0 && <WizardRoomCode setStep={setStep} />}
        {step === 1 && <WizardName setStep={setStep} />}
        {step === 2 && <WizardGroup setStep={setStep} groups={groups} />}
        {step === 3 && <WizardInfo />}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
