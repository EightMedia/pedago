import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
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
  const text = useContext(LanguageContext).gameWizard.roomCode;
  return (
    <>
      <PanelTitle>Voer de spelcode in</PanelTitle>
      <Stack>
        <InputText id="roomcode" label={text.roomCodeLabel} type="number" onChange={e => setRoomCode(parseInt(e?.target?.value, 10))} />
        <Button onClick={() => setStep(WizardStep.Name, roomCode)}>{text.nextButton}</Button>
      </Stack>
    </>
  );
};
