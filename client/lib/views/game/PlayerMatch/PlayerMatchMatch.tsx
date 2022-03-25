import { Player as PlayerModel, PlayerEvent, SocketCallback } from "models";
import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Button } from "../../../components/Button";
import { Page } from "../../../components/Page";
import { Panel, PanelTitle } from "../../../components/Panel";
import { Player } from "../../../components/Player";
import { Center } from "../../../layouts/Center";
import { Stack } from "../../../layouts/Stack";
import { PlayerMatchType } from "./PlayerMatch.types";

const PlayerMatchMatchComponent = ({
  round,
  roundMax,
  teamName,
  teamMembers
}: PlayerMatchType) => {
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const data = useContext(LanguageContext);
  const playerId = getPlayerId(socket?.id as string, room?.players as PlayerModel[]);

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
    <Page valign="center">
      <div>
        Ronde {round} van {roundMax}
      </div>
      <Panel>
        <PanelTitle>{data.playerMatch.youPlayWith}</PanelTitle>
        <Stack>
          {teamMembers?.map((p) => (
            <Player key={p.name} name={p.name} group={p.group} size="lg" />
          ))}
        </Stack>
        <Center space="sm">
          <p>
            Jullie zijn <b>team {teamName}</b>. Zoek elkaar op en maak je klaar
          </p>
        </Center>
        <Button stretch onClick={handleFoundPartner}>
          {data.playerMatch.found}
        </Button>
      </Panel>
    </Page>
  );
};

export const PlayerMatchMatch = memo(PlayerMatchMatchComponent);
