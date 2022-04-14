import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputSwitch } from "../../../components/InputSwitch";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOptions = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const text = useContext(LanguageContext).adminWizard.options;
  const groupName = (id: number) => {
    if (data.groups && data.groups[id]) {
      return data.groups[id].name;
    }
    return "";
  };

  const handleGroupChange = (id: number, name: string) => {
    const groups = data.groups || [];
    if (!name) {
      groups.splice(id, 1);
    } else {
      groups[id] = { id: id.toString(), name: name };
    }
    updateData(groups, "groups");
  };

  const handleNextStep = () => {
    if (!data.options?.inGroups) {
      updateData([{ id: 0, name: data.info?.organisation?.name }], "groups");
    }
    handleStep(WizardStep.Check);
  };

  return (
    <>
      <Center>
        <p>{text.step} 4/4</p>
        <PanelTitle>{text.title}</PanelTitle>
      </Center>
      <Stack>
        <InputSwitch
          id="timer"
          label={text.timerLabel}
          helpText={text.timerText}
          checked={data.options?.timer}
          onChange={(e) => updateData(e.target.checked, "options.timer")}
        />
        <InputSwitch
          id="inGroups"
          label={text.inGroups}
          helpText={text.inGroupsText}
          checked={data.options?.inGroups}
          onChange={(e) => updateData(e.target.checked, "options.inGroups")}
        />
        <InputText
          value={groupName(0)}
          id="group1"
          label={text.group1}
          placeholder={text.group1}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(0, e.target.value);
          }}
          condition={Boolean(data.options?.inGroups)}
        />
        <InputText
          value={groupName(1)}
          id="group2"
          label={text.group2}
          placeholder={text.group2}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(1, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(0) !== "") || false}
        />
        <InputText
          value={groupName(2)}
          id="group3"
          label={text.group3}
          placeholder={text.group3}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(2, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(1) !== "") || false}
        />
        <InputText
          value={groupName(3)}
          id="group4"
          label={text.group4}
          placeholder={text.group4}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(3, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(2) !== "") || false}
        />
        <Button stretch={true} onClick={handleNextStep}>
          {text.next}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.GameType)}
          className={styles.backButton}
        >
          {text.back}
        </Button>
      </Stack>
    </>
  );
};
