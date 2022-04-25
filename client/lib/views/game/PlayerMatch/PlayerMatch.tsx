import { useContext } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { TimerContext } from "../../../../contexts/TimerContext";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Timer } from "../../../components/Timer";
import { PlayerMatchScene } from "./PlayerMatch.scene";
import { PlayerMatchSceneEnum, PlayerMatchType } from "./PlayerMatch.types";
import { PlayerMatchWaitScene } from "./PlayerMatchWait.scene";

export const PlayerMatch = ({
  round,
  roundMax,
  teamName,
  teamMembers,
  initialScene,
}: PlayerMatchType) => {
  const { text } = useContext(LanguageContext);
  const room = useContext(RoomContext);
  const timer = useContext(TimerContext);

  return (
    <Page background={5} valign="center">
      <PageSlot location="headerLeft">
        {(room?.options?.timer as boolean) && <Timer time={timer} />}
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
