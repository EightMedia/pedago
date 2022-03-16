import { Event, PlayerEvent, SocketCallback, ViewName } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Page } from "../../lib/components/Page";
import { Game } from "../../lib/views/game/Game";
import { GameScenes } from "../../lib/views/game/Game/Game.types";
import { Lobby } from "../../lib/views/game/Lobby";
import { Result } from "../../lib/views/game/Result/Result";
import { Wizard } from "../../lib/views/game/Wizard";
import { WizardStep } from "../../lib/views/game/Wizard/Wizard.types";

function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, [url]);

  return socket;
}

const GameCode = () => {
  const socket: Socket | null = useSocket("http://localhost:3001");
  const [view, setView] = useState<ViewName>(ViewName.Wizard);
  const [res, setRes] = useState<SocketCallback>({} as SocketCallback);
  const [step, setStep] = useState<WizardStep>();

  const requestLobby = (response: SocketCallback): void => {
    (socket as Socket).emit(
      PlayerEvent.RequestLobby,
      response?.data?.roomId,
      response?.data?.playerId,
      (r: SocketCallback) => {
        console.log(r);
      }
    );
  };

  const handleMessage = (v: any) => {
    console.log(v);
  };

  const router = useRouter();
  const gameCode = parseInt(router.query.gameCode as string, 10);

  useEffect(() => {
    if (gameCode && socket) {
      (socket as Socket).emit(
        PlayerEvent.JoinRoomByGameCode,
        localStorage.getItem("playerId"),
        gameCode,
        (response: SocketCallback) => {
          setRes(response);
          if (response.status === "OK") {
            setStep(WizardStep.Name);
            console.log(step)
          } else {
            setStep(WizardStep.RoomCode)
          }
          console.log(response);
        }
      );
    }
  }, [step, socket, gameCode]);

  useEffect(() => {
    if (socket) {
      socket.on(Event.Message, handleMessage);
    }
  }, [socket]);

  return (
    <Page>
      {(() => {
        switch (view) {
          case ViewName.Wizard:
            return (
              <Wizard
                socket={socket as Socket}
                response={res}
                handleEmit={requestLobby}
                initialStep={step}
              />
            );
          case ViewName.Lobby:
            return <Lobby round={1} roundMax={6} groups={[]} />;
          case ViewName.Game:
            return (
              <Game
                autoPlay={true}
                initialScene={GameScenes.Countdown}
                round={0}
                countdownTime={3}
                leadTime={3}
              />
            );
          case ViewName.Result:
            return <Result />;
          default:
            return <>FAIL</>;
        }
      })()}
    </Page>
  );
};

export default GameCode;
