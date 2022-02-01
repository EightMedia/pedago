import React from "react";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import AdminDashboard from "../views/AdminDashboard";
import CreateGame from "../views/CreateGame";
import JoinGame from "../views/JoinGame";
import Start from "../views/Start";

function useSocket(url: string) {
  const [socket, setSocket] = useState(null);

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

// const SocketContext = React.createContext(null);

const ContentPage = () => {
  const socket: any = useSocket("http://localhost:3001");
  const [some, setSome] = useState("nothing yet");
  const [gameData, setGameData] = useState({});
  const [msg, setMsg] = useState("a message");
  const [view, setView] = useState({ view: "Start", data: {} });

  useEffect(() => {
    if (socket) {
      socket.on("message", setSome);
      socket.on("newData", setGameData);
      socket.on("to", setView);
    }
  }, [socket]);

  const sendMsg = (to: string) => {
    const room = localStorage.getItem("room") || "";
    socket.emit("message", { msg: msg, to: to, room: room });
  };

  return (
    <div>
      {view.view === "Start" && <Start setView={setView} />}
      {view.view === "CreateGame" && <CreateGame socket={socket} />}
      {view.view === "JoinGame" && <JoinGame socket={socket} />}
      {view.view === "AdminDashboard" && (
        <AdminDashboard socket={socket} data={view.data} />
      )}
      <div className="debugging">
        <section>
          <h2>Send message somewhere</h2>
          <input
            type="text"
            name="msg"
            onChange={(e) => setMsg(e.target.value)}
            value={msg}
          />
          <button
            onClick={() => {
              sendMsg("me");
            }}
          >
            Send to me
          </button>
          <button
            onClick={() => {
              sendMsg("room");
            }}
          >
            Send to room
          </button>
          <button
            onClick={() => {
              sendMsg("all");
            }}
          >
            Send to all games
          </button>
        </section>
        <h3>Message</h3>
        <pre>{JSON.stringify(some)}</pre>
        <h3>Game data</h3>
        <pre>{JSON.stringify(gameData, null, 2)}</pre>
        <h3>View</h3>
        <pre>{JSON.stringify(view, null, 2)}</pre>
        <button onClick={() => setView({ view: "Start", data: {} })}>
          RESET
        </button>
      </div>
    </div>
  );
};
export default ContentPage;
