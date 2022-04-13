import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";
import styles from "./PlayerMatch.module.css";
import { Text } from "../../../components/Text";

const PlayerMatchWaitComponent = ({ round, roundMax }: PlayerMatchType) => {
  const text = useContext(LanguageContext);

  return (
    <Panel>
      <PanelTitle>{text.playerMatch.youPlayWith}</PanelTitle>
     <Stack gap="sm">
      <div className={styles.waiting}>
         <Text tone="light" size="mdlg" align="center">{text.playerMatch.waitForOthers}</Text>
      </div>
      
      <Text align="center" tone="light" size="md">{text.playerMatch.waitUntil}</Text>
     </Stack>
    </Panel>
  );
};

export const PlayerMatchWaitScene = memo(PlayerMatchWaitComponent);
