import { RoomContext } from "@contexts/RoomContext";
import { SocketContext } from "@contexts/SocketContext";
import { getPlayerId } from "@factories/shared.factory";
import { Player, PlayerEvent } from "models";
import { memo, useContext, useState } from "react";
import { DiscussStep, DiscussType } from "./Discuss.types";
import { DiscussCompare } from "./DiscussCompare.scene";
import { DiscussInfo } from "./DiscussInfo.scene";
import { DiscussIntro } from "./DiscussIntro.scene";
import { DiscussReady } from "./DiscussReady.scene";

const DiscussComponent = ({
  round,
  roundMax,
  initialStep,
  teamMembers,
  autoPlay = true,
  discussInfoSeen,
}: DiscussType) => {
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
    <>
      {(() => {
        let callback = undefined;
        switch (step) {
          case DiscussStep.Ready:
            callback = autoPlay ? () => setStep(DiscussStep.Intro) : undefined;
            return (
              <DiscussReady
                teamMembers={teamMembers}
                time={3}
                round={round}
                roundMax={roundMax}
                callback={callback}
              />
            );
          case DiscussStep.Intro:
            callback = autoPlay
              ? () =>
                setStep(
                  discussInfoSeen ? DiscussStep.Compare : DiscussStep.Info
                )
              : undefined;
            return (
              <DiscussIntro
                time={3}
                callback={callback}
                round={round}
                roundMax={roundMax}
                teamMembers={teamMembers}
              />
            );
          case DiscussStep.Compare:
            return teamMembers?.[0]?.cards ? (
              <DiscussCompare
                teamMembers={teamMembers}
                handleReady={handleReady}
                round={round}
              />
            ) : null;
          case DiscussStep.Info:
            return (
              <DiscussInfo
                handleBack={() => setStep(DiscussStep.Compare)}
                round={round}
                roundMax={roundMax}
              />
            );
          default:
            return <>Discuss Fail</>;
        }
      })()}
    </>
  );
};

export const Discuss = memo(DiscussComponent);
