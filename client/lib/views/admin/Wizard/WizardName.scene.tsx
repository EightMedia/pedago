import React from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardName = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  return (
    <>
      <Center>
        <p>Stap 1/4</p>
        <PanelTitle>Jouw gegevens</PanelTitle>
      </Center>

      <Stack>
        <InputText
          value={data?.info?.name}
          id="name"
          label="Voor- en achternaam"
          showLabel={true}
        />
        <InputText
          value={data?.info?.email}
          id="email"
          label="E-mailadres"
          showLabel={true}
        />

        <InputText
          value={data?.info?.customRole}
          id="customRole"
          label="Andere functie, namelijk"
          showLabel={true}
        />

        <Button
          stretch={true}
          onClick={() => handleStep(WizardStep.Organisation)}
        >
          Volgende
        </Button>
      </Stack>
    </>
  );
};
