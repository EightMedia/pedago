import {
  AdminEvent,
  Event,
  initialViewState,
  RoomDto,
  SocketCallback,
  ViewName
} from "models";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

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
  const [view, setView] = useState(initialViewState);
  const [res, setRes] = useState<SocketCallback>();
  const mockRoom: Partial<RoomDto> = {
    admin: {
      name: "mocker",
      email: "asdf@asdf.com",
    },
  };

  const handleClick = (value: ViewName): void => {
    (socket as Socket).emit(Event.To, value);
    (socket as Socket).emit(AdminEvent.RegisterGame, mockRoom, (res: any) => {
      console.log("register done", res.data.roomCode);
      setRes(res);
    });
    (socket as Socket).on(Event.PlayerList, (v) => {
      console.log("Players in the lobby:", v);
    });
  };
  useEffect(() => {
    if (socket) {
      socket.on(Event.To, setView);
      socket.on(Event.Message, console.warn);
    }
  }, [socket]);

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="participant-count"></div>
          <div className="logo">pedago</div>
          <div className="button-group">
            <button>Instellingen</button>
            <button>Uitleg</button>
          </div>
        </div>
      </div>
      <button onClick={() => handleClick(ViewName.Wizard)}>Start game</button>
    </>
  );
};

export default AdminGame;
