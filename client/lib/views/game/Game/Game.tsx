import { memo, useState } from "react";
import { GameScenes, GameType } from "./Game.types";
import { GameCountdown } from "./GameCountdown";
import { GameLead } from "./GameLead";
import { GameSort } from "./GameSort";

 const GameComponent = ({
  autoPlay = true,
  round,
  countdownTime,
  leadTime,
  initialScene,
}: GameType) => {
  const [scene, setScene] = useState(initialScene);

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
              />
            );
          case GameScenes.Lead:
            callback = autoPlay ? () => setScene(GameScenes.Sort) : undefined;
            return (
              <GameLead time={leadTime} callback={callback} round={round} />
            );
          case GameScenes.Sort:
            return <GameSort round={round} />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export const Game = memo(GameComponent);
