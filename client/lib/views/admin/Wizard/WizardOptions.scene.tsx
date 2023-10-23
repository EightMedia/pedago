import { Button } from "@components/Button";
import { InputSwitch } from "@components/InputSwitch";
import { InputText } from "@components/InputText";
import { PanelTitle } from "@components/Panel";
import { Text } from "@components/Text";
import { Stack } from "@layouts/Stack";
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOptions = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const { text } = useContext(LanguageContext);
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
      <div className={styles.stepHeader}>
        <Text tone="medium" align="center" weight="bold">
          {text.adminWizard.name.step} 4/4
        </Text>
        <PanelTitle>{text.adminWizard.options.title}</PanelTitle>
      </div>

      <Stack>
        <InputSwitch
          id="timer"
          label={text.adminWizard.options.timerLabel}
          helpText={text.adminWizard.options.timerText}
          checked={data.options?.timer}
          onChange={(e) => updateData(e.target.checked, "options.timer")}
        />
        <InputSwitch
          id="inGroups"
          label={text.adminWizard.options.inGroups}
          helpText={text.adminWizard.options.inGroupsText}
          checked={data.options?.inGroups}
          onChange={(e) => updateData(e.target.checked, "options.inGroups")}
        />
        <InputText
          value={groupName(0)}
          id="group1"
          label={text.adminWizard.options.group1}
          helptext={text.adminWizard.options.group1Help}
          placeholder={text.adminWizard.options.group1}
          showLabel={true}
          onChange={(e) => {
            handleGroupChange(0, e.target.value);
          }}
          condition={Boolean(data.options?.inGroups)}
        />
        <InputText
          value={groupName(1)}
          id="group2"
          label={text.adminWizard.options.group2}
          placeholder={text.adminWizard.options.group2}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(1, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(0) !== "") || false}
        />
        <InputText
          value={groupName(2)}
          id="group3"
          label={text.adminWizard.options.group3}
          placeholder={text.adminWizard.options.group3}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(2, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(1) !== "") || false}
        />
        <InputText
          value={groupName(3)}
          id="group4"
          label={text.adminWizard.options.group4}
          placeholder={text.adminWizard.options.group4}
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(3, e.target.value);
          }}
          condition={(data.options?.inGroups && groupName(2) !== "") || false}
        />
        <Button stretch={true} onClick={handleNextStep}>
          {text.adminWizard.options.next}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.GameType)}
          className={styles.backButton}
        >
          {text.adminWizard.options.back}
        </Button>
      </Stack>
    </>
  );
};
