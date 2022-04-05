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
    return "";
  };

  const handleGroupChange = (id: number, name: string) => {
    let groups = data.groups || [];
    if (name === "") {
      delete groups[id];
    } else {
      groups[id] = { id: "group" + (id + 1), name: name };
    }
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
          value={groupName(0)}
          id="group1"
          label="Groep 1"
          placeholder="Groep 1"
          showLabel={false}
          onChange={(e) => {
            handleGroupChange(0, e.target.value);
          }}
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
          condition={groupName(0) !== "" || false}
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
          condition={groupName(1) !== "" || false}
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
          condition={groupName(2) !== "" || false}
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
