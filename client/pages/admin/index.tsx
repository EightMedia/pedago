import {
  AdminEvent,
  Event,
  Group,
  Player,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { RoomContext } from "../../contexts/RoomContext";
import { SocketContext } from "../../contexts/SocketContext";
import { getAdminGameType } from "../../factories/AdminGame.factory";
import {
  getAdminLobbyType,
  getLobbyRoom
} from "../../factories/AdminLobby.factory";
import { getWizardData } from "../../factories/AdminWizard.factory";
import { getResultData } from "../../factories/Result.factory";
import {
  ResultGroup,
  ResultSet,
  ResultStep
} from "../../lib/components/Result/Result.types";
import { useSocket } from "../../lib/utils/useSocket.util";
import { Game } from "../../lib/views/admin/Game";
import { GameScene } from "../../lib/views/admin/Game/Game.types";
import { Lobby } from "../../lib/views/admin/Lobby";
import { LobbyStep } from "../../lib/views/admin/Lobby/Lobby.types";
import { Result } from "../../lib/views/admin/Result";
import { Wizard } from "../../lib/views/admin/Wizard";
import { WizardStep } from "../../lib/views/admin/Wizard/Wizard.types";
import TimerProvider from "../../providers/Timer.provider";

const AdminGame = () => {
  const socket: Socket | null = useSocket(
    process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:80"
  );
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [lobbyStep, setLobbyStep] = useState<LobbyStep>(LobbyStep.Lobby);
  const [gameScene, setGameScene] = useState<GameScene>(GameScene.Onboarding);
  const [timer, setTimer] = useState<number>(0);

  let localRoom: string | null = "";
  if (typeof window !== "undefined") {
    localRoom = localStorage.getItem("room");
  }

  const handleRegisterGame = (room: Partial<RoomDto>): void => {
    if (socket) {
      socket.emit(AdminEvent.RegisterGame, room, (res: SocketCallback) => {
        if (res) console.log(res.message);
        setRoom(res?.data?.room as RoomDto);
        localStorage.setItem(
          "room",
          JSON.stringify(res?.data?.room as RoomDto)
        );
      });
    }
  };

  useEffect(() => {
    if (localRoom) {
      const parsedRoom = JSON.parse(localRoom);
      if (socket) {
        socket.emit(
          AdminEvent.RegisterGame,
          parsedRoom,
          (res: SocketCallback) => {
            setRoom(res?.data?.room as RoomDto);
            localStorage.setItem(
              "room",
              JSON.stringify(res?.data?.room as RoomDto)
            );
            console.log(res);
          }
        );
      }
    }
  }, [localRoom, socket]);

  useEffect(() => {
    if (socket) {
      socket.on(Event.To, setView);
      socket.on(Event.Message, console.warn);
      socket.on(Event.Room, (r: RoomDto) => {
        setRoom(r);
        setTimer(r.timerStamp);
      });
      socket.on(Event.PlayerList, setPlayerList);
      socket.on(AdminEvent.LobbyStep, (setToInfo: boolean) => {
        setLobbyStep(setToInfo ? LobbyStep.Info : LobbyStep.Lobby);
      });
      socket.on(AdminEvent.GameScene, (setToOnBoarding: boolean) =>
        setToOnBoarding
          ? setGameScene(GameScene.Onboarding)
          : setGameScene(GameScene.Round)
      );
    }
  }, [socket]);

  return (
    <SocketContext.Provider value={socket}>
      <RoomContext.Provider value={room}>
        <TimerProvider timeStamp={timer}>
          {(() => {
            switch (view.name) {
              case ViewName.Wizard:
                return (
                  <Wizard
                    data={getWizardData(room)}
                    initialStep={WizardStep.Name}
                    handleRegisterGame={handleRegisterGame}
                  />
                );
              case ViewName.Lobby:
                return (
                  <Lobby
                    room={getLobbyRoom(room)}
                    groups={getAdminLobbyType(
                      room.groups as Group[],
                      playerList
                    )}
                    initialStep={lobbyStep}
                  />
                );
              case ViewName.Game:
                return (
                  <Game
                    {...getAdminGameType(room as RoomDto)}
                    initialScene={gameScene}
                  />
                );
              case ViewName.Result:
                return (
                  <Result
                    initialStep={ResultStep.Loader}
                    data={
                      getResultData(room, null) as {
                        me?: ResultSet;
                        groups: ResultGroup[];
                      }
                    }
                  />
                );
              default:
                return <>ERROR: ViewName not found</>;
            }
          })()}
        </TimerProvider>
      </RoomContext.Provider>
    </SocketContext.Provider>
  );
};

export default AdminGame;
