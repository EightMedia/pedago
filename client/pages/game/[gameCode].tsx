import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { ViewName, ViewState, initialViewState } from "models";
import Wizard from "../../lib/views/game/Wizard/Wizard";
import { Game } from "../../lib/views/game/Game";
import Lobby from "../../lib/views/game/Lobby/Lobby";
import Result from "../../lib/views/game/Result/Result";

function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;

    // should only run once and not on every re-render,
    // so pass an empty array
  }, []);

  return socket;
}

const GameCode = () => {
  const socket: any = useSocket("http://localhost:3001");
  const [view, setView] = useState(initialViewState);

  const handleClick = (value: ViewName): void => {
    socket.emit("to", { name: value });
  };

  useEffect(() => {
    if (socket) {
      socket.on("to", (v: ViewState) => setView(v));
    }
  }, [socket, view]);

  const router = useRouter();
  const gameCode = router.query.gameCode;

  return (
    <div>
      <h1>Joining game {gameCode}</h1>
      {(() => {
        switch (view.name) {
          case ViewName.Wizard:
            return <Wizard handleClick={handleClick} />;
          case ViewName.Lobby:
            return <Lobby handleClick={handleClick} />;
          case ViewName.Game:
            return <Game handleClick={handleClick} />;
          case ViewName.Result:
            return <Result handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default GameCode;
