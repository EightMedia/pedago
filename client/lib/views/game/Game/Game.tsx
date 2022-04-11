import { memo, useState } from "react";
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

  return (
    <Page background={6} valign="center" halign="center">
      {(() => {
        let callback = undefined;
        switch (scene) {
          case GameScenes.Countdown:
            callback = autoPlay ? () => setScene(GameScenes.Lead) : undefined;
            return <GameCountdown time={countdownTime} callback={callback} />;
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
    </Page>
  );
};

export const Game = memo(GameComponent);
