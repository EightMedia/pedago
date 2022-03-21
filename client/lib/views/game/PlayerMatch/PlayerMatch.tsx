import { Player, PlayerEvent, SocketCallback } from "models";
import { memo, useEffect, useState } from "react";
import { Page } from "../../../components/Page";
import { Title } from "../../../components/Title";
import { PlayerMatchType } from "./PlayerMatch.types";

const PlayerMatchComponent = ({
  socket,
  round,
  roundMax,
  teams,
  room,
  playerId,
}: PlayerMatchType) => {
  const [team, setTeam] = useState<Player[]>([]);

  useEffect(() => {
    const currentTeam = teams.find((t) => t.some((p) => p.id === playerId));
    setTeam(currentTeam as Player[]);
  }, [teams, playerId]);

  const getPlayerName = (id: string, players: Player[]): string | undefined => {
    return players?.find((p) => p.id === id)?.name;
  };

  const handleFoundPartner = () => {
    socket.emit(
      PlayerEvent.GameStart,
      room.id,
      playerId,
      (r: SocketCallback) => {
        console.log(r);
      }
    );
  };

  return (
    <Page>
      <div>
        Ronde {round} van {roundMax}
      </div>
      <Title>Hoi {getPlayerName(playerId, team)}</Title>
      <br />
      Wachten op:
      {team &&
        team
          .filter((p) => p.id !== playerId)
          .map((player, index) => <div key={index}>{player.name}</div>)}
      <button onClick={handleFoundPartner}></button>
    </Page>
  );
};

export const PlayerMatch = memo(PlayerMatchComponent);
