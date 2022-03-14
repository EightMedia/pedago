import React from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";

export const WizardName = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <PanelTitle>Jouw voornaam</PanelTitle>
      <Stack>
        <p>Anderen zien dan met wie ze spelen</p>
        <InputText id="name" label="Naam" />
        <Button onClick={() => setStep(2)}>Volgende</Button>
      </Stack>
    </>
  );
};
