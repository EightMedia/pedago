import { Role } from "models";
import { ChangeEvent, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputOptionValue } from "../../../components/InputOptions/InputOptions.types";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Text } from "../../../components/Text";
import { Stack } from "../../../layouts/Stack";
import { numberEnumToEntries } from "./utils";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardName = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [roleError, setRoleError] = useState<string>("");
  const [customRoleError, setCustomRoleError] = useState<string>("");
  const { text, lang } = useContext(LanguageContext);
  const wizardNameText = text.adminWizard.name;

  const errorObject = {
    name: { EN: "Please fill in a name", NL: "Vul uw naam in" },
    email: {
      EN: "Please fill in your e-mail address",
      NL: "Vul uw e-mailadres in",
    },
    role: {
      EN: "Please check at least on of the roles",
      NL: "Geef tenminste één functie op",
    },
    customRole: {
      EN: "Please fill in your role",
      NL: "Vul uw functie in",
    },
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateData(e.target.value, "info.name");
    setNameError("");
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateData(e.target.value, "info.email");
    setEmailError("");
  };
  const handleRoleChange = (role: InputOptionValue[]) => {
    updateData(role, "info.role");
    setRoleError("");
  };
  const handleCustomRoleChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateData(e.target.value, "info.customRole");
    setCustomRoleError("");
  };

  const handleNextStep = () => {
    if (!data.info?.name) {
      setNameError(errorObject.name[lang]);
    }
    if (!data.info?.email) {
      setEmailError(errorObject.email[lang]);
    }
    if (!data.info?.role?.length) {
      setRoleError(errorObject.role[lang]);
    }
    if (
      Boolean(data.info?.role?.includes(Role.Other)) &&
      !data?.info?.customRole
    ) {
      setCustomRoleError(errorObject.customRole[lang]);
    }
    if (
      data.info?.name &&
      data.info.email &&
      data.info.role?.length &&
      !(
        Boolean(data.info?.role?.includes(Role.Other)) &&
        !data?.info?.customRole
      )
    ) {
      handleStep(WizardStep.Organisation);
    }
  };

  return (
    <>
      <div className={styles.stepHeader}>
        <Text tone="medium" align="center" weight="bold">
          {wizardNameText.step} 1/4
        </Text>
        <PanelTitle>{wizardNameText.yourInfo}</PanelTitle>
      </div>

      <Stack gap="sm">
        <InputText
          value={data?.info?.name || ""}
          id="name"
          label={wizardNameText.name}
          showLabel={true}
          error={nameError}
          onChange={handleNameChange}
        />
        <InputText
          value={data?.info?.email || ""}
          id="email"
          type="email"
          label={wizardNameText.email}
          helptext={wizardNameText.emailHelp}
          showLabel={true}
          error={emailError}
          onChange={handleEmailChange}
        />

        <InputOptions
          id="role"
          options={numberEnumToEntries(Role).map(([, value]) => ({
            value,
            label: text.roles[value],
          }))}
          multi
          label={wizardNameText.role}
          value={data?.info?.role ?? []}
          error={roleError}
          onChange={(role: InputOptionValue[]) => {
            handleRoleChange(role);
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
          error={customRoleError}
          condition={Boolean(data.info?.role?.includes(Role.Other))}
          onChange={handleCustomRoleChange}
        />

        <Button stretch={true} onClick={handleNextStep}>
          {wizardNameText.nextButton}
        </Button>
      </Stack>
    </>
  );
};
