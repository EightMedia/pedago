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
  ViewName,
  ViewState
} from "models";
import { Socket } from "socket.io";
import gameToAirtable from "./airtable";
import { updateClientRoom, updatePlayersInLobby } from "./shared";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const registerGame = (
  partialRoom: RoomDto,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  let room: RoomDto;

  // Check if room is already instantiated
  const roomExists: boolean = Boolean(
    store.getRoomByRoomCode(partialRoom.roomCode)
  );

  // If room doesn't exist, create new room
  if (!partialRoom.roomCode || !roomExists) {
    const roomId = randomUUID();
    const adminId = randomUUID();
    const roomCode = Math.floor(1000 + Math.random() * 9000);
    const timestamp = new Date().toLocaleString("nl-NL");

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
      timerStamp: 0,
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
        ...partialRoom.admin,
        ...store.getRoomByRoomCode(partialRoom.roomCode)?.admin,
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
      timerStamp: Math.floor(new Date().valueOf() / 1000),
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
    // Fetch latest sortorder from all players
    fetchLatestSortOrderFromPlayers(socket, roomId);

    // Airtable
    gameToAirtable(store.getRoomById(roomId) as RoomDto, "");

    callback({
      status: "OK",
      message: "Here are the results...",
    });

    store.updateRoom({ ...store.getRoomById(roomId)!, view: ViewName.Result });
    updateClientRoom(socket, roomId);

    socket.emit(Event.To, {
      name: ViewName.Result,
      data: { autoPlay: true },
    });
    setTimeout(() => {
      socket.broadcast.to(roomId).emit(Event.To, <ViewState>{
        name: ViewName.Result,
        data: { autoPlay: true },
      });
    }, 1500);
  } else {
    const room = store.getRoomById(roomId) as RoomDto;

    // Remove idle players
    const filteredPlayers = room?.players?.filter(
      (p: Player) => p.status !== PlayerStatus.NotStarted
    );

    // Kick idle players out of the room
    room?.players?.forEach((p: Player) => {
      if (p.status === PlayerStatus.NotStarted) {
        socket.to(p.socketId).socketsLeave(roomId);
        socket.to(p.socketId).emit(PlayerEvent.ExitGame);
      }
    });

    // Fetch latest sortorder from all players
    fetchLatestSortOrderFromPlayers(socket, roomId);

    store.updateRoom({
      ...room,
      players: filteredPlayers,
      round: roundNo + 1,
      timerStamp: 0,
    });
    updateClientRoom(socket, roomId);

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

export const reset = (roomId: string, socket: Socket) => {
  store.removeRoom(roomId);
  socket.broadcast.to(roomId).emit(PlayerEvent.ExitGame);
  socket.removeAllListeners();
};

export const endGame = (roomId: string, socket: Socket) => {
  // Fetch latest sortorder from all players
  fetchLatestSortOrderFromPlayers(socket, roomId);

  // Airtable
  gameToAirtable(store.getRoomById(roomId) as RoomDto, "");

  setTimeout(() => {
    socket.emit(Event.To, { name: ViewName.Result, data: { autoPlay: true } });
    socket.broadcast
      .to(roomId)
      .emit(Event.To, { name: ViewName.Result, data: { autoPlay: true } });
  }, 1500);
};

export const lockRoom = (
  roomId: string,
  lock: boolean,
  callback: (args: SocketCallback) => void
) => {
  const room = store.getRoomById(roomId);
  store.updateRoom({
    ...(room as RoomDto),
    id: roomId,
    locked: lock,
  });
  callback({
    status: "OK",
    message: `Room ${lock ? "locked" : "unlocked"}`,
  });
};

export const kickPlayer = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const playerSocketId = store.kickPlayer(roomId, playerId);
  socket.to(playerSocketId).emit(PlayerEvent.ExitGame);

  updatePlayersInLobby(socket, roomId);
  updateClientRoom(socket, roomId);
  callback({
    status: "OK",
    message: `Kicked player with ID: ${playerId}`,
  });
};

const fetchLatestSortOrderFromPlayers = (socket: Socket, roomId: string) => {
  store.getTeams(roomId)?.forEach((team) => {
    team?.forEach((player) => {
      socket.to(player?.socketId).emit(PlayerEvent.FinishRoundByAdmin);
    });
  });
};
