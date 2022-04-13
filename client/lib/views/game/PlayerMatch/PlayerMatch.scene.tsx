import { Player as PlayerModel, PlayerEvent, SocketCallback } from "models";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Button } from "../../../components/Button";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Player } from "../../../components/Player";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";
import styles from "./PlayerMatch.module.css";
import { Text } from "../../../components/Text";

const PlayerMatchSceneComponent = ({
  round,
  roundMax,
  teamName,
  teamMembers,
}: PlayerMatchType) => {
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const text = useContext(LanguageContext);
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
        
        <div className={styles.playermatch}>
          <Text align="center" tone="light" size="md"> 
            {text.playerMatch.youAre} <span className={styles.teamname}> Team {teamName}</span>.{" "}
            {text.playerMatch.findEachOther}
          </Text>
        </div>
       
        <Button stretch onClick={handleFoundPartner}>
          {text.playerMatch.found}
        </Button>
         </Stack>
      </Panel>
    </>
  );
};

export const PlayerMatchScene = memo(PlayerMatchSceneComponent);
