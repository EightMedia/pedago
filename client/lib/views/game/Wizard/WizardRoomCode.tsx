import { useState } from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { WizardStep } from "./Wizard.types";

export const WizardRoomCode = ({
  setStep,
}: {
  setStep: (step: WizardStep, roomCode: number) => void;
}) => {
  const [roomCode, setRoomCode] = useState<number>(0);
  return (
    <>
      <PanelTitle>Voer de spelcode in</PanelTitle>
      <Stack>
        <InputText id="roomcode" label="Spelcode" type="number" onChange={e => setRoomCode(parseInt(e?.target?.value, 10))} />
        <Button onClick={() => setStep(WizardStep.Name, roomCode)}>Volgende</Button>
      </Stack>
    </>
  );
};
