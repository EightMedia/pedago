import {
  AdminEvent,
  Event,
  Player,
  RoomDto,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { Page } from "../../lib/components/Page";
import { Game } from "../../lib/views/admin/Game";
import { Lobby } from "../../lib/views/admin/Lobby";
import { Result } from "../../lib/views/admin/Result";
import { Wizard } from "../../lib/views/admin/Wizard";

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

const AdminGame = () => {
  const socket: Socket | null = useSocket("http://localhost:3001");
  const [view, setView] = useState<ViewState>({ name: ViewName.Wizard });
  const [room, setRoom] = useState<RoomDto>();
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [teams, setTeams] = useState<Player[][]>([]);
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
        socket.emit(AdminEvent.RegisterGame, parsedRoom, (res: SocketCallback) => {
          setRoom(res?.data?.room as RoomDto);
          localStorage.setItem(
            "room",
            JSON.stringify(res?.data?.room as RoomDto)
          );
          console.log(res)
        })
      }
    }
  }, [localRoom, socket]);


  useEffect(() => {
    if (socket) {
      socket.on(Event.To, setView);
      socket.on(Event.Message, console.warn);
      socket.on(Event.PlayerList, setPlayerList);
      socket.on(Event.Teams, setTeams);
      socket.on(Event.Round, setRound);
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
                socket={socket as Socket}
                playerList={playerList}
                room={room as RoomDto}
              />
            );
          case ViewName.Game:
            return (
              <Game
                handleView={handleView}
                teams={teams}
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
  );
};

export default AdminGame;
