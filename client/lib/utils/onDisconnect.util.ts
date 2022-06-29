import { NextRouter } from "next/router";

export const onDisconnect = (reason: string, router: NextRouter) => {
  switch (reason) {
    case "io client disconnect":
      console.log(
        "The socket was manually disconnected using socket.disconnect()"
      );
      break;
    case "io server disconnect":
      console.log(
        "The server has forcefully disconnected the socket with socket.disconnect()"
      );
      break;
    case "ping timeout":
      console.log(
        "The server did not send a PING within the pingInterval + pingTimeout range"
      );
      router.reload();
      break;
    case "transport close":
      console.log(
        "The connection was closed (example: the user has lost connection, or the network was changed from WiFi to 4G)"
      );
      router.reload();
      break;
    case "transport error":
      console.log(
        "The connection has encountered an error (example: the server was killed during a HTTP long-polling cycle)"
      );
      router.reload();
      break;
    default:
      console.log("Disconnected for unknown reason");
      router.reload();
  }
};
