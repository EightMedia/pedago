import { getPlayerId } from "@factories/shared.factory";
import { Player, RoomDto } from "models";
import { useContext, useState } from "react";
import { Socket } from "socket.io-client";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { GameScenes, GameType } from "./Game.types";
import { GameCountdown } from "./GameCountdown";
import { GameLead } from "./GameLead";
import { GameSort } from "./GameSort";

export const Game = ({
  autoPlay = true,
  round,
  countdownTime,
  leadTime,
  initialScene,
}: GameType) => {
  const [scene, setScene] = useState(initialScene);
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);
  const playerId = getPlayerId(socket?.id as string, room?.players as Player[]);

  const team = room?.teams?.find((t: Player[]) =>
    t.some((p: Player) => p.id === playerId)
  );
  const teamName =
    (room?.teams?.findIndex((t: Player[]) =>
      t.some((p: Player) => p.id === playerId)
    ) as number) + 1;

  return (
    <>
      {(() => {
        let callback = undefined;
        switch (scene) {
          case GameScenes.Countdown:
            callback = autoPlay ? () => setScene(GameScenes.Lead) : undefined;
            return (
              <GameCountdown
                time={countdownTime}
                callback={callback}
                round={round}
                roundMax={6}
                teamName={teamName.toString()}
                players={team as Player[]}
                room={room as RoomDto}
              />
            );
          case GameScenes.Lead:
            callback = autoPlay ? () => setScene(GameScenes.Sort) : undefined;
            return (
              <GameLead
                time={leadTime}
                callback={callback}
                round={round}
                teamName={teamName.toString()}
                players={team as Player[]}
                room={room as RoomDto}
              />
            );
          case GameScenes.Sort:
            return (
              <GameSort
                round={round}
                playerId={playerId as string}
                socket={socket as Socket}
                room={room as RoomDto}
                teamName={teamName.toString()}
              />
            );
          default:
            return null;
        }
      })()}
    </>
  );
};
