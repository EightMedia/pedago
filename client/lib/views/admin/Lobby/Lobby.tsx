import { SocketContext } from "@contexts/SocketContext";
import { AdminEvent, SocketCallback } from "models";
import { memo, useContext, useState } from "react";
import { LobbyStep, LobbyType } from "./Lobby.types";
import { LobbyInfo } from "./LobbyInfo.scene";
import { LobbyLobby } from "./LobbyLobby.scene";

const LobbyComponent = ({
  room,
  groups,
  initialStep,
  handleStart,
}: LobbyType) => {
  const [step, setStep] = useState<LobbyStep>(initialStep as LobbyStep);
  const socket = useContext(SocketContext);

  if (!handleStart) {
    handleStart = () => {
      socket?.emit(AdminEvent.StartGame, room?.id, (r: SocketCallback) => {
        console.log(r);
      });
    };
  }

  switch (step) {
    case LobbyStep.Info:
      return <LobbyInfo handleClick={() => setStep(LobbyStep.Lobby)} />;
    case LobbyStep.Lobby:
      return (
        <LobbyLobby
          room={room}
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
