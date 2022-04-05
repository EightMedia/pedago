import { Players, PlayerType, Sector } from "models";
import React, { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export const WizardGameType = ({
  data,
  updateData,
  handleStep,
}: WizardStepProps) => {
  const locales = useContext(LanguageContext);
  return (
    <>
      <Center>
        <p>Stap 3/4</p>
        <PanelTitle>Type spelers</PanelTitle>
      </Center>
      <Stack>
        <InputOptions
          id="type"
          multi={false}
          options={locales.playerType}
          label="type"
          data={[data.info?.players?.type || 0]}
          enumOptions={true}
          handleChange={(newData: any) => {
            updateData(newData[0], "info.players.type");
          }}
        />
        <InputText
          value={data.info?.players?.education}
          id="opleiding"
          label="Opleiding"
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.players.education")}
          condition={data.info?.players?.type === PlayerType.Students}
        />
        <InputOptions
          id="year"
          options={locales.year}
          label="Leerjaar"
          data={data.info?.players?.year}
          enumOptions={true}
          handleChange={(newData: Players["year"]) =>
            updateData(newData, "info.players.year")
          }
          condition={data.info?.players?.type === PlayerType.Students}
        />
        <InputOptions
          id="sector"
          options={locales.sector}
          label="Sector"
          data={data.info?.players?.sector}
          enumOptions={true}
          handleChange={(newData: Sector) =>
            updateData(newData, "info.players.sector")
          }
        />
        <Button stretch={true} onClick={() => handleStep(WizardStep.Options)}>
          Volgende
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Organisation)}
        >
          Terug naar de vorige stap
        </Button>
      </Stack>
    </>
  );
};
