import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { Game } from "../../lib/views/game/Game";
import { Lobby } from "../../lib/views/game/Lobby/Lobby";
import { Result } from "../../lib/views/game/Result/Result";
import { Wizard } from "../../lib/views/game/Wizard";
import { ViewName, ViewState, initialViewState } from "models";
import { Page } from "../../lib/components/Page";
import { WizardSteps } from "../../lib/views/game/Wizard/Wizard.types";

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

  const handleEmit = (value: ViewName): void => {
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
    <Page>
      {(() => {
        switch (view.name) {
          case ViewName.Wizard:
            return (
              <Wizard
                handleEmit={handleEmit}
                initialStep={WizardSteps.Name}
                groups={[]}
              />
            );
          case ViewName.Lobby:
            return <Lobby handleEmit={handleEmit} />;
          case ViewName.Game:
            return <Game handleEmit={handleEmit} />;
          case ViewName.Result:
            return <Result />;
          default:
            return null;
        }
      })()}
    </Page>
  );
};
export default GameCode;
