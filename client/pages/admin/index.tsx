import {
  AdminEvent,
  Event,
  Group,
  Player,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState,
} from "models";
import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { RoomContext } from "../../contexts/RoomContext";
import { SocketContext } from "../../contexts/SocketContext";
import { getGroups } from "../../factories/Lobby.factory";
import { Page } from "../../lib/components/Page";
import { useSocket } from "../../lib/utils/useSocket.util";
import { Game } from "../../lib/views/admin/Game";
import { Lobby } from "../../lib/views/admin/Lobby";
import { Result } from "../../lib/views/admin/Result";
import { Wizard } from "../../lib/views/admin/Wizard";

const AdminGame = () => {
  const socket: Socket | null = useSocket(
    process.env.SOCKET_URL || "http://localhost:3001"
  );
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [room, setRoom] = useState<RoomDto>({} as RoomDto);
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [round, setRound] = useState<number>(1);

  let localRoom: string | null = "";
  if (typeof window !== "undefined") {
    localRoom = localStorage.getItem("room");
  }

  const mockRoom: Partial<RoomDto> = {
    admin: {
      name: "mocker",
      email: "asdf@asdf.com",
    },
  };

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
      socket.on(Event.PlayerList, setPlayerList);
      socket.on(Event.Round, () => setRound((r) => r + 1));
      socket.on(Event.Room, setRoom);
      socket.on(Event.PlayerList, (v) => {
        console.log("Players in the lobby:", v);
      });
    }
  }, [socket]);

  const handleView = (view: ViewState) => {
    setView(view);
  };

  const stopRound = () => {
    // emit stopround
    console.log(room);
  };

  return (
    <SocketContext.Provider value={socket}>
      <RoomContext.Provider value={room}>
        <Page>
          {(() => {
            switch (view.name) {
              case ViewName.Wizard:
                return (
                  <Wizard
                    socket={socket as Socket}
                    handleRegisterGame={() => handleRegisterGame(mockRoom)}
                  />
                );
              case ViewName.Lobby:
                return (
                  <Lobby
                    lobbyGroups={getGroups(room?.groups as Group[], playerList)}
                  />
                );
              case ViewName.Game:
                return (
                  <Game
                    handleView={handleView}
                    teams={room?.teams as Player[][]}
                    round={round}
                    stopRound={stopRound}
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

export default AdminGame;
