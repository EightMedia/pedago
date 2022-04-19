import { PlayerType, Sector } from "models";
import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import playerTypeOptionStyles from "./PlayerTypeOptionsStyles.module.css";
import { numberEnumToEntries } from "./utils";
import styles from "./Wizard.module.css";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardGameType = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const text = useContext(LanguageContext);
  const wizardGameTypeText = text.adminWizard.gameType;

  return (
    <>
      <Center>
        <p>{wizardGameTypeText.step} 3/4</p>
        <PanelTitle>{wizardGameTypeText.typePlayers}</PanelTitle>
      </Center>
      <Stack gap="sm">
        <InputOptions
          customStyles={playerTypeOptionStyles}
          id="type"
          options={numberEnumToEntries(PlayerType).map(([label, value]) => ({
            value,
            label,
          }))}
          value={data.info?.players?.type}
          onChange={(value) => {
            updateData(value, "info.players.type");
            if (value === PlayerType.Professionals) {
              updateData(undefined, "info.players.education");
              updateData(undefined, "info.players.year");
            }
          }}
        />
        {data.info?.players?.type !== undefined && (
          <>
            <InputText
              value={data.info?.players?.education || ""}
              id="opleiding"
              label={wizardGameTypeText.education}
              showLabel={true}
              onChange={(e) =>
                updateData(e.target.value, "info.players.education")
              }
              condition={data.info?.players?.type !== PlayerType.Professionals}
            />
            <InputOptions
              id="year"
              options={Object.values(text.year).map((label, index) => ({
                label,
                value: index,
              }))}
              multi
              label={wizardGameTypeText.year}
              value={data.info?.players?.year ?? []}
              onChange={(newData) => {
                updateData(newData, "info.players.year");
              }}
              condition={data.info?.players?.type !== PlayerType.Professionals}
            />
            <InputOptions
              id="sector"
              options={numberEnumToEntries(Sector).map(([label, value]) => ({
                value,
                label,
              }))}
              multi
              label={wizardGameTypeText.sector}
              value={data.info?.players?.sector ?? []}
              onChange={(newData) => updateData(newData, "info.players.sector")}
            />
            <Button
              stretch={true}
              onClick={() => handleStep(WizardStep.Options)}
            >
              {wizardGameTypeText.next}
            </Button>
            <Button
              variation="line"
              onClick={() => handleStep(WizardStep.Organisation)}
              className={styles.backButton}
            >
              {wizardGameTypeText.back}
            </Button>
          </>
        )}
      </Stack>
    </>
  );
};
