import { Group, PlayerEvent, RoomDto, SocketCallback } from "models";
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
  callbackResponse,
  handleEmitRoom,
  initialStep,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep as WizardStep);
  const [res, setRes] = useState<SocketCallback>({} as SocketCallback);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [playerId, setPlayerId] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    setRes(callbackResponse as SocketCallback);
    return () => {};
  }, [callbackResponse]);

  useEffect(() => {
    setStep(initialStep as WizardStep);
    return () => {};
  }, [initialStep]);

  const handleGameCode = (step: WizardStep, gameCode: number) => {
    localStorage.setItem("gameCode", gameCode.toString());
    router.push(`/game/${gameCode}`);

    (socket as Socket).emit(
      PlayerEvent.JoinRoomByGameCode,
      localStorage.getItem("playerId"),
      gameCode,
      (r: SocketCallback) => {
        const responseRoom = r.data?.room;
        if (responseRoom) {
          handleEmitRoom(responseRoom as RoomDto);
        }
      }
    );
    if (res.status === "OK") {
      setStep(step);
    }
    console.log(res);
  };

  const handleName = (step: WizardStep, name: string) => {
    (socket as Socket).emit(
      PlayerEvent.JoinRoomWithName,
      callbackResponse?.data?.roomId || res?.data?.roomId,
      name,
      (r: SocketCallback) => {
        const resData = r.data;
        if (resData) {
          setRoom(resData?.room as RoomDto);
          setPlayerId(resData?.playerId as string);
          localStorage.setItem("playerId", resData?.playerId as string);
          setStep(step);
        } else {
          console.error(r);
        }
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
      (r: SocketCallback) => {
        const responseRoom = r.data?.room;
        handleEmitRoom(responseRoom as RoomDto);
      }
    );
  };

  return (
    <Page valign="center">
      <Panel>
        {(() => {
          switch (step) {
            case WizardStep.RoomCode:
              return <WizardRoomCode setStep={handleGameCode} />;
            case WizardStep.Name:
              return <WizardName setStep={handleName} />;
            case WizardStep.Group:
              if (room && room.groups?.length) {
                return (
                  <WizardGroup
                    groups={room ? room.groups : []}
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
