import express from "express";
import { createServer } from "http";
import { RoomDto, Round, ViewName } from "models";
import { Server, Socket } from "socket.io";
import { disconnectAll, registerGame, reset, startGame, updateRoomDto } from "./admin";
import {
  gameStart,
  joinGroup,
  joinRoomByGameCode,
  joinRoomWithName,
  requestLobby,
  storeRound,
} from "./player";
import gamesStore from "./store/games.store";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:8000"],
  },
});

console.log("--- Pedago Server started at port 3001 ---");

io.on("connection", (socket: Socket) => {
  console.log("a user connected with socket ID: ", socket.id);

  // Check if user exists, by getting a UUID from localStorage 
  socket.on("playerId", id => {
    io.sockets.to(id).emit("message", gamesStore.getState().games);
  })

  // send welcome to user on this socket
  socket.emit("message", "Hello you have connected");

  // begin to send user to start screen
  socket.emit("to", ViewName.Game);

  // METHODS

  //  Admin methods
  socket.on("registerGame", (room: RoomDto, callback) => registerGame(room, socket, callback));
  socket.on("startGame", (roomId: string) => startGame(roomId, socket));
  socket.on("updateRoom", (room: Partial<RoomDto>) => updateRoomDto(room));
  socket.on("reset", () => reset(socket));
  socket.on("disconnect", () => disconnectAll(socket));


  // Player methods
  socket.on("joinRoomByGameCode", (playerId: string | undefined, gameCode: number, callback) =>
    joinRoomByGameCode(playerId, gameCode, socket, callback)
  );
  socket.on("joinRoomWithName", (roomId: string, name: string, callback) =>
    joinRoomWithName(roomId, name, socket, callback)
  );
  socket.on(
    "joinGroup",
    (groupId: string, roomId: string, playerId: string, callback) =>
      joinGroup(groupId, roomId, playerId, socket, callback)
  );
  socket.on("requestLobby", (roomId: string, playerId: string, callback) =>
    requestLobby(roomId, playerId, socket, callback)
  );
  socket.on("gameStart", (roomId: string, playerId: string, callback) => gameStart(roomId, playerId, socket, callback))
  socket.on("storeRound", (roomId: string, playerId: string, round: Round, callback) => storeRound(roomId, playerId, round, socket, callback))

});

httpServer.listen(3001);
