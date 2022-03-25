import { memo } from "react";
import { Page } from "../../../components/Page";
import { PlayerMatchScene, PlayerMatchType } from "./PlayerMatch.types";
import { PlayerMatchMatch } from "./PlayerMatchMatch";
import { PlayerMatchWait } from "./PlayerMatchWait";

const PlayerMatchComponent = ({
  round,
  roundMax,
  teamName,
  teamMembers,
  initialScene,
}: PlayerMatchType) => {
  return (
    <Page valign="center" halign="center">
      {(() => {
        switch (initialScene) {
          case PlayerMatchScene.Match:
            return (
              <PlayerMatchMatch
                round={round}
                roundMax={roundMax}
                teamName={teamName}
                teamMembers={teamMembers}
              />
            );
          case PlayerMatchScene.Wait:
            return <PlayerMatchWait round={round} roundMax={roundMax} />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const PlayerMatch = memo(PlayerMatchComponent);
