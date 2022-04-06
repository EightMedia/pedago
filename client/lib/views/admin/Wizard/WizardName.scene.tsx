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
  const locale = useContext(LanguageContext);

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
        <p>Stap 1/4</p>
        <PanelTitle>Jouw gegevens</PanelTitle>
      </Center>

      <Stack>
        <InputText
          value={data?.info?.name || ""}
          id="name"
          label="Voor- en achternaam"
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.name")}
        />
        <InputText
          value={data?.info?.email || ""}
          id="email"
          type="email"
          label="E-mailadres"
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.email")}
        />

        <InputOptions
          id="role"
          options={locale.roles}
          label="Functie"
          value={data?.info?.role}
          enumOptions={true}
          handleChange={(newData: Role) => {
            updateData(newData, "info.role");
            if (!Boolean(data.info?.role?.includes(Role.Other))){
              updateData(undefined, "info.customRole")
            }
          }}
        />

        <InputText
          value={data?.info?.customRole || ""}
          id="customRole"
          label="Andere functie, namelijk"
          showLabel={true}
          condition={Boolean(data.info?.role?.includes(Role.Other))}
          onChange={(e) => updateData(e.target.value, "info.customRole")}
        />

        <Button stretch={true} onClick={handleNextStep}>
          Volgende
        </Button>
      </Stack>
    </>
  );
};
