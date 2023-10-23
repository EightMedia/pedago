import { Button } from "@components/Button";
import { List } from "@components/List";
import { ListItem } from "@components/List/List";
import { PanelTitle } from "@components/Panel";
import { LanguageContext } from "@contexts/LanguageContext";
import { Stack } from "@layouts/Stack";
import { Role } from "models";
import { PlayerType } from "models/lib/models/player-type.enum";
import { useContext } from "react";
import styles from "./Wizard.module.css";
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
  const { text } = useContext(LanguageContext);
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
      <PanelTitle align="left">{text.adminWizard.check.yourInfo}</PanelTitle>

      <List>
        <ListItem label={text.adminWizard.check.name} value={data?.info?.name} />
        <ListItem label={text.adminWizard.check.email} value={data?.info?.email} />
        <ListItem label={text.adminWizard.check.role} value={roles?.join(", ")} />{" "}
        <ListItem
          label={text.adminWizard.check.organisation}
          value={`${data?.info?.organisation?.name} (${data?.info?.organisation?.location})`}
        />
      </List>

      <PanelTitle align="left">{text.adminWizard.check.gameOptions}</PanelTitle>

      <List>
        <ListItem label={text.adminWizard.check.players} value={playerType as string} />
        <ListItem
          label={text.adminWizard.check.timer}
          value={data?.options?.timer ? text.adminWizard.check.on : text.adminWizard.check.off}
        />
        <ListItem
          label={(groupNames?.length as number) > 1 ? text.adminWizard.check.groups : text.adminWizard.check.group}
          value={groupNames?.length ? groupNames?.join(", ") : text.adminWizard.check.none}
        />
      </List>

      <Stack gap="sm">
        <Button stretch={true} onClick={() => handleCreateGame(data)}>
          {text.adminWizard.check.create}
        </Button>
        <Button
          variation="line"
          onClick={() => handleStep(WizardStep.Options)}
          className={styles.backButton}
        >
          {text.adminWizard.check.back}
        </Button>
      </Stack>
    </>
  );
};
