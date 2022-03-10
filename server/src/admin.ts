import { randomUUID } from "crypto";
import { Admin, RoomDto, ViewName } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

export const startGame = () => {};

export const registerGame = (socket: Socket) => {
  const roomName = randomUUID();
  const adminId = randomUUID();
  const gameCode = Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().toISOString();
  const room: RoomDto = {
    id: roomName,
    socketId: socket.id,
    admin: {
      id: adminId,
    } as Admin,
    gameCode: gameCode,
    players: [],
    teams: [],
    active: true,
    locked: false,
    startDate: timestamp,
  };
  socket.join(roomName);
  socket.emit("message", "You have created the following room:", room);
  socket.emit("to", ViewName.Lobby);
  gamesStore.getState().addRoom(room);
};

export const updateRoomDto = (room: Partial<RoomDto>) => {
  gamesStore.getState().updateRoom(room as RoomDto);
};

export const reset = (socket: Socket) => {
  socket.broadcast.emit("to", ViewName.Wizard);
};

export const disconnectAll = (socket: Socket) => {
  socket.removeAllListeners();
};
