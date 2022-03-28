import {
  Event,
  Player,
  PlayerEvent,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { RoomContext } from "../../contexts/RoomContext";
import { SocketContext } from "../../contexts/SocketContext";
import { getDiscussType } from "../../factories/Discuss.factory";
import { getLobbyType } from "../../factories/Lobby.factory";
import { getPlayerMatchType } from "../../factories/PlayerMatch.factory";
import { getResultData } from "../../factories/Result.factory";
import { getPlayerIdFromLocalStorage } from "../../factories/shared.factory";
import { getWaitingType } from "../../factories/Waiting.factory";
import { Page } from "../../lib/components/Page";
import { Discuss } from "../../lib/views/game/Discuss";
import { DiscussStep } from "../../lib/views/game/Discuss/Discuss.types";
import { Game } from "../../lib/views/game/Game";
import { GameScenes } from "../../lib/views/game/Game/Game.types";
import { Lobby } from "../../lib/views/game/Lobby";
import { PlayerMatch } from "../../lib/views/game/PlayerMatch/PlayerMatch";
import { PlayerMatchSceneEnum } from "../../lib/views/game/PlayerMatch/PlayerMatch.types";
import { Result } from "../../lib/views/game/Result/Result";
import { ResultStep } from "../../lib/views/game/Result/Result.types";
import { Waiting } from "../../lib/views/game/Waiting";
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

const roomCode = () => {
  const socket: Socket | null = useSocket("http://localhost:3001");
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [wizardStep, setWizardStep] = useState<WizardStep>(WizardStep.RoomCode);
  const [playerMatchScene, setPlayerMatchScene] = useState<PlayerMatchSceneEnum>(
    PlayerMatchSceneEnum.Wait
  );
  const [gameScene, setGameScene] = useState<GameScenes>(GameScenes.Countdown);
  const [discussStep, setDiscussStep] = useState<DiscussStep>(
    DiscussStep.Intro
  );
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [round, setRound] = useState<number>(1);

  const ROUND_MAX = 6;
  let playerId: string | null = "";

  const handleMessage = (v: any) => {
    console.log(v);
  };

  const handleBackToSort = () => {
    setView({ name: ViewName.Game });
    setGameScene(GameScenes.Sort);
  };

  if (typeof window !== "undefined") {
    playerId = getPlayerIdFromLocalStorage();
  }

  const router = useRouter();
  const roomCode = parseInt(router.query.roomCode as string, 10);

  useEffect(() => {
    if (roomCode && socket) {
      (socket as Socket).emit(
        PlayerEvent.JoinRoomByRoomCode,
        getPlayerIdFromLocalStorage(),
        roomCode,
        (r: SocketCallback) => {
          if (r.status === "OK") {
            setWizardStep(WizardStep.Name);
          } else {
            setWizardStep(WizardStep.RoomCode);
          }
          console.log(r);
        }
      );
    }
  }, [socket, roomCode]);

  useEffect(() => {
    if (socket) {
      socket.on(Event.Message, handleMessage);
      socket.on(Event.To, setView);
      socket.on(Event.Room, setRoom);
      socket.on(Event.PlayerList, setPlayerList);
      socket.on(Event.Round, () => setRound((r) => r + 1));
      socket.on(PlayerEvent.GameScene, () =>
        setGameScene(GameScenes.Countdown)
      );
      socket.on(PlayerEvent.PlayerMatchScene, (setToWait: boolean) =>
        setPlayerMatchScene(
          setToWait ? PlayerMatchSceneEnum.Wait : PlayerMatchSceneEnum.Match
        )
      );
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      <RoomContext.Provider value={room}>
        <Page>
          {(() => {
            switch (view.name) {
              case ViewName.Wizard:
                return <Wizard initialStep={wizardStep} />;
              case ViewName.Lobby:
                return (
                  <Lobby
                    {...getLobbyType(
                      socket as Socket,
                      round,
                      ROUND_MAX,
                      room,
                      playerList
                    )}
                  />
                );
              case ViewName.PlayerMatch:
                return (
                  <PlayerMatch
                    {...getPlayerMatchType(
                      round,
                      ROUND_MAX,
                      room,
                      playerId as string
                    )}
                    initialScene={playerMatchScene}
                  />
                );
              case ViewName.Game:
                return (
                  <Game
                    autoPlay={true}
                    initialScene={gameScene}
                    round={round}
                    countdownTime={3}
                    leadTime={3}
                  />
                );
              case ViewName.WaitingScreen:
                return (
                  <Waiting
                    {...getWaitingType(
                      round,
                      ROUND_MAX,
                      room,
                      playerId as string
                    )}
                    backToSort={handleBackToSort}
                  />
                );
              case ViewName.Discuss:
                return (
                  <Discuss
                    {...getDiscussType(
                      round,
                      ROUND_MAX,
                      discussStep,
                      false,
                      true,
                      room,
                      playerId as string
                    )}
                  />
                );
              case ViewName.Result:
                return (
                  <Result
                    initialStep={ResultStep.Loader}
                    data={getResultData(room, playerId as string)}
                  />
                );
              default:
                return <>FAIL</>;
            }
          })()}
        </Page>
      </RoomContext.Provider>
    </SocketContext.Provider>
  );
};

export default roomCode;
