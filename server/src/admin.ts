import { randomUUID } from "crypto";
import { RoomDto, ViewName } from "models";
import { Socket } from "socket.io";
import useGamesStore from "./store/games.store";

const { addRoom, updateRoom } = useGamesStore();

export const startGame = () => {};

export const registerGame = (partialRoom: RoomDto, socket: Socket) => {
  const roomName = randomUUID();
  const adminId = randomUUID();
  const gameCode = Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().getTime().toString();
  const room: RoomDto = {
    ...partialRoom,
    id: roomName,
    admin: {
      id: adminId,
    },
    gameCode: gameCode,
    players: [],
    active: true,
    locked: false,
    startDate: timestamp,
  };
  socket.join(roomName);
  socket.emit("message", "You have created the following room:", room);
  socket.emit("to", { view: ViewName.Lobby, data: { room: room } });
  addRoom(room);
};

export const updateRoomDto = (room: Partial<RoomDto>) => {
  updateRoom(room as RoomDto);
};

export const reset = (socket: Socket) => {
  socket.broadcast.emit("to", { view: ViewName.Wizard, data: {} });
};

export const disconnectAll = (socket: Socket) => {
  socket.removeAllListeners();
};

// how to reconnect to socket if browser fails
