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
  const [room , setRoom] = useState('dark');

  useEffect(() => {
    function handleEvent(payload:any) {
      console.log(payload) 
      setSome(JSON.stringify(payload));
    }
    if (socket) {
      socket.on('now', handleEvent)
    }
  }, [socket, setSome]);

  const sendShizzles = () => {
    console.log('sending shizzles', room);
    socket.emit("test", room);
  }

  return (
    <div>
      <h1>Create room!</h1>
      <div>{some}</div>
      <input type="text" name="room" onChange={event => setRoom(event.target.value)} value={room} />
      <button onClick={sendShizzles}>Send The Shizzles</button>
      <pre>{some}</pre>
    </div>
  )
}
export default ContentPage;