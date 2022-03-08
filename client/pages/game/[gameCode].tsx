import { initialViewState, ViewName, ViewState } from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import GameGame from "../../lib/views/landing/game/Game/GameGame";
import GameLobby from "../../lib/views/landing/game/Lobby/GameLobby";
import GameResult from "../../lib/views/landing/game/Result/GameResult";
import GameWizard from "../../lib/views/landing/game/Wizard/GameWizard";

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

const GameMain = () => {
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
            return <GameWizard handleClick={handleClick} />;
          case ViewName.Lobby:
            return <GameLobby handleClick={handleClick} />;
          case ViewName.Game:
            return <GameGame handleClick={handleClick} />;
          case ViewName.Result:
            return <GameResult handleClick={handleClick} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default GameMain;
