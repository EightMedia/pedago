import { Group } from "models";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { WizardStep } from "./Wizard.types";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: Group[];
  setStep: (step: WizardStep, group: Group) => void;
}) => {
  return (
    <>
      <PanelTitle>Kies je groep</PanelTitle>
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
