import { Player, PlayerEvent } from "models";
import { memo, useContext, useState } from "react";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { getPlayerId } from "../../../../factories/shared.factory";
import { Page } from "../../../components/Page";
import { DiscussStep, DiscussType } from "./Discuss.types";
import { DiscussCompare } from "./DiscussCompare.scene";
import { DiscussInfo } from "./DiscussInfo.scene";
import { DiscussIntro } from "./DiscussIntro.scene";
import { DiscussReady } from "./DiscussReady.scene";

const DiscussComponent = ({
  round,
  roundMax,
  initialStep,
  pause = false,
  teamMembers,
  autoPlay = true,
}: DiscussType) => {
  const text = useContext(LanguageContext);
  const socket = useContext(SocketContext);
  const room = useContext(RoomContext);
  const [step, setStep] = useState(initialStep);

  const handleReady = () => {
    socket?.emit(
      PlayerEvent.StoreTeamReady,
      room?.id,
      getPlayerId(socket.id, room?.players as Player[]),
      console.log
    );
  };

  return (
    <Page valign="center">
      <div>
        {text.game.round} {round} {text.game.of} {roundMax}
      </div>
      {(() => {
        let callback = undefined;
        switch (step) {
          case DiscussStep.Ready:
            callback = autoPlay ? () => setStep(DiscussStep.Intro) : undefined;
            return (
              <DiscussReady
                teamMembers={teamMembers}
                time={3}
                callback={callback}
              />
            );
          case DiscussStep.Intro:
            callback = autoPlay ? () => setStep(DiscussStep.Info) : undefined;
            return <DiscussIntro time={3} callback={callback} teamMembers={teamMembers}/>;
          case DiscussStep.Compare:
            return (
              <DiscussCompare
                teamMembers={teamMembers}
                handleReady={handleReady}
              />
            );
          case DiscussStep.Info:
            return (
              <DiscussInfo handleBack={() => setStep(DiscussStep.Compare)} />
            );
          default:
            return <>Discuss Fail</>;
        }
      })()}
    </Page>
  );
};

export const Discuss = memo(DiscussComponent);
