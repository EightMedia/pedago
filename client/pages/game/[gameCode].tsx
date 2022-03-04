import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import GameGame from "../../views/game/Game/GameGame";
import GameLobby from "../../views/game/Lobby/GameLobby";
import GameResult from "../../views/game/Result/GameResult";
import GameWizard from "../../views/game/Wizard/GameWizard";
import { ViewName, ViewState, initialViewState } from 'models'

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
    socket.emit('to', { name: value })
  }

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
            return (<GameWizard handleClick={handleClick} />)
          case ViewName.Lobby:
            return <GameLobby handleClick={handleClick} />
          case ViewName.Game:
            return <GameGame handleClick={handleClick} />
          case ViewName.Result:
            return <GameResult handleClick={handleClick} />
          default:
            return null;
        }
      })()}
    </div>
  );
};
export default GameMain;
