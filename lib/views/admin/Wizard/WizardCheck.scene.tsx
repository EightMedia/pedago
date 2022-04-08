import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Button } from "../../../components/Button";
import { List } from "../../../components/List";
import { ListItem } from "../../../components/List/List";
import { PanelTitle } from "../../../components/Panel";
import { Group, PlayerType, Role } from "../../../models";
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
  const text = useContext(LanguageContext).adminWizard.check;
  const groupNames = data.groups?.map((group: Group) => group.name);
  const playerType =
    Object.values(PlayerType)[data?.info?.players?.type as number];

  const roles = data?.info?.role?.map((r: Role) => Object.values(Role)[r]);
  const customRole = data?.info?.customRole;
  if (customRole) {
    roles?.pop();
    roles?.push(customRole);
  }

  return (
    <>
      <PanelTitle align="left">{text.yourInfo}</PanelTitle>

      <List>
        <ListItem label={text.name} value={data?.info?.name} />
        <ListItem label={text.email} value={data?.info?.email} />
        <ListItem label={text.role} value={roles?.join(", ")} />{" "}
        <ListItem
          label={text.organisation}
          value={`${data?.info?.organisation?.name} (${data?.info?.organisation?.location})`}
        />
      </List>

      <PanelTitle align="left">{text.gameOptions}</PanelTitle>

      <List>
        <ListItem label={text.players} value={playerType as string} />
        <ListItem
          label={text.timer}
          value={data?.options?.timer ? text.on : text.off}
        />
        <ListItem
          label={(groupNames?.length as number) > 1 ? text.groups : text.group}
          value={groupNames?.length ? groupNames?.join(", ") : text.none}
        />
      </List>

      <Button stretch={true} onClick={() => handleCreateGame(data)}>
        {text.create}
      </Button>
      <Button variation="line" onClick={() => handleStep(WizardStep.Options)}>
        {text.back}
      </Button>
    </>
  );
};
