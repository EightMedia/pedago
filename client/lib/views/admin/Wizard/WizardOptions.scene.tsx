import React from "react";
import { Button } from "../../../components/Button";
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
    return undefined;
  };

  const [group1, setGroup1] = React.useState<string | undefined>(groupName(0));
  const [group2, setGroup2] = React.useState<string | undefined>(groupName(1));
  const [group3, setGroup3] = React.useState<string | undefined>(groupName(2));
  const [group4, setGroup4] = React.useState<string | undefined>(groupName(3));

  const handleGroups = () => {
    let groups = [];
    if (group1) groups.push({ id: "group1", name: group1 });
    if (group2) groups.push({ id: "group2", name: group2 });
    if (group3) groups.push({ id: "group3", name: group3 });
    if (group4) groups.push({ id: "group4", name: group4 });
    updateData(groups, "groups");
  };

  return (
    <>
      <Center>
        <p>Stap 4/4</p>
        <PanelTitle>Extra spelopties</PanelTitle>
      </Center>
      <Stack>
        <InputText
          value={group1}
          id="group1"
          label="Groep 1"
          placeholder="Groep 1"
          showLabel={false}
          onChange={(e) => {
            setGroup1(e.target.value);
            handleGroups();
          }}
        />
        <InputText
          value={group2}
          id="group2"
          label="Groep 2"
          placeholder="Groep 2"
          showLabel={false}
          onChange={(e) => {
            setGroup2(e.target.value);
            handleGroups();
          }}
          condition={(group1 && group1?.length > 0) || false}
        />
        <InputText
          value={group3}
          id="group3"
          label="Groep 3"
          placeholder="Groep 3"
          showLabel={false}
          onChange={(e) => {
            setGroup3(e.target.value);
            handleGroups();
          }}
          condition={(group2 && group2?.length > 0) || false}
        />
        <InputText
          value={group4}
          id="group4"
          label="Groep 4"
          placeholder="Groep 4"
          showLabel={false}
          onChange={(e) => {
            setGroup4(e.target.value);
            handleGroups();
          }}
          condition={(group3 && group3?.length > 0) || false}
        />
        <Button stretch={true} onClick={() => handleStep(WizardStep.Check)}>
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
