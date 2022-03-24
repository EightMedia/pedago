import { Category, Player, PlayerEvent, SocketCallback } from "models";
import { memo, useContext, useState } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Page } from "../../../components/Page";
import { GameScenes, GameType } from "./Game.types";
import { GameCountdown } from "./GameCountdown";
import { GameLead } from "./GameLead";
import { GameSort } from "./GameSort";

export const GameComponent = ({
  autoPlay = true,
  round,
  countdownTime,
  leadTime,
  initialScene,
}: GameType) => {
  const [scene, setScene] = useState(initialScene);
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const playerId = getPlayerId(socket?.id as string, room?.players as Player[]);

  const handleDoneSorting = (order: Category[]): void => {
    socket?.emit(
      PlayerEvent.StoreRound,
      room?.id,
      playerId,
      {
        number: round,
        order,
      },
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  return (
    <Page valign="center" halign="center">
      {(() => {
        let callback = undefined;
        switch (scene) {
          case GameScenes.Countdown:
            callback = autoPlay ? () => setScene(GameScenes.Lead) : undefined;
            return <GameCountdown time={countdownTime} callback={callback} />;
          case GameScenes.Lead:
            callback = autoPlay ? () => setScene(GameScenes.Lead) : undefined;
            return (
              <GameLead
                time={leadTime}
                callback={() => setScene(GameScenes.Sort)}
              />
            );
          case GameScenes.Sort:
            return <GameSort handleDoneSorting={handleDoneSorting} round={1} />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const Game = memo(GameComponent);
