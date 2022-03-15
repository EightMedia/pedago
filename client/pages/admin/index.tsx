import { initialViewState, RoomDto, SocketCallback, ViewName } from "models";
import { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    socketIo.emit('playerId', localStorage.getItem('playerId'));
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
  const mockRoom: Partial<RoomDto>= {
    admin: {
      name: 'mocker',
      email: 'asdf@asdf.com'
    }
  }

  const handleClick = (value: ViewName): void => {
    (socket as Socket).emit("to", value);
    (socket as Socket).emit("registerGame", mockRoom, (res: any) => {
      console.log('register done', res.data.gameCode);
      setRes(res);
    });
  };

  const startGame = () => {
    (socket as Socket).emit("startGame", res?.data?.roomId);
  }

  useEffect(() => {
    if (socket) {
      socket.on("to", setView);
      socket.on("message", console.warn)
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
      <button onClick={() => handleClick(ViewName.Wizard)}>
        Back to Wizard
      </button>
      <button onClick={() => startGame()}>
        Start Game
      </button>
    </>
  );
};

export default AdminGame;
