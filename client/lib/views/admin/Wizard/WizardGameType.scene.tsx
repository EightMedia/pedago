import React from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardGameType = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  return (
    <>
      <Center>
        <p>Stap 3/4</p>
        <PanelTitle>Type spelers</PanelTitle>
      </Center>
      <Stack>
        <InputText
          value={data.info?.players?.education}
          id="opleiding"
          label="Opleiding"
          showLabel={true}
        />
        <Button stretch={true} onClick={() => handleStep(WizardStep.Options)}>
          Volgende
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Organisation)}
        >
          Terug naar de vorige stap
        </Button>
      </Stack>
    </>
  );
};
