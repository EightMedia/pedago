import { Group, PlayerEvent, SocketCallback } from "models";
import { useRouter } from "next/router";
import { memo, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { Page } from "../../../components/Page";
import { Panel } from "../../../components/Panel";
import { WizardStep, WizardType } from "./Wizard.types";
import { WizardGroup } from "./WizardGroup";
import { WizardInfo } from "./WizardInfo";
import { WizardName } from "./WizardName";
import { WizardRoomCode } from "./WizardRoomCode";

const WizardComponent = ({
  socket,
  initialStep,
  room
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep as WizardStep);
  const [playerId, setPlayerId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    setStep(initialStep as WizardStep);
    return () => {};
  }, [initialStep]);

  const handleRoomCode = (step: WizardStep, roomCode: number) => {
    localStorage.setItem("roomCode", roomCode.toString());
    router.push(`/game/${roomCode}`);

    (socket as Socket).emit(
      PlayerEvent.JoinRoomByRoomCode,
      localStorage.getItem("playerId"),
      roomCode,
      (r: SocketCallback) => {
        console.log(r);
        if (r.status === "OK") {
          setStep(step);
        }
      }
    );
  };

  const handleName = (step: WizardStep, name: string) => {
    (socket as Socket).emit(
      PlayerEvent.JoinRoomWithName,
      room.id,
      name,
      (r: SocketCallback) => {
        const resData = r.data;
        if (resData) {
          setPlayerId(resData?.playerId as string);
          localStorage.setItem("playerId", resData?.playerId as string);
          setStep(step);
        }
        console.log(r);
      }
    );
  };

  const handleGroup = (step: WizardStep, group: Group) => {
    (socket as Socket).emit(
      PlayerEvent.JoinGroup,
      group.id,
      room.id,
      playerId,
      (r: SocketCallback) => {
        console.log(r);
        if (r.status === "OK") {
          setStep(step);
        }
      }
    );
  };

  const requestLobby = (): void => {
    (socket as Socket).emit(
      PlayerEvent.RequestLobby,
      room.id,
      playerId,
      console.log
    );
  };

  return (
    <Page valign="center">
      <Panel>
        {(() => {
          switch (step) {
            case WizardStep.RoomCode:
              return <WizardRoomCode setStep={handleRoomCode} />;
            case WizardStep.Name:
              return <WizardName setStep={handleName} />;
            case WizardStep.Group:
              if (room && room.groups?.length) {
                return (
                  <WizardGroup
                    groups={room.groups}
                    setStep={handleGroup}
                  />
                );
              } else {
                return <WizardInfo onClick={() => requestLobby()} />;
              }
            case WizardStep.Info:
              return <WizardInfo onClick={() => requestLobby()} />;
            default:
              return <>Fail</>;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
