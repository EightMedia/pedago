import React from "react";
import { Button } from "../../../components/Button";
import { List } from "../../../components/List";
import { ListItem } from "../../../components/List/List";
import { PanelTitle } from "../../../components/Panel";
import { WizardStep, WizardStepProps } from "./Wizard.types";

export type WizardCheckProps = {
  data: WizardStepProps["data"];
  handleStep: WizardStepProps["handleStep"];
  handleCreateGame: any;
};

export const WizardCheck = ({
  data,
  handleStep,
  handleCreateGame,
}: WizardCheckProps) => {
  const groupNames = data.groups?.map((group) => group.name);
  return (
    <>
      <PanelTitle align="left">Jouw gegevens</PanelTitle>

      <List>
        <ListItem label="Naam" value={data?.info?.name} />
        <ListItem label="E-mailadres" value={data?.info?.email} />
        <ListItem label="Functie" value={`${data?.info?.role}`} />{" "}
        <ListItem
          label="Organisatie"
          value={`${data?.info?.organisation?.name} (${data?.info?.organisation?.location})`}
        />
      </List>

      <PanelTitle align="left">Spelopties</PanelTitle>

      <List>
        <ListItem label="Spelers" value={data?.info?.players?.type} />
        <ListItem label="Timer" value={data?.options?.timer ? "Aan" : "Uit"} />
        <ListItem label="Groepen" value={`${groupNames}`} />
      </List>

      <Button stretch={true} onClick={() => handleCreateGame(data)}>
        Spel aanmaken
      </Button>
      <Button variation="line" onClick={() => handleStep(WizardStep.Options)}>
        Terug naar de vorige stap
      </Button>
    </>
  );
};
