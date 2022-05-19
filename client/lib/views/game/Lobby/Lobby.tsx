import { PlayerEvent, SocketCallback } from "models";
import { memo, useContext } from "react";
import { Socket } from "socket.io-client";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { Intro } from "../../../components/Intro";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { PanelGroup } from "../../../components/PanelGroup";
import { PlayerGroup } from "../../../components/PlayerGroup";
import { Title } from "../../../components/Title";
import { LobbyType } from "./Lobby.types";

const LobbyComponent = ({ round, roundMax, groups, playerName, playerId }: LobbyType) => {
  const { text } = useContext(LanguageContext);
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);

  const handleGroupChange = (groupId: string) => {
    if (room?.id, playerId, groupId) {
      (socket as Socket).emit(PlayerEvent.ChangeGroup, room?.id, playerId, groupId, (res: SocketCallback) => {
        console.log(res);
      });
    }
  }

  return (
    <Page background={2}>
      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
      <PageSlot location="body">
        <Title>
          {text.gameLobby.hi} {playerName}!
          <br />
          {text.gameLobby.willStart}
        </Title>
        <Intro> {text.gameLobby.waiting}</Intro>
        <PanelGroup>
          {groups &&
            groups.map((group) => (
              <PlayerGroup
                key={group.id}
                {...group}
                counter={false}
                handleGroupChange={groups.length > 1 ? () => handleGroupChange(group.id) : undefined}
              />
            ))}
        </PanelGroup>
      </PageSlot>
    </Page>
  );
};

export const Lobby = memo(LobbyComponent);
