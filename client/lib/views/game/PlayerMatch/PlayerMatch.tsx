import { memo } from "react";
import { Page } from "../../../components/Page";
import { PlayerMatchScene } from "./PlayerMatch.scene";
import { PlayerMatchSceneEnum, PlayerMatchType } from "./PlayerMatch.types";
import { PlayerMatchWaitScene } from "./PlayerMatchWait.scene";

const PlayerMatchComponent = ({
  round,
  roundMax,
  teamName,
  teamMembers,
  initialScene,
}: PlayerMatchType) => {
  return (
    <Page background={5} valign="center" halign="center">
      {(() => {
        switch (initialScene) {
          case PlayerMatchSceneEnum.Match:
            return (
              <PlayerMatchScene
                round={round}
                roundMax={roundMax}
                teamName={teamName}
                teamMembers={teamMembers}
              />
            );
          case PlayerMatchSceneEnum.Wait:
            return <PlayerMatchWaitScene round={round} roundMax={roundMax} />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const PlayerMatch = memo(PlayerMatchComponent);
