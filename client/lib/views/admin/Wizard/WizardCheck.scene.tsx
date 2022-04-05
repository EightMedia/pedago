import { Role } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";
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
  const playerType =
    Object.values(PlayerType)[data?.info?.players?.type as number];

  const roles = data?.info?.role?.map((r) => Object.values(Role)[r]);
  const customRole = data?.info?.customRole;
  if (customRole) {
    roles?.pop();
    roles?.push(customRole);
  }
    
  return (
    <>
      <PanelTitle align="left">Jouw gegevens</PanelTitle>

      <List>
        <ListItem label="Naam" value={data?.info?.name} />
        <ListItem label="E-mailadres" value={data?.info?.email} />
        <ListItem label="Functie" value={roles?.join(", ")} />{" "}
        <ListItem
          label="Organisatie"
          value={`${data?.info?.organisation?.name} (${data?.info?.organisation?.location})`}
        />
      </List>

      <PanelTitle align="left">Spelopties</PanelTitle>

      <List>
        <ListItem label="Spelers" value={playerType as string} />
        <ListItem label="Timer" value={data?.options?.timer ? "Aan" : "Uit"} />
        <ListItem label="Groepen" value={groupNames?.length ? groupNames?.join(", ") : "n.v.t."} />
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
