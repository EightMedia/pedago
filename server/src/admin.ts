import { randomUUID } from "crypto";
import {
  Admin,
  Event,
  Player,
  RoomDto,
  SocketCallback,
  ViewName
} from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const registerGame = (
  partialRoom: RoomDto,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  let room;
  const roomId = randomUUID();
  const adminId = randomUUID();
  const roomCode = Math.floor(1000 + Math.random() * 9000);
  const timestamp = new Date().toISOString();

  const roomExists: boolean = Boolean(
    store.getRoomByRoomCode(partialRoom.roomCode)
  );

  if (!partialRoom.roomCode || !roomExists) {
    room = {
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

    store.addRoom(room);

    callback({
      status: "OK",
      message: `You have created a room with code: ${room.roomCode}`,
      data: {
        room: room,
      },
    });
  } else {
    room = {
      ...partialRoom,
      ...store.getRoomByRoomCode(partialRoom.roomCode),
      admin: {
        socketId: socket.id,
      },
    };

    callback({
      status: "OK",
      message: `You have joined the room with code: ${room.roomCode}`,
      data: {
        room: room,
      },
    });
    store.updateRoom(room);

    const playersInLobby = store
      .getRoomByRoomCode(room.roomCode)
      ?.players.filter((p: Player) => p.view === ViewName.Lobby);
    if (playersInLobby) {
      socket.emit(Event.PlayerList, playersInLobby);
    }
  }
  socket.join(room.id);

  socket.emit(Event.To, room.view || { name: ViewName.Lobby });
  socket.emit(Event.Room, store.getRoomByRoomCode(room.roomCode));
};

export const startGame = (
  roomId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  try {
    // Update view of room and all players
    store.updateRoom({
      ...(store.getRoomById(roomId) as RoomDto),
      view: { name: ViewName.Game },
    });
    store.setAllPlayersView(roomId, { name: ViewName.PlayerMatch });

    store.makeTeams(roomId);
    const teams = store.getTeams(roomId);

    // Emit events to admin
    socket.emit(Event.To, { name: ViewName.Game });
    socket.emit(Event.Teams, teams);

    // Emit events to all players
    socket.broadcast.to(roomId).emit(Event.To, { name: ViewName.PlayerMatch });
    socket.broadcast.to(roomId).emit(Event.Teams, teams);
    socket.broadcast
      .to(roomId)
      .emit(Event.Message, `Teams made for room: ${roomId}`);

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

export const stopRound = (
  roomId: string,
  roundNo: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  // Hier moet een broadcast komen van een melding: De ronde is voorbij, met een OK knop.
  // Als er op OK wordt gedrukt, dan verstuurt elke speler zijn data met storeRound.
  // Misschien moeten we doen dat er automatisch de sort order wordt opgehaald bij elke speler

  //Check of er players zijn die nog niet klaar zijn, die krijgen een melding. Anderen gaan meteen door

  finishRound(roomId, roundNo, socket, callback);
};

export const finishRound = (
  roomId: string,
  roundNo: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  if (roundNo === 6) {
    callback({
      status: "OK",
      message: "Here are the results...",
    });
    socket.emit(Event.To, { name: ViewName.Result, data: { result: {} } });
  } else {
    const newRoundNo = roundNo + 1;
    callback({
      status: "OK",
      message: "Going to the next round",
    });
    socket.emit(Event.Round, newRoundNo);
    socket.broadcast.to(roomId).emit(Event.To, {
      name: ViewName.PlayerMatch,
      data: { round: newRoundNo },
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
