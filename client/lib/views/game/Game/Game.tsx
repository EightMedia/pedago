import { memo, useState } from "react";
import { Page } from "../../../components/Page";
import { GameScenes, GameType } from "./Game.types";
import { GameCountdown } from "./GameCountdown";
import { GameLead } from "./GameLead";
import { GameSort } from "./GameSort";

export const GameComponent = ({
  handleEmit,
  autoPlay = true,
  countdownTime,
  leadTime,
  initialScene = GameScenes.Countdown,
}: GameType) => {
  const [scene, setScene] = useState(initialScene);

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
            return <GameSort />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const Game = memo(GameComponent);
