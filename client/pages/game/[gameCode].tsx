import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { ViewName, ViewState, initialViewState } from "models";
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
  const [view, setView] = useState(initialViewState);

  const handleClick = (value: ViewName): void => {
    (socket as Socket).emit("to", { name: value });
  };

  useEffect(() => {
    if (socket) {
      socket.on("to", setView);
    }
  }, [socket, view]);

  const router = useRouter();
  const gameCode = router.query.gameCode;

  return (
    <div>
      <h1>Joining game {gameCode}</h1>
      {(() => {
        switch (view.name) {
          case ViewName.Game:
            return <Game handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default GameCode;
