import { Role } from "models";
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardName = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const text = useContext(LanguageContext);
  const wizardNameText = text.adminWizard.name;

  const handleNextStep = () => {
    if (data.info?.name && data.info.email && data.info.role) {
      handleStep(WizardStep.Organisation);
    } else {
      console.error("Please fill in the form");
    }
  };

  return (
    <>
      <Center>
        <p>{wizardNameText.step} 1/4</p>
        <PanelTitle>{wizardNameText.yourInfo}</PanelTitle>
      </Center>

      <Stack>
        <InputText
          value={data?.info?.name || ""}
          id="name"
          label={wizardNameText.name}
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.name")}
        />
        <InputText
          value={data?.info?.email || ""}
          id="email"
          type="email"
          label={wizardNameText.email}
          helptext={wizardNameText.emailHelp}
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.email")}
        />

        <InputOptions
          id="role"
          options={text.roles}
          label={wizardNameText.role}
          value={data?.info?.role}
          enumOptions={true}
          handleChange={(newData: Role) => {
            updateData(newData, "info.role");
            if (!data.info?.role?.includes(Role.Other)) {
              updateData(undefined, "info.customRole");
            }
          }}
        />

        <InputText
          value={data?.info?.customRole || ""}
          id="customRole"
          label={wizardNameText.customRole}
          showLabel={true}
          condition={Boolean(data.info?.role?.includes(Role.Other))}
          onChange={(e) => updateData(e.target.value, "info.customRole")}
        />

        <Button stretch={true} onClick={handleNextStep}>
          {wizardNameText.nextButton}
        </Button>
      </Stack>
    </>
  );
};
