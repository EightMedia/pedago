import { randomUUID } from "crypto";
import { Admin, RoomDto, SocketCallback, ViewName } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const registerGame = (
  partialRoom: RoomDto,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const roomId = randomUUID();
  const adminId = randomUUID();
  const gameCode = Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().toISOString();
  const room: RoomDto = {
    ...partialRoom,
    id: roomId,
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
  socket.join(roomId);
  callback({
    status: "OK",
    message: `You have created the following room: ${room}`,
    data: {
      roomId: roomId,
      gameCode: gameCode,
    },
  });
  socket.emit("to", { name: ViewName.Lobby });
  store.addRoom(room);
};

export const startGame = (roomId: string, socket: Socket) => {
  store.makeTeams(roomId);
  socket.broadcast.to(roomId).emit("to", ViewName.PlayerMatch);
  socket.broadcast.to(roomId).emit("message", `Teams ready for room: ${roomId}`);
};

export const updateRoomDto = (room: Partial<RoomDto>) => {
  store.updateRoom(room as RoomDto);
};

export const reset = (socket: Socket) => {
  socket.broadcast.emit("to", { name: ViewName.Wizard });
};

export const disconnectAll = (socket: Socket) => {
  socket.removeAllListeners();
};
