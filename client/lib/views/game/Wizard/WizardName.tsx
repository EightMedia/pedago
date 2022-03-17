import { useState } from "react";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Stack } from "../../../layouts/Stack";
import { WizardStep } from "./Wizard.types";

export const WizardName = ({
  setStep,
}: {
  setStep: (step: WizardStep, name: string) => void;
}) => {
  const [name, setName] = useState<string>("");
  
  const handleSubmit = () => {
    if (name.length >= 3) {
      setStep(WizardStep.Group, name)
    } else {
      console.error("Your name should, at least, consist of three characters")
    }
  }

  return (
    <>
      <PanelTitle>Jouw voornaam</PanelTitle>
      <Stack>
        <p>Anderen zien dan met wie ze spelen</p>
        <InputText id="name" label="Naam" onChange={e => setName(e?.target?.value)} />
        <Button onClick={() => handleSubmit()}>Volgende</Button>
      </Stack>
    </>
  );
};
