import Avatar from "boring-avatars";
import { ChangeEvent, useContext, useEffect, useState } from "react";
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
  error,
}: {
  setStep: (step: WizardStep, name: string) => void;
  error?: string;
}) => {
  const [changed, setChanged] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | undefined>();
  const [name, setName] = useState<string>("");
  const { text, lang } = useContext(LanguageContext);
  const errorObject = {
    EN: "Your name should at least consist of two characters",
    NL: "Gebruik tenminste twee karakters als naam",
  };

  useEffect(() => {
    setErrorMsg(error);
  }, [error]);

  const handleSubmit = () => {
    setChanged(false);
    if (name.length >= 2) {
      setStep(WizardStep.Group, name);
    } else {
      setErrorMsg(errorObject[lang]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value);
    setChanged(true);
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
            error={!changed ? errorMsg : undefined}
            placeholder={text.gameWizard.name.nameLabel}
            onChange={handleChange}
            align="left"
          />
        </div>
        <Button onClick={() => handleSubmit()} disabled={name.length < 1}>
          {text.gameWizard.name.nextButton}
        </Button>
      </Stack>
    </>
  );
};
