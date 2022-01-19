import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on("connection", (socket) => {
  socket.emit("now", {
    message: "Hello",
  });
});

httpServer.listen(3000);
