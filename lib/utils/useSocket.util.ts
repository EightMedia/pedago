import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    fetch(url).then(console.log);
    const socketIo = io();
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, [url]);

  return socket;
}
