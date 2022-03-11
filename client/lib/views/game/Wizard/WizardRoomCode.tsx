import React from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../components/Stack";

export const WizardRoomCode = ({
  setStep,
}: {
  setStep: (number: number) => void;
}) => {
  return (
    <>
      <PanelTitle>Voer de spelcode in</PanelTitle>
      <Stack>
        <InputText id="roomcode" label="Spelcode" />
        <Button onClick={() => setStep(1)}>Volgende</Button>
      </Stack>
    </>
  );
};
