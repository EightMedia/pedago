import Avatar from "boring-avatars";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { avatarColors } from "../../../components/Player/Player";
import { Text } from "../../../components/Text";
import { Stack } from "../../../layouts/Stack";
import styles from "./Wizard.module.css";
import { WizardStep } from "./Wizard.types";

export const WizardName = ({
  setStep,
}: {
  setStep: (step: WizardStep, name: string) => void;
}) => {
  const [name, setName] = useState<string>("");
  const { text } = useContext(LanguageContext);

  const handleSubmit = () => {
    if (name.length >= 3) {
      setStep(WizardStep.Group, name);
    } else {
      console.error("Your name should, at least, consist of three characters");
    }
  };

  return (
    <>
      <PanelTitle space="sm">{text.gameWizard.name.title}</PanelTitle>
      <Stack>
        <Text align="center" tone="medium">
          {text.gameWizard.name.othersWillSee}
        </Text>
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
            label={text.gameWizard.name.nameLabel}
            placeholder={text.gameWizard.name.nameLabel}
            onChange={(e) => setName(e?.target?.value)}
          />
        </div>
        <Button onClick={() => handleSubmit()} disabled={name.length < 1}>
          {text.gameWizard.name.nextButton}
        </Button>
      </Stack>
    </>
  );
};
