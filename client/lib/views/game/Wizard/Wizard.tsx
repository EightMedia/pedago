import { PlayerEvent, SocketCallback, ViewName } from "models";
import { memo, useEffect, useState } from "react";
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
  groups,
  initialStep = WizardStep.RoomCode,
}: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep);
  const [res, setRes] = useState<SocketCallback>({} as SocketCallback);

  useEffect(() => {
    setRes(response as SocketCallback);
  }, [response]);

  const handleGameCode = (step: WizardStep, gameCode: number) => {
    socket.emit(
      PlayerEvent.JoinRoomByGameCode,
      localStorage.getItem("playerId"),
      gameCode,
      setRes
    );
    setStep(step);
  };

  const handleName = (step: WizardStep, name: string) => {
    socket.emit(
      PlayerEvent.JoinRoomWithName,
      response?.data?.roomId,
      name,
      console.log
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
              if (groups?.length) {
                return <WizardGroup groups={groups} setStep={setStep} />;
              } else {
                return <WizardInfo onClick={() => handleEmit(ViewName.Game)} />;
              }
            case WizardStep.Info:
              return <WizardInfo onClick={() => handleEmit(View)} />;
            default:
              return null;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
