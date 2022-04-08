import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
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
  const text = useContext(LanguageContext).gameWizard.name;

  const handleSubmit = () => {
    if (name.length >= 3) {
      setStep(WizardStep.Group, name)
    } else {
      console.error("Your name should, at least, consist of three characters")
    }
  }

  return (
    <>
      <PanelTitle>{text.title}</PanelTitle>
      <Stack>
        <p>{text.othersWillSee}</p>
        <InputText id="name" label={text.nameLabel} onChange={e => setName(e?.target?.value)} />
        <Button onClick={() => handleSubmit()}>{text.nextButton}</Button>
      </Stack>
    </>
  );
};
