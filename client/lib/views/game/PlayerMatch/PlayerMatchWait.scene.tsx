import { Panel, PanelTitle } from "@components/Panel";
import { Text } from "@components/Text";
import { LanguageContext } from "@contexts/LanguageContext";
import { Stack } from "@layouts/Stack";
import { memo, useContext } from "react";
import styles from "./PlayerMatch.module.css";

const PlayerMatchWaitComponent = () => {
  const { text } = useContext(LanguageContext);

  return (
    <Panel>
      <PanelTitle>{text.playerMatch.youPlayWith}</PanelTitle>
      <Stack gap="sm">
        <div className={styles.waiting}>
          <Text tone="light" size="mdlg" align="center">
            {text.playerMatch.waitForOthers}
          </Text>
        </div>
        <Text align="center" tone="light" size="md">
          {text.playerMatch.waitUntil}
        </Text>
      </Stack>
    </Panel>
  );
};

export const PlayerMatchWaitScene = memo(PlayerMatchWaitComponent);
