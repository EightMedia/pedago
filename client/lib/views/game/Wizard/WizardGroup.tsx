import { Group } from "models";
import { Button } from "../../../components/Button";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

export const WizardGroup = ({
  groups,
  setStep,
}: {
  groups: any;
  setStep: (step: WizardSteps) => void;
}) => {
  return (
    <>
      <PanelTitle>Kies je groep</PanelTitle>
      <Stack gap="2xs">
        {groups.map((item: Group) => (
          <Button key={item.id} onClick={() => setStep(WizardSteps.Info)}>
            {item.name}
          </Button>
        ))}
      </Stack>
    </>
  );
};
