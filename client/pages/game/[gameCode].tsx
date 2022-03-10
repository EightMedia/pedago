import { SocketCallback, ViewName } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Game } from "../../lib/views/game/Game";

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

    (socket as Socket).emit(
      "joinRoomWithName",
      res?.data?.roomId,
      name,
      console.log
    );
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
    <div>
      <h1>Joining game {gameCode}</h1>
      {(() => {
        switch (view) {
          case ViewName.Game:
            return <Game handleClick={handleClick} />;
          default:
            return <>FAIL</>;
        }
      })()}
    </div>
  );
};
export default GameCode;
