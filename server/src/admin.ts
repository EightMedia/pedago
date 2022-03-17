import { randomUUID } from "crypto";
import { Admin, Event, RoomDto, SocketCallback, ViewName } from "models";
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
  const roomCode = Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().toISOString();
  const room: RoomDto = {
    ...partialRoom,
    id: roomId,
    socketId: socket.id,
    admin: {
      id: adminId,
    } as Admin,
    roomCode: roomCode,
    players: [],
    groups: [
      { id: "4123rasfasdfg", name: "Grooepie" },
      { id: "asdfasdf", name: "asdf" },
    ],
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
      room: room,
    },
  });
  store.addRoom(room);
  socket.emit(Event.To, { name: ViewName.Lobby });
  socket.emit(Event.Room, room);
};

export const startGame = (
  roomId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  try {
    store.makeTeams(roomId);
    socket.emit(Event.To, { name: ViewName.RoundOverview });
    socket.broadcast.to(roomId).emit(Event.To, { name: ViewName.PlayerMatch });
    socket.broadcast.to(roomId).emit(Event.Teams, store.getTeams(roomId));
    socket.broadcast
      .to(roomId)
      .emit(Event.Message, `Teams ready for room: ${roomId}`);
    callback({
      status: "OK",
      message: "Game started",
    });
  } catch {
    callback({
      status: "ERROR",
      message: "Unknown error, trying to start the game",
    });
  }
};

export const updateRoomDto = (room: Partial<RoomDto>) => {
  store.updateRoom(room as RoomDto);
};

export const reset = (socket: Socket) => {
  socket.broadcast.emit(Event.To, { name: ViewName.Wizard });
};

export const disconnectAll = (socket: Socket) => {
  socket.removeAllListeners();
};
