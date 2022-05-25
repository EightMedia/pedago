import { PlayerType, Sector } from "models";
import { ChangeEvent, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputOptionValue } from "../../../components/InputOptions/InputOptions.types";
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
  const [yearError, setYearError] = useState<string>("");
  const [educationError, setEducationError] = useState<string>("");
  const [sectorError, setSectorError] = useState<string>("");
  const { text, lang } = useContext(LanguageContext);
  const wizardGameTypeText = text.adminWizard.gameType;

  const errorObject = {
    year: {
      EN: "Please check at least one of the boxes",
      NL: "Vink tenminste één leerjaar aan",
    },
    education: {
      EN: "Please fill in the name of the major",
      NL: "Vul de naam van de studie in",
    },
    sector: {
      EN: "Please check at least one of the boxes",
      NL: "Vink tenminste één sector aan",
    },
  };

  const handleEducationChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateData(e.target.value, "info.players.education");
    setEducationError("");
  };
  const handleYearChange = (year: InputOptionValue[]) => {
    updateData(year, "info.players.year");
    setYearError("");
  };
  const handleSectorChange = (sector: InputOptionValue[]) => {
    updateData(sector, "info.players.sector");
    setSectorError("");
  };

  const handleSubmit = () => {
    if (data.info?.players?.type === PlayerType.Students) {
      if (!data?.info?.players?.sector?.length) {
        setSectorError(errorObject.sector[lang]);
      }
      if (!data?.info?.players?.year?.length) {
        setYearError(errorObject.year[lang]);
      }
      if (!data?.info?.players?.education) {
        setEducationError(errorObject.education[lang]);
      }

      if (
        data?.info?.players?.sector.length &&
        data?.info?.players?.education &&
        data?.info?.players?.year?.length
      ) {
        handleStep(WizardStep.Options);
      }
    }

    if (data.info?.players?.type === PlayerType.Professionals) {
      if (data?.info?.players?.sector.length) {
        handleStep(WizardStep.Options);
      } else {
        setSectorError(errorObject.sector[lang]);
      }
    }
  };

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
              error={educationError}
              onChange={handleEducationChange}
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
              error={yearError}
              onChange={handleYearChange}
              condition={data.info?.players?.type !== PlayerType.Professionals}
            />
            <InputOptions
              id="sector"
              options={numberEnumToEntries(Sector).map(([label, value]) => ({
                value,
                label,
              }))}
              multi
              error={sectorError}
              label={wizardGameTypeText.sector}
              value={data.info?.players?.sector ?? []}
              onChange={handleSectorChange}
            />
            <Button stretch={true} onClick={handleSubmit}>
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
