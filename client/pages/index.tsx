import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useSocket(url:string) {
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const socketIo = io(url)

    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect()
    }
    return cleanup

    // should only run once and not on every re-render,
    // so pass an empty array
  }, [])

  return socket
}

const ContentPage = () => {
  
  const socket:any = useSocket('http://localhost:3001')
  const [some, setSome] = useState('nothing yet');
  const [gameData, setGameData] = useState({});
  const [joinRoomName , setJoinRoomName] = useState('some room');
  const [createRoomName , setCreateRoomName] = useState('some room');
  const [msg , setMsg] = useState('a message');
  const [name , setName] = useState('John Doe');

  useEffect(() => {
    // set the "some" var
    function handleEvent(payload:any) {
      setSome(JSON.stringify(payload));
    }
    // set the "gameData" var
    function handleData(payload:any) {
      setGameData(payload);
    }
    // catch events
    if (socket) {
      socket.on('now', handleEvent);
      socket.on('newData', handleData);
      // socket.on('view', handleEvent);
    }
  }, [socket, setSome]);

  const joinRoom = () => {
    const data = {room: joinRoomName, name: name};
    socket.emit("joinRoom", data);
  }

  const createRoom = () => {
    socket.emit("createRoom", createRoomName);
  }

  const sendMsg = (to:string) => {
    socket.emit("msg", {room: joinRoomName, msg: msg, to: to});
  }

  return (
    <div>
      <h1>Socket concept tests</h1>
      <section>
        <h2>Create room!</h2>
        <input type="text" name="createRoom" onChange={e => setCreateRoomName(e.target.value)} value={createRoomName} />
        <button onClick={createRoom}>create room</button>
      </section>
      <section>
        <h2>Join room</h2>
        <input type="text" name="joinRoom" onChange={e => setJoinRoomName(e.target.value)} value={joinRoomName} />
        <input type="text" name="name" onChange={e => setName(e.target.value)} value={name} />
        <button onClick={joinRoom}>join room</button>
      </section>
      <section>
        <h2>Send message to joined room</h2>
        <input type="text" name="msg" onChange={e => setMsg(e.target.value)} value={msg} />
        <button onClick={() => {sendMsg('me')}}>Send to me</button>
        <button onClick={() => {sendMsg('room')}}>Send to room</button>
        <button onClick={() => {sendMsg('all')}}>Send to all</button>
      </section>
      <h3>Message</h3>
      <pre>{some}</pre>
      <h3>Game data</h3>
      <pre>{JSON.stringify(gameData)}</pre>
    </div>
  )
}
export default ContentPage;