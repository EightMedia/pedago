import React from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOrganisation = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  return (
    <>
      <Center>
        <p>Stap 2/4</p>
        <PanelTitle>Jouw organisatie</PanelTitle>
      </Center>
      <Stack>
        <InputText
          value={data?.info?.organisation?.name}
          id="organisation"
          label="Organisatie"
          showLabel={true}
        />
        <InputText
          value={data?.info?.organisation?.location}
          id="location"
          label="Locatie"
          showLabel={true}
        />
        <Button stretch={true} onClick={() => handleStep(WizardStep.GameType)}>
          Volgende
        </Button>
        <Button variation="line" onClick={() => handleStep(WizardStep.Name)}>
          Terug naar de vorige stap
        </Button>
      </Stack>
    </>
  );
};
