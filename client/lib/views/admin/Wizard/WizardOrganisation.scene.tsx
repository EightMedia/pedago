import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Text } from "../../../components/Text";
import { Stack } from "../../../layouts/Stack";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOrganisation = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const text = useContext(LanguageContext).adminWizard;

  const handleNextStep = () => {
    if (data.info?.organisation?.name && data.info.organisation.location) {
      handleStep(WizardStep.GameType);
    } else {
      console.error("Please fill in the form");
    }
  };
  return (
    <>
      <div className={styles.stepHeader}>
        <Text tone="medium" align="center" weight="bold">
          {text.name.step} 2/4
        </Text>
        <PanelTitle>{text.organisation.yourOrg}</PanelTitle>
      </div>
      <Stack gap="sm">
        <InputText
          value={data?.info?.organisation?.name || ""}
          id="organisation"
          label={text.organisation.organisation}
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.organisation.name")}
        />
        <InputText
          value={data?.info?.organisation?.location || ""}
          id="location"
          label={text.organisation.location}
          helptext={text.organisation.locationHelp}
          showLabel={true}
          onChange={(e) =>
            updateData(e.target.value, "info.organisation.location")
          }
        />
        <Button stretch={true} onClick={handleNextStep}>
          {text.organisation.next}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Name)}
          className={styles.backButton}
        >
          {text.organisation.back}
        </Button>
      </Stack>
    </>
  );
};
