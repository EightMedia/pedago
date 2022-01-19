import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function useSocket(url) {
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
  
  const socket:any = useSocket('http://192.168.68.106:3000')
  const [some, setSome] = useState('nothing yet');
  
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
    socket.emit("test", "data");
    return;
  }


  return (
    <div>
      <h1>Hello page!</h1>
      <div>{some}</div>
      <button onClick={sendShizzles}>Send The Shizzles</button>
    </div>
  )
}
export default ContentPage;