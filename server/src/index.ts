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
  console.log("a user connected with socket ID: ", socket.id);

  // does this emit to all users?
  socket.emit("message", {
    message: "Hello you have connected",
  });

  // send messages
  socket.on("message", (data) => {
    const { room, msg, to } = data;
    console.log("Message sent to " + to + " with data: ", data);
    if (to === "room") {
      io.to(room).emit("message", msg);
    }
    if (to === "me") {
      socket.emit("message", msg);
    }
    if (to === "all") {
      io.emit("message", msg);
    }
  });

  // create room
  socket.on("createRoom", (data) => {
    console.log("User " + socket.id + " wants to create room: ", data);
    socket.join(data);
    // string for current timestamp:
    const timestamp = new Date().getTime().toString();
    // create room in games object
    games[data] = {
      players: {},
      admin: socket.id,
      active: true,
      started: timestamp,
    };
    socket.emit("message", {
      message: "You created a room",
    });
  });

  // joinRoom
  socket.on("joinRoom", (data) => {
    // console.log("joinRoom sent to us with data: ", data);
    const userId = socket.id;
    const { room, name } = data;
    // socket.broadcast.emit("newData", games);
    console.log(
      "User " + userId + " wants to join room " + room + " with name " + name
    );

    // check if room exists
    let msg;
    const roomExists = room in games;
    if (roomExists) {
      socket.join(room);
      games[room].players[userId] = { name: name, id: userId };
      socket
        .to(room)
        .emit("message", `${games[room].players[userId].name} joined`);
      msg = "You joined room " + room;
    } else {
      msg = "Room " + room + " does not exist.";
    }

    socket.emit("message", msg);
  });

  socket.onAny((eventName, ...args) => {
    console.log("event: ", eventName, args);
    io.emit("newData", games);
  });

  // kill all connections
  socket.on("disconnect", () => {
    socket.removeAllListeners();
  });
});

httpServer.listen(3001);
