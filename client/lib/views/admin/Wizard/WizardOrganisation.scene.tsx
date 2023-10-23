import { Button } from "@components/Button";
import { InputText } from "@components/InputText";
import { PanelTitle } from "@components/Panel";
import { Text } from "@components/Text";
import { Stack } from "@layouts/Stack";
import { ChangeEvent, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOrganisation = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const [orgError, setOrgError] = useState<string>("");
  const [locationError, setLocationError] = useState<string>("");
  const { text, lang } = useContext(LanguageContext);

  const errorObject = {
    organisation: {
      EN: "Please fill in the name of your organisation",
      NL: "Vul de naam van jouw organisatie in",
    },
    location: {
      EN: "Please fill in the location of your organisation",
      NL: "Vul de locatie van jouw organisatie in",
    },
  };

  const handleOrgChange = (e: ChangeEvent<HTMLInputElement>) => {
    setOrgError("");
    updateData(e.target.value, "info.organisation.name");
  };
  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocationError("");
    updateData(e.target.value, "info.organisation.location");
  };

  const handleNextStep = () => {
    if (!data?.info?.organisation?.name) {
      setOrgError(errorObject.organisation[lang]);
    }
    if (!data?.info?.organisation?.location) {
      setLocationError(errorObject.location[lang]);
    }
    if (data.info?.organisation?.name && data.info.organisation.location) {
      handleStep(WizardStep.GameType);
    }
  };

  return (
    <>
      <div className={styles.stepHeader}>
        <Text tone="medium" align="center" weight="bold">
          {text.adminWizard.name.step} 2/4
        </Text>
        <PanelTitle>{text.adminWizard.organisation.yourOrg}</PanelTitle>
      </div>
      <Stack gap="sm">
        <InputText
          value={data?.info?.organisation?.name || ""}
          id="organisation"
          label={text.adminWizard.organisation.organisation}
          showLabel={true}
          error={orgError}
          onChange={handleOrgChange}
        />
        <InputText
          value={data?.info?.organisation?.location || ""}
          id="location"
          label={text.adminWizard.organisation.location}
          helptext={text.adminWizard.organisation.locationHelp}
          showLabel={true}
          error={locationError}
          onChange={handleLocationChange}
        />
        <Button stretch={true} onClick={handleNextStep}>
          {text.adminWizard.organisation.next}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Name)}
          className={styles.backButton}
        >
          {text.adminWizard.organisation.back}
        </Button>
      </Stack>
    </>
  );
};
