import { useEffect, useState } from "react";
import set from "set-value";
import { convertToRoomDto } from "../../../../factories/AdminWizard.factory";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { Title } from "../../../components/Title";
import { WizardStep, WizardType } from "./Wizard.types";
import { WizardCheck } from "./WizardCheck.scene";
import { WizardGameType } from "./WizardGameType.scene";
import { WizardName } from "./WizardName.scene";
import { WizardOptions } from "./WizardOptions.scene";
import { WizardOrganisation } from "./WizardOrganisation.scene";

const WizardComponent = ({
  initialStep,
  data = {},
  handleRegisterGame,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep as WizardStep);
  const [wizardData, setWizardData] = useState<WizardType["data"]>(data);

  useEffect(() => {
    setStep(initialStep as WizardStep);
    return () => {};
  }, [initialStep]);

  const updateWizardData = (value: any, path: string) => {
    const newData: WizardType["data"] = set({ ...data, ...wizardData }, path, value) as any;
    setWizardData(newData);
  };

  const stepProps = {
    data: wizardData,
    updateData: updateWizardData,
    handleStep: setStep,
  };

  const handleCreateGame = () => {
    handleRegisterGame(convertToRoomDto(wizardData));
  };

  return (
    <Page>
      <Title>Spel aanmaken</Title>
      <Panel>
        {(() => {
          switch (step) {
            case WizardStep.Name:
              return <WizardName {...stepProps} />;
            case WizardStep.Organisation:
              return <WizardOrganisation {...stepProps} />;
            case WizardStep.GameType:
              return <WizardGameType {...stepProps} />;
            case WizardStep.Options:
              return <WizardOptions {...stepProps} />;
            case WizardStep.Check:
              return (
                <WizardCheck
                  data={wizardData}
                  handleStep={setStep}
                  handleCreateGame={handleCreateGame}
                />
              );
            default:
              return <>Wizard Fail</>;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = WizardComponent;
