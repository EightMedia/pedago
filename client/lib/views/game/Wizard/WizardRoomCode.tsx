import { useContext, useState } from "react";
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
  const [roomCode, setRoomCode] = useState<number>(0);
  const { text } = useContext(LanguageContext);

  const handleSubmit = () => {
      setStep(WizardStep.Name, roomCode);
  }
  
  return (
    <>
      <PanelTitle>{text.gameWizard.roomCode.roomCodeLabel}</PanelTitle>
      <Stack>
        <InputText
          id="roomcode"
          label={text.gameWizard.roomCode.roomCodeLabel}
          type="number"
          error={error}
          onChange={(e) => setRoomCode(parseInt(e?.target?.value, 10))}
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
