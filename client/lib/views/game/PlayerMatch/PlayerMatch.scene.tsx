import { Button } from "@components/Button";
import { Panel, PanelTitle } from "@components/Panel";
import { Player } from "@components/Player";
import { Text } from "@components/Text";
import { LanguageContext } from "@contexts/LanguageContext";
import { RoomContext } from "@contexts/RoomContext";
import { SocketContext } from "@contexts/SocketContext";
import { getPlayerId } from "@factories/shared.factory";
import { Stack } from "@layouts/Stack";
import { Player as PlayerModel, PlayerEvent, SocketCallback } from "models";
import { memo, useContext } from "react";
import styles from "./PlayerMatch.module.css";
import { PlayerMatchType } from "./PlayerMatch.types";

const PlayerMatchSceneComponent = ({
  round,
  roundMax,
  teamName,
  teamMembers,
}: PlayerMatchType) => {
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const { text } = useContext(LanguageContext);
  const playerId = getPlayerId(
    socket?.id as string,
    room?.players as PlayerModel[]
  );

  const handleFoundPartner = () => {
    socket?.emit(
      PlayerEvent.GameStart,
      room?.id,
      playerId,
      (r: SocketCallback) => {
        console.log(r);
      }
    );
  };

  return (
    <>
      <Panel>
        <PanelTitle>{text.playerMatch.youPlayWith}</PanelTitle>
        <Stack gap="xs">
          {teamMembers?.map((p) => (
            <Player key={p.name} name={p.name} group={p.group} size="lg" />
          ))}

          <Text align="center" tone="light" size="md">
            {text.playerMatch.youAre} <span className={styles.teamName}> Team {teamName}</span>.{" "}
            {text.playerMatch.findEachOther}
          </Text>

          <Button stretch onClick={handleFoundPartner}>
            {text.playerMatch.found}
          </Button>
        </Stack>
      </Panel>
    </>
  );
};

export const PlayerMatchScene = memo(PlayerMatchSceneComponent);
