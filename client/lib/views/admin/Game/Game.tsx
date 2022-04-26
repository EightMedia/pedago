import { AdminEvent, SocketCallback } from "models";
import { memo, useContext, useState } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { GameScene, GameType } from "./Game.types";
import { GameLead } from "./GameLead.scene";
import { GameOnboarding } from "./GameOnboarding";
import { GameRound } from "./GameRound.scene";

const GameComponent = ({
  openSettings,
  round,
  teams,
  timer,
  initialScene,
}: GameType & { initialScene: GameScene }) => {
  const [scene, setScene] = useState(initialScene);
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);

  const stopRound = () => {
    setScene(GameScene.Lead);
    socket?.emit(
      AdminEvent.FinishRound,
      room?.id,
      room?.round,
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  const leadCallBack = () => setScene(GameScene.Round);

  switch (scene) {
    case GameScene.Onboarding:
      return <GameOnboarding handleOk={() => setScene(GameScene.Round)} />;
    case GameScene.Round:
      return (
        <GameRound
          openSettings={openSettings}
          stopRound={stopRound}
          round={round}
          teams={teams}
          timer={timer}
        />
      );
    case GameScene.Lead:
      return (
        <GameLead
          openSettings={openSettings}
          round={round.current}
          roundMax={round.total}
          callback={leadCallBack}
          teams={teams}
        />
      );
    default:
      return null;
  }
};

export const Game = memo(GameComponent);
