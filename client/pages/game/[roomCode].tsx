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
import { getLobbyType } from "../../factories/Lobby.factory";
import { getPlayerMatchType } from "../../factories/PlayerMatch.factory";
import { Page } from "../../lib/components/Page";
import { Game } from "../../lib/views/game/Game";
import { GameScenes } from "../../lib/views/game/Game/Game.types";
import { Lobby } from "../../lib/views/game/Lobby";
import { PlayerMatch } from "../../lib/views/game/PlayerMatch/PlayerMatch";
import { Result } from "../../lib/views/game/Result/Result";
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
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [round, setRound] = useState<number>(1);

  const ROUND_MAX = 6;
  let playerId: string | null = "";

  const handleMessage = (v: any) => {
    console.log(v);
  };

  const handleTeamReady = () => {
    (socket as Socket).emit(
      PlayerEvent.StoreTeamReady,
      room.id,
      playerId,
      (res: SocketCallback) => {
        console.log(res);
      }
    );
  };

  if (typeof window !== "undefined") {
    playerId = localStorage.getItem("playerId");
  }

  const router = useRouter();
  const roomCode = parseInt(router.query.roomCode as string, 10);

  useEffect(() => {
    if (roomCode && socket) {
      (socket as Socket).emit(
        PlayerEvent.JoinRoomByRoomCode,
        localStorage.getItem("playerId"),
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
      socket.on(Event.To, (vs) => {
        setRound(vs.data?.round || 1);
        setView(vs);
      });
      socket.on(Event.Room, setRoom);
      socket.on(Event.PlayerList, setPlayerList);
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
                  />
                );
              case ViewName.WaitingScreen:
                return <Waiting />;
              case ViewName.Discuss:
                return (
                  <div>
                    Discussieren maar!
                    <button onClick={() => handleTeamReady()}>
                      Wij zijn klaar
                    </button>
                  </div>
                );
              case ViewName.Game:
                return (
                  <Game
                    autoPlay={true}
                    initialScene={GameScenes.Countdown}
                    round={round}
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
      </RoomContext.Provider>
    </SocketContext.Provider>
  );
};

export default roomCode;
