import { useContext, useState } from "react";
import set from "set-value";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { convertToRoomDto } from "../../../../factories/AdminWizard.factory";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel } from "../../../components/Panel";
import { Title } from "../../../components/Title";
import { WizardStep, WizardType } from "./Wizard.types";
import { WizardCheck } from "./WizardCheck.scene";
import { WizardGameType } from "./WizardGameType.scene";
import { WizardName } from "./WizardName.scene";
import { WizardOptions } from "./WizardOptions.scene";
import { WizardOrganisation } from "./WizardOrganisation.scene";

const WizardComponent = ({
  data = {},
  initialStep,
  handleRegisterGame,
}: WizardType) => {
  const text = useContext(LanguageContext);
  const [step, setStep] = useState<WizardStep>(initialStep);
  const [wizardData, setWizardData] = useState<WizardType["data"]>(data);

  const updateWizardData = (value: unknown, path: string) => {
    const newData: WizardType["data"] = set(
      { ...data, ...wizardData },
      path,
      value
    ) as any;
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
    <Page valign="center">
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <div>
        <Title>{text.adminWizard.check.create}</Title>
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
      </div>
    </Page>
  );
};

export const Wizard = WizardComponent;
