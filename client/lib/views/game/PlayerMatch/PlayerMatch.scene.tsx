import { Player as PlayerModel, PlayerEvent, SocketCallback } from "models";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Button } from "../../../components/Button";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Player } from "../../../components/Player";
import { Timer } from "../../../components/Timer";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";

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
      <Timer time={600} />
      <div>
        {text.game.round} {round} {text.game.of} {roundMax}
      </div>
      <Panel>
        <PanelTitle>{text.playerMatch.youPlayWith}</PanelTitle>
        <Stack>
          {teamMembers?.map((p) => (
            <Player key={p.name} name={p.name} group={p.group} size="lg" />
          ))}
        </Stack>
        <Center space="sm">
          <p>
            {text.playerMatch.youAre} <b>team {teamName}</b>.{" "}
            {text.playerMatch.findEachOther}
          </p>
        </Center>
        <Button stretch onClick={handleFoundPartner}>
          {text.playerMatch.found}
        </Button>
      </Panel>
    </>
  );
};

export const PlayerMatchScene = memo(PlayerMatchSceneComponent);
