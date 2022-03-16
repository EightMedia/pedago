import { Group } from "models";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { WizardStep } from "./Wizard.types";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: any;
  setStep: (step: WizardStep) => void;
}) => {
  return (
    <>
      <PanelTitle>Kies je groep</PanelTitle>
      <Stack gap="2xs">
        {groups.map((item: Group) => (
          <Button key={item.id} onClick={() => setStep(WizardStep.Info)}>
            {item.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
