import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:8000"],
  },
});

console.log("--- Pedago Server started at port 3001 ---");

type gameType = any;
const games = {} as { [key: string]: gameType };

io.on("connection", (socket) => {
  console.log("a user connected");

  // does this emit to all users?
  socket.emit("now", {
    message: "Hello you have connected",
  });

  // test
  socket.on("test", (data) => {
    console.log("Test sent to us with data: ", data);
    socket.emit("now", {
      message: "You sent a test",
    });
  });

  // create room
  socket.on("createRoom", (data) => {
    console.log("User " + socket.id + " wants to create room: ", data);
    socket.join(data);
    // string for current timestamp:
    const timestamp = new Date().getTime().toString();
    // create room in games object
    games[data] = {
      players: [],
      admin: socket.id,
      active: true,
      started: timestamp,
    };
    console.log("All current rooms in socket.rooms:", socket.rooms);
    console.log("gamedata: ", games);
    socket.emit("now", {
      message: "You created a room",
    });
  });

  // joinRoom
  socket.on("joinRoom", (data) => {
    // console.log("joinRoom sent to us with data: ", data);
    const userId = socket.id;
    console.log("User " + userId + " wants to join room: ", data);
    // check if room exists
    let msg;
    if (games[data]) {
      socket.join(data);
      games[data].players.push(userId);
      msg = "You joined room " + data;
    } else {
      msg = "Room " + data + " does not exist";
    }
    console.log("gamedata: ", games);

    socket.emit("now", {
      message: msg,
    });
  });

  // kill all connections
  socket.on("disconnect", () => {
    socket.removeAllListeners();
  });
});

httpServer.listen(3001);
