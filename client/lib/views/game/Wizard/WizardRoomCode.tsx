import { ChangeEvent, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { WizardStep } from "./Wizard.types";

export const WizardRoomCode = ({
  setStep,
  error,
}: {
  setStep: (step: WizardStep, roomCode: number) => void;
  error?: string;
}) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [roomCode, setRoomCode] = useState<number>(0);
  const { text } = useContext(LanguageContext);

  const handleSubmit = () => {
      setStep(WizardStep.Name, roomCode);
      setChanged(false);
    }
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setRoomCode(parseInt(e?.target?.value, 10));
      setChanged(true);
  }
  
  return (
    <>
      <PanelTitle>{text.gameWizard.roomCode.roomCodeLabel}</PanelTitle>
      <Stack>
        <InputText
          id="roomcode"
          label={text.gameWizard.roomCode.roomCodeLabel}
          type="number"
          error={!changed ? error : undefined}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          disabled={roomCode < 999 || roomCode > 9999}
        >
          {text.gameWizard.roomCode.nextButton}
        </Button>
      </Stack>
    </>
  );
};
