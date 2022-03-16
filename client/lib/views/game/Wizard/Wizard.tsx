import { PlayerEvent, RoomDto, SocketCallback } from "models";
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
  response,
  handleEmit,
  initialStep,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep as WizardStep);
  const [res, setRes] = useState<SocketCallback>({} as SocketCallback);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);

  useEffect(() => {
    setRes(response as SocketCallback);
  }, [response]);

  useEffect(() => {
    setStep(initialStep as WizardStep);
  }, [initialStep])

  const handleGameCode = (step: WizardStep, gameCode: number) => {
    (socket as Socket).emit(
      PlayerEvent.JoinRoomByGameCode,
      localStorage.getItem("playerId"),
      gameCode,
      setRes
    );
    if (res.status === "OK") {
      setStep(step);
    }
    console.log(res);
  };

  const handleName = (step: WizardStep, name: string) => {
    (socket as Socket).emit(
      PlayerEvent.JoinRoomWithName,
      response?.data?.roomId || res?.data?.roomId,
      name,
      (cb: SocketCallback) => setRoom(cb?.data?.room as RoomDto)
    );
    setStep(step);
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
                    setStep={setStep}
                  />
                );
              } else {
                return <WizardInfo onClick={() => handleEmit(res)} />;
              }
            case WizardStep.Info:
              return <WizardInfo onClick={() => handleEmit(res)} />;
            default:
              return <>Fail</>;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
