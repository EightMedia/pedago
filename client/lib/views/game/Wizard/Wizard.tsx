import { setCookies } from "cookies-next";
import { Group, PlayerEvent, SocketCallback } from "models";
import { useRouter } from "next/router";
import { memo, useContext, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { LanguageContext } from "../../../../contexts/LanguageContext";
import { RoomContext } from "../../../../contexts/RoomContext";
import { SocketContext } from "../../../../contexts/SocketContext";
import { setPlayerIdToCookies } from "../../../../factories/shared.factory";
import { Logo } from "../../../components/Logo";
import { Page } from "../../../components/Page";
import { PageSlot } from "../../../components/Page/Page";
import { Panel } from "../../../components/Panel";
import { WizardStep, WizardType } from "./Wizard.types";
import { WizardGroup } from "./WizardGroup";
import { WizardInfo } from "./WizardInfo";
import { WizardName } from "./WizardName";
import { WizardRoomCode } from "./WizardRoomCode";

const WizardComponent = ({ initialStep, error }: WizardType) => {
  const [step, setStep] = useState<WizardStep>(initialStep as WizardStep);
  const [playerId, setPlayerId] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string | undefined>(error);
  const router = useRouter();

  const room = useContext(RoomContext);
  const socket = useContext(SocketContext);
  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    setStep(initialStep as WizardStep);
  }, [initialStep]);

  useEffect(() => {
    setErrorMsg(error);
  }, [error]);

  const handleRoomCode = (step: WizardStep, roomCode: number) => {
    (socket as Socket).emit(
      PlayerEvent.RoomCodeExists,
      roomCode,
      (res: SocketCallback) => {
        if (res.status === "OK") {
          if (roomCode) setCookies("roomCode", roomCode.toString());
          router.push(`/game/${roomCode}`);
          setStep(step);
          setErrorMsg(undefined);
        } else {
          const messageObject = res.message as { EN: string; NL: string };
          setErrorMsg(messageObject[lang]);
        }
      }
    );
  };

  const handleName = (step: WizardStep, name: string) => {
    (socket as Socket).emit(
      PlayerEvent.JoinRoomWithName,
      room?.id,
      name,
      (r: SocketCallback) => {
        const resData = r.data;
        if (r.status === "OK") {
          if (resData) {
            setPlayerId(resData?.playerId as string);
            setPlayerIdToCookies(resData?.playerId as string);
            setStep(step);
          }
        } else {
          const messageObject = r.message as { EN: string; NL: string };
          setErrorMsg(messageObject[lang]);
        }
      }
    );
  };

  const handleGroup = (step: WizardStep, group: Group) => {
    (socket as Socket).emit(
      PlayerEvent.JoinGroup,
      group.id,
      room?.id,
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
      room?.id,
      playerId,
      console.log
    );
  };

  return (
    <Page valign="center">
      <PageSlot location="headerCenter">
        <Logo />
      </PageSlot>
      <Panel width={step === WizardStep.Info ? "md" : "sm"}>
        {(() => {
          switch (step) {
            case WizardStep.RoomCode:
              return (
                <WizardRoomCode error={errorMsg} setStep={handleRoomCode} />
              );
            case WizardStep.Name:
              return <WizardName error={errorMsg} setStep={handleName} />;
            case WizardStep.Group:
              if (room && room.groups?.length) {
                return (
                  <WizardGroup groups={room.groups} setStep={handleGroup} />
                );
              } else if (initialStep === WizardStep.Group) {
                return (
                  <WizardGroup
                    setStep={handleGroup}
                    groups={[
                      { id: "0", name: "Demo group 1" },
                      { id: "1", name: "Demo group 2" },
                    ]}
                  />
                );
              } else {
                return <WizardInfo onClick={() => requestLobby()} />;
              }
            case WizardStep.Info:
              return <WizardInfo onClick={() => requestLobby()} />;
            default:
              return <>Wizard Fail</>;
          }
        })()}
      </Panel>
    </Page>
  );
};

export const Wizard = memo(WizardComponent);
