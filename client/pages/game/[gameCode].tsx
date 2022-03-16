import { SocketCallback, ViewName } from "models";
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

    socketIo.emit("playerId", localStorage.getItem("playerId"));
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
  const [view, setView] = useState<ViewName>(ViewName.Lobby);
  const [res, setRes] = useState<SocketCallback>({} as SocketCallback);

  const handleClick = (value: ViewName, name: string): void => {
    console.log(value);
  };

  const handleEmit = (value: ViewName): void => {
    (socket as Socket).emit("to", { name: value });
  };

  const handleMessage = (v: any) => {
    console.log(v);
  };

  const router = useRouter();
  const gameCode = parseInt(router.query.gameCode as string, 10);

  useEffect(() => {
    if (socket) {
      (socket as Socket).emit(
        "joinRoomByGameCode",
        undefined,
        gameCode,
        setRes
      );
    }
  }, [socket, gameCode]);

  useEffect(() => {
    if (socket) {
      socket.on("to", setView);
      socket.on("message", handleMessage);
    }
  }, [socket]);

  return (
    <Page>
      {(() => {
        switch (view) {
          case ViewName.Wizard:
            return (
              <Wizard
                handleEmit={handleEmit}
                groups={[]}
                initialStep={WizardStep.RoomCode}
              />
            );
          case ViewName.Lobby:
            return <Lobby round={1} roundMax={6} groups={[]} />;
          case ViewName.Game:
            return (
              <Game
                autoPlay={true}
                handleEmit={handleEmit}
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
