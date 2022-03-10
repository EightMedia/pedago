import { SocketCallback, ViewName } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Game } from "../../lib/views/game/Game";

function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    socketIo.emit('playerId', localStorage.getItem('playerId'));
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

  const handleClick = (value: ViewName): void => {
    (socket as Socket).emit("to", value);
    (socket as Socket).emit("playerId", socket?.id);
    (socket as Socket).emit("joinRoomByGameCode", undefined, gameCode, (res: SocketCallback) => {
      console.log(res);
      (socket as Socket).emit("joinRoomWithName", res?.data?.roomId, 'henk', (res: SocketCallback) => {
        console.log(res);
      });
    });
  };

  const handleMessage = (v: any) => {
    console.log(v);
  }

  useEffect(() => {
    if (socket) {
      socket.on("to", setView);
      socket.on("message", handleMessage)
    }
  }, [socket]);

  const router = useRouter();
  const gameCode = parseInt(router.query.gameCode as string, 10);

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
