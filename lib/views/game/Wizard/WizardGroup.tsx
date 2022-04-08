import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { Group } from "../../../models";
import { WizardStep } from "./Wizard.types";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: Group[];
  setStep: (step: WizardStep, group: Group) => void;
}) => {
  const text = useContext(LanguageContext).gameWizard.group;

  return (
    <>
      <PanelTitle>{text.title}</PanelTitle>
      <Stack gap="2xs">
        {groups.map((group: Group) => (
          <Button key={group.id} onClick={() => setStep(WizardStep.Info, group)}>
            {group.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
