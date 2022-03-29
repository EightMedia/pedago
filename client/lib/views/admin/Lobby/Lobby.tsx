import { AdminEvent, SocketCallback } from "models";
import { memo, useContext, useState } from "react";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { LobbyStep, LobbyType } from "./Lobby.types";
import { LobbyInfo } from "./LobbyInfo.scene";
import { LobbyLobby } from "./LobbyLobby.scene";

const LobbyComponent = ({ groups, initialStep }: LobbyType) => {
  const [step, setStep] = useState<LobbyStep>(initialStep as LobbyStep);
  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);

  const handleStart = () => {
    socket?.emit(AdminEvent.StartGame, room?.id, (r: SocketCallback) => {
      console.log(r);
    });
  };
  switch (step) {
    case LobbyStep.Info:
      return <LobbyInfo handleClick={() => setStep(LobbyStep.Lobby)} />;
    case LobbyStep.Lobby:
      return (
        <LobbyLobby
          groups={groups}
          handleStart={handleStart}
          handleInfo={() => setStep(LobbyStep.Info)}
        />
      );
    default:
      return null;
  }
};

export const Lobby = memo(LobbyComponent);
