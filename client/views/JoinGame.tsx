import { useState } from "react";

const JoinGame = ({ socket }: { socket: any }) => {
  const [joinRoomName, setJoinRoomName] = useState("some room");
  const [name, setName] = useState("John Doe");

  const joinRoom = () => {
    localStorage.setItem("room", joinRoomName);
    localStorage.setItem("name", name);
    const data = { room: joinRoomName, name: name };
    socket.emit("joinRoom", data);
  };

  return (
    <div>
      <h1>Joining game!</h1>
      <section>
        <h2>Join room</h2>
        <input
          type="text"
          onChange={(e) => setJoinRoomName(e.target.value)}
          value={joinRoomName}
        />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button onClick={joinRoom}>join room</button>
      </section>
    </div>
  );
};
export default JoinGame;
