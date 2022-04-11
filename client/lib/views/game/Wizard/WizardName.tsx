import Avatar from "boring-avatars";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { avatarColors } from "../../../components/Player/Player";
import { Stack } from "../../../layouts/Stack";
import styles from "./Wizard.module.css";
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
      setStep(WizardStep.Group, name);
    } else {
      console.error("Your name should, at least, consist of three characters");
    }
  };

  return (
    <>
      <PanelTitle>{text.title}</PanelTitle>
      <Stack>
        <p>{text.othersWillSee}</p>
        <div className={styles.avatarInput}>
          <figure className={styles.avatarFigure}>
            <Avatar
              square={true}
              name={name}
              variant="beam"
              size={40}
              colors={avatarColors}
            />
          </figure>
          <InputText
            id="name"
            label={text.nameLabel}
            onChange={(e) => setName(e?.target?.value)}
          />
        </div>
        <Button onClick={() => handleSubmit()}>{text.nextButton}</Button>
      </Stack>
    </>
  );
};
