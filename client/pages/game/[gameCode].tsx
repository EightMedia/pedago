import {
  Event,
  Group,
  Player,
  PlayerEvent,
  RoomDto,
  SocketCallback,
  ViewName
} from "models";
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
  const [view, setView] = useState<ViewName>(ViewName.Wizard);
  const [wizardStep, setWizardStep] = useState<WizardStep>(WizardStep.RoomCode);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [round, setRound] = useState<number>(1);
  let playerId: string | null = "";

  const handleMessage = (v: any) => {
    console.log(v);
  };

  if (typeof window !== "undefined") {
    playerId = localStorage.getItem("playerId");
  }

  const router = useRouter();
  const gameCode = parseInt(router.query.gameCode as string, 10);

  useEffect(() => {
    if (gameCode && socket) {
      (socket as Socket).emit(
        PlayerEvent.JoinRoomByGameCode,
        localStorage.getItem("playerId"),
        gameCode,
        (r: SocketCallback) => {
          if (r.status === "OK") {
            setRoom(r.data?.room as RoomDto);
            setWizardStep(WizardStep.Name);
          } else {
            setWizardStep(WizardStep.RoomCode);
          }
          console.log(r);
        }
      );
    }
  }, [socket, gameCode]);

  useEffect(() => {
    if (socket) {
      socket.on(Event.Message, handleMessage);
      socket.on(Event.To, (vd) => {
        setRound(vd.data?.round || 1);
        setView(vd.name);
      });
      socket.on(Event.Room, setRoom);
      socket.on(Event.PlayerList, setPlayerList);
    }
  }, [socket]);

  return (
    <Page>
      {(() => {
        switch (view) {
          case ViewName.Wizard:
            return (
              <Wizard
                socket={socket as Socket}
                initialStep={wizardStep}
                room={room}
              />
            );
          case ViewName.Lobby:
            return (
              <Lobby
                round={round}
                roundMax={6}
                groups={room?.groups as Group[]}
                playerList={playerList}
                playerId={playerId as string}
              />
            );
          case ViewName.Game:
            return (
              <Game
                handleEmit={() => {}}
                autoPlay={true}
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
