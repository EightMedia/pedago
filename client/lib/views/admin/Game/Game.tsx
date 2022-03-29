import { useState } from "react";
import { GameScene, GameType } from "./Game.types";
import { GameLead } from "./GameLead.scene";
import { GameOnboarding } from "./GameOnboarding";
import { GameRound } from "./GameRound.scene";

const GameComponent = ({
  openSettings,
  stopRound,
  round,
  teams,
  timer,
  initialScene,
}: GameType & { initialScene: GameScene }) => {
  const [scene, setScene] = useState(initialScene);

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
      const callback = () => setScene(GameScene.Round);
      return (
        <GameLead
          round={round.current}
          roundMax={round.total}
          callback={callback}
        />
      );
    default:
      return null;
  }
};

export const Game = GameComponent;
