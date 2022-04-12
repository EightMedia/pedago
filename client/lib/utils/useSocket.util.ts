import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export function useSocket(url: string) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url, {
      withCredentials: true,
      extraHeaders: {
        "pedago-header": "abcd",
      },
      transports: ['websocket', 'polling']
    });
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }
    return cleanup;
  }, [url]);

  return socket;
}
