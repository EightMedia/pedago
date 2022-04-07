import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardOrganisation = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const text = useContext(LanguageContext).adminWizard.organisation;

  const handleNextStep = () => {
    if (data.info?.organisation?.name && data.info.organisation.location) {
      handleStep(WizardStep.GameType);
    } else {
      console.error("Please fill in the form");
    }
  };
  return (
    <>
      <Center>
        <p>{text.step} 2/4</p>
        <PanelTitle>{text.yourOrg}</PanelTitle>
      </Center>
      <Stack>
        <InputText
          value={data?.info?.organisation?.name || ""}
          id="organisation"
          label={text.organisation}
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.organisation.name")}
        />
        <InputText
          value={data?.info?.organisation?.location || ""}
          id="location"
          label={text.location}
          showLabel={true}
          onChange={(e) =>
            updateData(e.target.value, "info.organisation.location")
          }
        />
        <Button stretch={true} onClick={handleNextStep}>
          {text.next}
        </Button>
        <Button variation="line" onClick={() => handleStep(WizardStep.Name)}>
          {text.back}
        </Button>
      </Stack>
    </>
  );
};
