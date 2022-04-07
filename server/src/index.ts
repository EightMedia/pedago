import express from "express";
import { createServer } from "http";
import {
  AdminEvent,
  Event,
  PlayerEvent,
  RoomDto,
  Round,
  SocketCallback
} from "models";
import { Server, Socket } from "socket.io";
import {
  disconnectAll,
  finishRound,
  registerGame,
  reset,
  startGame,
  updateRoomDto
} from "./admin";
import {
  finishRoundByAdmin,
  gameStart,
  getLatestSortOrder,
  joinGroup,
  joinRoomByRoomCode,
  joinRoomWithName,
  requestLobby,
  storeRound,
  storeTeamReady
} from "./player";
require("dotenv").config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:8000", process.env.SOCKET_ORIGIN as string],
  },
});
console.log("--- Pedago Server started at port 3001 ---");

io.on("connection", (socket: Socket) => {
  console.log("a user connected with socket ID: ", socket.id);
  
  // send welcome to user on this socket
  socket.emit(Event.Message, "Hello you have connected to Pedago");

  // Event Listeners

  // Admin Listeners
  socket.on(
    AdminEvent.RegisterGame,
    (room: RoomDto, callback: (args: SocketCallback) => void) =>
      registerGame(room, socket, callback)
  );
  socket.on(
    AdminEvent.StartGame,
    (roomId: string, callback: (args: SocketCallback) => void) =>
      startGame(roomId, socket, callback)
  );
  socket.on(AdminEvent.UpdateRoom, (room: Partial<RoomDto>) =>
    updateRoomDto(room)
  );
  socket.on(
    AdminEvent.FinishRound,
    (
      roomId: string,
      roundNo: number,
      callback: (args: SocketCallback) => void
    ) => finishRound(roomId, roundNo, socket, callback)
  );
  socket.on(AdminEvent.Reset, () => reset(socket));
  socket.on(AdminEvent.Disconnect, () => disconnectAll(socket));

  // Player Listeners
  socket.on(
    PlayerEvent.JoinRoomByRoomCode,
    (
      playerId: string | undefined,
      roomCode: number,
      callback: (args: SocketCallback) => void
    ) => joinRoomByRoomCode(playerId, roomCode, socket, callback)
  );
  socket.on(
    PlayerEvent.JoinRoomWithName,
    (roomId: string, name: string, callback: (args: SocketCallback) => void) =>
      joinRoomWithName(roomId, name, socket, callback)
  );
  socket.on(
    PlayerEvent.JoinGroup,
    (
      groupId: string,
      roomId: string,
      playerId: string,
      callback: (args: SocketCallback) => void
    ) => joinGroup(groupId, roomId, playerId, socket, callback)
  );
  socket.on(
    PlayerEvent.RequestLobby,
    (
      roomId: string,
      playerId: string,
      callback: (args: SocketCallback) => void
    ) => requestLobby(roomId, playerId, socket, callback)
  );
  socket.on(
    PlayerEvent.GameStart,
    (
      roomId: string,
      playerId: string,
      callback: (args: SocketCallback) => void
    ) => gameStart(roomId, playerId, socket, callback)
  );
  socket.on(
    PlayerEvent.StoreRound,
    (
      roomId: string,
      playerId: string,
      round: Round,
      callback: (args: SocketCallback) => void
    ) => storeRound(roomId, playerId, round, socket, callback)
  );
  socket.on(
    PlayerEvent.FinishRoundByAdmin,
    (
      roomId: string,
      playerId: string,
      round: Round,
      callback: (args: SocketCallback) => void
    ) => finishRoundByAdmin(roomId, playerId, round, socket, callback)
  );
  socket.on(
    PlayerEvent.SortOrder,
    (
      roomId: string,
      round: number,
      playerId: string,
      callback: (args: SocketCallback) => void
    ) => getLatestSortOrder(roomId, round, playerId, callback)
  );
  socket.on(
    PlayerEvent.StoreTeamReady,
    (
      roomId: string,
      playerId: string,
      callback: (args: SocketCallback) => void
    ) => storeTeamReady(roomId, playerId, socket, callback)
  );
});

httpServer.listen(3001);
