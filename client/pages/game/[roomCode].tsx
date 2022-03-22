import {
  Event, Player,
  PlayerEvent,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Page } from "../../lib/components/Page";
import { Game } from "../../lib/views/game/Game";
import { GameScenes } from "../../lib/views/game/Game/Game.types";
import { Lobby } from "../../lib/views/game/Lobby";
import { getLobbyType } from "../../lib/views/game/Lobby/factories/Lobby.factory";
import { PlayerMatch } from "../../lib/views/game/PlayerMatch/PlayerMatch";
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

const roomCode = () => {
  const socket: Socket | null = useSocket("http://localhost:3001");
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [wizardStep, setWizardStep] = useState<WizardStep>(WizardStep.RoomCode);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [round, setRound] = useState<number>(1);
  const [teams, setTeams] = useState<Player[][]>([]);

  const ROUND_MAX = 6;
  let playerId: string | null = "";

  const handleMessage = (v: any) => {
    console.log(v);
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
      socket.on(Event.Teams, setTeams)
    }
  }, [socket]);

  return (
    <Page>
      {(() => {
        switch (view.name) {
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
                {...getLobbyType(socket as Socket, round, ROUND_MAX, room, playerList)}
              />
            );
          case ViewName.PlayerMatch:
            return (
              <PlayerMatch
                socket={socket as Socket}
                round={round}
                roundMax={ROUND_MAX}
                teams={teams}
                room={room as RoomDto}
                playerId={playerId as string}
              />
            );
          case ViewName.WaitingScreen:
            return <div>Waiting for other player</div>
          case ViewName.Game:
            return (
              <Game
                handleEmit={() => {}}
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
  );
};

export default roomCode;
