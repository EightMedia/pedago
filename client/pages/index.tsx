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
  const [joinRoomName , setJoinRoomName] = useState('some room');
  const [createRoomName , setCreateRoomName] = useState('some room');
  const [msg , setMsg] = useState('a message');
  const [name , setName] = useState('John Doe');

  useEffect(() => {
    function handleEvent(payload:any) {
      console.log(payload) 
      setSome(JSON.stringify(payload));
    }
    if (socket) {
      socket.on('now', handleEvent);
      socket.on('view', handleEvent);
    }
  }, [socket, setSome]);

  const joinRoom = () => {
    console.log('Joining room', joinRoomName);
    socket.emit("joinRoom", joinRoomName);
  }

  const createRoom = () => {
    console.log('Creating room', createRoomName);
    socket.emit("createRoom", createRoomName);
  }

  const sendMsg = () => {
    console.log('Sending msg', msg);
    socket.emit("msg", {room: joinRoomName, msg: msg});
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
        <button onClick={sendMsg}>Send</button>
      </section>
      <pre>{some}</pre>
    </div>
  )
}
export default ContentPage;