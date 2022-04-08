import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { InputOptions } from "../../../components/InputOptions";
import { InputText } from "../../../components/InputText";
import { PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { Players, PlayerType, Sector } from "../../../models";
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
      <Stack>
        <InputOptions
          id="type"
          multi={false}
          options={text.playerType}
          label="type"
          value={[data.info?.players?.type ?? PlayerType.Students]}
          enumOptions={true}
          handleChange={(newData: any) => {
            updateData(newData[0], "info.players.type");
            if (newData[0] === PlayerType.Professionals) {
              updateData(undefined, "info.players.education");
              updateData(undefined, "info.players.year");
            }
          }}
        />
        <InputText
          value={data.info?.players?.education || ""}
          id="opleiding"
          label={wizardGameTypeText.education}
          showLabel={true}
          onChange={(e) => updateData(e.target.value, "info.players.education")}
          condition={data.info?.players?.type !== PlayerType.Professionals}
        />
        <InputOptions
          id="year"
          options={text.year}
          label={wizardGameTypeText.year}
          value={data.info?.players?.year}
          enumOptions={true}
          handleChange={(newData: Players["year"]) =>
            updateData(newData, "info.players.year")
          }
          condition={data.info?.players?.type !== PlayerType.Professionals}
        />
        <InputOptions
          id="sector"
          options={text.sector}
          label={wizardGameTypeText.sector}
          value={data.info?.players?.sector}
          enumOptions={true}
          handleChange={(newData: Sector) =>
            updateData(newData, "info.players.sector")
          }
        />
        <Button stretch={true} onClick={() => handleStep(WizardStep.Options)}>
          {wizardGameTypeText.next}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Organisation)}
        >
          {wizardGameTypeText.back}
        </Button>
      </Stack>
    </>
  );
};
