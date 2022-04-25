import { memo, useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Timer } from "../../../components/Timer";
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
  const { text } = useContext(LanguageContext);
  return (
    <Page background={5} valign="center">
      <PageSlot location="headerLeft">
        <Timer time={600} />
      </PageSlot>

      <PageSlot location="headerCenter">
        {text.game.round} {round} {text.game.of} {roundMax}
      </PageSlot>
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
            return <PlayerMatchWaitScene />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};

export const PlayerMatch = memo(PlayerMatchComponent);
