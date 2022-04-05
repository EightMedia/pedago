import { Button } from "../../../components/Button";
import { InputSwitch } from "../../../components/InputSwitch";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOptions = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const groupName = (id: number) => {
    if (data.groups && data.groups[id]) {
      return data.groups[id].name;
    }
    return "";
  };

  const handleGroupChange = (id: number, name: string | undefined) => {
    let groups = data.groups || [];
    if (!name) {
      groups.pop();
    } else {
      groups[id] = { id: id.toString(), name: name };
    }
    updateData(groups, "groups");
  };

  const handleNextStep = () => {
    if (data.options?.inGroups === false) {
      [0, 1, 2, 3].forEach((g) => handleGroupChange(g, undefined));
    }
    handleStep(WizardStep.Check);
  };

  return (
    <>
      <Center>
        <p>Stap 4/4</p>
        <PanelTitle>Extra spelopties</PanelTitle>
      </Center>
      <Stack>
        <InputSwitch
          id="timer"
          label="Timer"
          helpText="Spelrondes krijgen dan een limiet van 10 minuten"
          checked={data.options?.timer}
          onChange={(e) => updateData(e.target.checked, "options.timer")}
        />
        <InputSwitch
          id="inGroups"
          label="Werken in groepen"
          helpText="Spelers spelen zoveel mogelijk met spelers uit andere groepen"
          checked={data.options?.inGroups}
          onChange={(e) => updateData(e.target.checked, "options.inGroups")}
        />
        <InputText
          value={groupName(0)}
          id="group1"
          label="Groep 1"
          placeholder="Groep 1"
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(0, e.target.value);
          }}
          condition={Boolean(data.options?.inGroups)}
        />
        <InputText
          value={groupName(1)}
          id="group2"
          label="Groep 2"
          placeholder="Groep 2"
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(1, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(0) !== "") || false}
        />
        <InputText
          value={groupName(2)}
          id="group3"
          label="Groep 3"
          placeholder="Groep 3"
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(2, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(1) !== "") || false}
        />
        <InputText
          value={groupName(3)}
          id="group4"
          label="Groep 4"
          placeholder="Groep 4"
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(3, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(2) !== "") || false}
        />
        <Button stretch={true} onClick={handleNextStep}>
          Volgende
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.GameType)}
        >
          Terug naar de vorige stap
        </Button>
      </Stack>
    </>
  );
};
