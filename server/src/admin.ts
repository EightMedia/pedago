import { randomUUID } from "crypto";
import {
  Admin,
  AdminEvent,
  Event,
  Player,
  PlayerEvent,
  PlayerStatus,
  RoomDto,
  SocketCallback,
  ViewName
} from "models";
import { Socket } from "socket.io";
import storeGame from "./airtable";
import { updateClientRoom, updatePlayersInLobby } from "./shared";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const registerGame = (
  partialRoom: RoomDto,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  let room;

  // Check if room is already instantiated
  const roomExists: boolean = Boolean(
    store.getRoomByRoomCode(partialRoom.roomCode)
  );

  // If room doesn't exist, create new room
  if (!partialRoom.roomCode || !roomExists) {
    const roomId = randomUUID();
    const adminId = randomUUID();
    const roomCode = Math.floor(1000 + Math.random() * 9000);
    const timestamp = new Date().toISOString();

    room = {
      ...partialRoom,
      id: roomId,
      socketId: socket.id,
      admin: {
        ...partialRoom.admin,
        id: adminId,
      } as Admin,
      roomCode: roomCode,
      players: [],
      teams: [],
      active: true,
      locked: false,
      startDate: timestamp,
      view: ViewName.Lobby,
      round: 1,
    };
    // Add room to store
    store.addRoom(room);

    socket.emit(AdminEvent.GameScene, false);
    socket.emit(AdminEvent.LobbyStep, true);
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
    // Update room to store
    store.updateRoom(room);

    updatePlayersInLobby(socket, room.id);
    socket.emit(AdminEvent.GameScene, false);
    callback({
      status: "OK",
      message: `You have joined the room with code: ${room.roomCode}`,
      data: {
        room: room,
      },
    });
  }
  socket.join(room.id);
  socket.emit(Event.To, { name: room.view });
  socket.emit(Event.Room, store.getRoomByRoomCode(room.roomCode));
};

export const startGame = (
  roomId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  try {
    // Update view of room and players
    const room = store.getRoomById(roomId) as RoomDto;
    store.updateRoom({
      ...room,
      view: ViewName.Game,
    });

    store.updateAllPlayers(roomId, <Partial<Player>>{
      status: PlayerStatus.NotStarted,
      view: ViewName.PlayerMatch,
    });
    store.makeTeams(roomId);

    // Emit events to admin
    socket.emit(Event.To, { name: ViewName.Game });

    // Emit events to all players
    socket.broadcast.to(roomId).emit(PlayerEvent.PlayerMatchScene, false);
    socket.broadcast.to(roomId).emit(Event.To, { name: ViewName.PlayerMatch });
    socket.broadcast
      .to(roomId)
      .emit(Event.Message, `Teams made for room: ${roomId}`);

    updateClientRoom(socket, roomId);
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

export const finishRound = (
  roomId: string,
  roundNo: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  if (roundNo === 6) {
    socket.emit(Event.To, { name: ViewName.Result });
    // Fetch latest sortorder from all players
    socket.broadcast.to(roomId).emit(PlayerEvent.FinishRoundByAdmin);
    
    // Airtable
    storeGame(store.getRoomById(roomId) as RoomDto, "");

    callback({
      status: "OK",
      message: "Here are the results...",
    });
  } else {
    // Fetch latest sortorder from all players
    socket.broadcast.to(roomId).emit(PlayerEvent.FinishRoundByAdmin);

    const room = store.getRoomById(roomId) as RoomDto;

    // Remove idle players
    const filteredPlayers = room?.players?.filter(
      (p: Player) => p.status !== PlayerStatus.NotStarted
    );
    // Kick idle players out of the room
    room?.players?.forEach((p: Player) => {
      if (p.status === PlayerStatus.NotStarted) {
        socket.to(p.socketId).socketsLeave(roomId);
      }
    })
    store.updateRoom({
      ...room,
      players: filteredPlayers,
      round: roundNo + 1,
    });

    setTimeout(() => startGame(roomId, socket, callback), 2000);

    callback({
      status: "OK",
      message: "Going to the next round",
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
