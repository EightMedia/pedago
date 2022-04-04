import { Role } from "models";
import React, { useContext, useState } from "react";
import set from "set-value";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps, WizardType } from "./Wizard.types";

export const WizardName = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const [wizardData, setWizardData] = useState(data);

  const updateWizardData = (value: any, path: string) => {
    const newData: WizardType["data"] = set(wizardData, path, value) as any;
    console.log(newData?.info?.role);
    setWizardData(newData);
  };

  const locales = useContext(LanguageContext);

  console.log(wizardData);

  return (
    <>
      <Center>
        <p>Stap 1/4</p>
        <PanelTitle>Jouw gegevens</PanelTitle>
      </Center>

      <Stack>
        <InputText
          value={data?.info?.name}
          id="name"
          label="Voor- en achternaam"
          showLabel={true}
        />
        <InputText
          value={data?.info?.email}
          id="email"
          label="E-mailadres"
          showLabel={true}
        />

        <InputOptions
          id="role"
          options={locales.roles}
          label="Functie"
          data={wizardData?.info?.role}
          enumOptions={true}
          handleChange={(newData: Role) =>
            updateWizardData(newData, "info.role")
          }
        />

        <InputText
          value={data?.info?.customRole}
          id="customRole"
          label="Andere functie, namelijk"
          showLabel={true}
          condition={wizardData.info?.role?.includes(3)}
        />

        <Button
          stretch={true}
          onClick={() => handleStep(WizardStep.Organisation)}
        >
          Volgende
        </Button>
      </Stack>
    </>
  );
};
