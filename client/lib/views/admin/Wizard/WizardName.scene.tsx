import { Role } from "models";
import React, { useContext } from "react";
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
  const locales = useContext(LanguageContext);

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
          onChange={(e) => updateData(e.target.value, "info.name")}
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
          data={data?.info?.role}
          enumOptions={true}
          handleChange={(newData: Role) => updateData(newData, "info.role")}
        />

        <InputText
          value={data?.info?.customRole}
          id="customRole"
          label="Andere functie, namelijk"
          showLabel={true}
          condition={data.info?.role?.includes(Role.Other)}
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
