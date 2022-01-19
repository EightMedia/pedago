import express from "express";
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
  console.log("a user connected");
  socket.emit("now", {
    message: "Hello you have connected",
  });

  //test
  socket.on("test", () => {
    console.log('Test sent to us');
    socket.emit("now", {
      message: "You sent a test",
    });
  });

  // kill all connections
  socket.on('disconnect', () => {
    socket.removeAllListeners();
 });

});

httpServer.listen(3000);
