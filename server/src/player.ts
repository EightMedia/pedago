import { randomUUID } from "crypto";
import {
  Category,
  Event,
  Group,
  Player,
  PlayerEvent,
  PlayerStatus,
  Round,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { Socket } from "socket.io";
import { updateClientRoom, updatePlayersInLobby } from "./shared";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();
const reverseSortOrder = (arr: Category[]): Category[] =>
  arr?.map((_, index) => arr[arr.length - 1 - index]);

export const joinRoomByRoomCode = (
  playerId: string | undefined,
  roomCode: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const room = store.getRoomByRoomCode(roomCode);
  if (!room) {
    callback({
      status: "ERROR",
      message: `Room with game code ${roomCode} does not exist.`,
    });
    return;
  }

  const player = room?.players?.find((p: Player) => p.id === playerId);
  if (!player) {
    updateClientRoom(socket, room.id);

    callback({
      status: "OK",
      message: "Room found",
    });
  } else {
    callback({
      status: "OK",
      message: "Player found",
    });
    socket.join(room.id);

    const updatedPlayer: Partial<Player> = {
      ...player,
      socketId: socket.id,
    };
    store.updatePlayer(room.id, playerId as string, updatedPlayer);

    updatePlayersInLobby(socket, room.id);
    updateClientRoom(socket, room.id);
    socket.emit(Event.Round, player.round);

    socket.emit(
      PlayerEvent.PlayerMatchScene,
      updatedPlayer.status !== PlayerStatus.NotStarted
    );
    socket.emit(PlayerEvent.GameScene, false);
    socket.emit(Event.To, { name: updatedPlayer.view });
  }
};

export const joinRoomWithName = (
  roomId: string,
  name: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const room = store.getRoomById(roomId);
  const playerNameTaken = room?.players.some((p: Player) => p.name === name);

  if (!room) {
    callback({
      status: "ERROR",
      message: `Room does not exist.`,
    });
    return;
  }

  if (!playerNameTaken) {
    socket.join(roomId);

    const playerId = randomUUID();
    const player: Partial<Player> = {
      id: playerId,
      socketId: socket.id,
      name: name,
      roomId: roomId,
      rounds: [],
      view: ViewName.Wizard,
      status: PlayerStatus.NotStarted,
      round: 1,
    };

    store.addPlayerToRoom(roomId, player);

    updateClientRoom(socket, room.id);

    socket.broadcast.to(roomId).emit("message", `${name} has joined the game`);
    callback({
      status: "OK",
      message: "You have joined the game",
      data: {
        playerId,
      },
    });
  } else {
    callback({
      status: "ERROR",
      message: `Name taken: ${name}. Choose a different name.`,
    });
  }
};

export const joinGroup = (
  groupId: string,
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const player = store.getPlayerById(roomId, playerId);
  const group = store
    .getGroupsByRoomId(roomId)
    ?.find((g: Group) => g.id === groupId);

  if (!player) {
    callback({
      status: "ERROR",
      message: `Player with ID ${playerId} was not found`,
    });
  } else if (!group) {
    callback({
      status: "ERROR",
      message: `Group with ID ${groupId} was not found`,
    });
  } else {
    store.updatePlayer(roomId, playerId, {
      ...player,
      group,
      view: ViewName.Lobby,
    });

    updateClientRoom(socket, roomId);

    callback({
      status: "OK",
      message: "Player successfully added to group",
    });
  }
};

export const requestLobby = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const player = store.getPlayerById(roomId, playerId);
  store.updatePlayer(roomId, playerId, {
    ...player,
    view: ViewName.Lobby,
  });
  socket.emit(PlayerEvent.PlayerMatchScene, true);
  socket.emit(PlayerEvent.GameScene, true);

  updatePlayersInLobby(socket, roomId);
  updateClientRoom(socket, roomId);

  socket.emit(Event.To, { name: ViewName.Lobby });

  callback({
    status: "OK",
    message: "Navigate to Lobby",
  });
};

export const gameStart = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  const teams = store.getTeams(roomId);
  const team = (teams as Player[][])[index];

  team.forEach((player: Player) => {
    socket
      .to(player.socketId)
      .emit(Event.To, <ViewState>{ name: ViewName.Game });
    store.updatePlayer(roomId, player.id, {
      view: ViewName.Game,
      status: PlayerStatus.InProgress,
    });
  });

  updateClientRoom(socket, roomId);

  socket.emit(PlayerEvent.PlayerMatchScene, true);
  socket.emit(PlayerEvent.GameScene, true);
  socket.emit(Event.To, <ViewState>{ name: ViewName.Game });

  callback({
    status: "OK",
    message: "Start game",
  });
};

export const storeRound = (
  roomId: string,
  playerId: string,
  round: Round,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  if (!roomId || !playerId) {
    callback({
      status: "ERROR",
      message: "Room and/or player unknown",
    });
    return;
  }
  const index: number = store.getTeamIndex(roomId, playerId);
  store.storeRound(roomId, playerId, index, {
    ...round,
    order: reverseSortOrder(round.order),
  });

  store.setPlayerStatus(
    roomId,
    playerId,
    index as number,
    PlayerStatus.Discuss
  );
  const teamReady: boolean = store.getTeamReady(
    roomId,
    index,
    PlayerStatus.Discuss
  );

  if (teamReady) {
    const team = (store.getTeams(roomId) as Player[][])[index];
    updateClientRoom(socket, roomId);

    team.forEach((player: Player) => {
      store.updatePlayer(roomId, player.id, {
        ...player,
        view: ViewName.Discuss,
      });
      socket.to(player.socketId).emit(PlayerEvent.GameScene, true);
      socket.to(player.socketId).emit(Event.To, { name: ViewName.Discuss });
    });
    socket.emit(PlayerEvent.GameScene, true);
    socket.emit(Event.To, { name: ViewName.Discuss });

    callback({
      status: "OK",
      message: "Round saved",
    });
  } else {
    updateClientRoom(socket, roomId);

    socket.emit(Event.To, { name: ViewName.WaitingScreen });

    callback({
      status: "OK",
      message: "Wait for other player",
    });
  }
};

export const getLatestSortOrder = (
  roomId: string,
  round: number,
  playerId: string,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  const rounds = store.getPlayerById(roomId, playerId)?.rounds as Round[];
  const lastIndex = (rounds?.length as number) - 1;
  store.setPlayerStatus(
    roomId,
    playerId,
    index as number,
    PlayerStatus.InProgress
  );
  const isNotANewRound = rounds?.some((r) => r.number === round);
  if (isNotANewRound) {
    callback({
      status: "OK",
      message: "Latest sort order requested",
      data: {
        sortOrder: reverseSortOrder(rounds[lastIndex]?.order),
      },
    });
  }
};

export const storeTeamReady = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  const team = (store.getTeams(roomId) as Player[][])[index];
  store.setPlayerStatus(roomId, playerId, index as number, PlayerStatus.Done);
  const player = store.getPlayerById(roomId, playerId);
  const lastRound = player?.rounds.find((r) => r.number === 6);

  if (lastRound) {
    socket.emit(Event.To, { name: ViewName.Result, data: { result: {} } });
    team.forEach((player: Player) => {
      store.updatePlayer(roomId, player.id, {
        status: PlayerStatus.Done
      });
    });
    callback({
      status: "OK",
      message: "Well played! Here are your results...",
    });
  } else {
    const round = (player?.rounds?.length as number) + 1;
    
    team.forEach((player: Player) => {
      store.updatePlayer(roomId, player.id, {
        view: ViewName.PlayerMatch,
        round,
      });
      socket.to(player.socketId).emit(PlayerEvent.PlayerMatchScene, true);
      socket.to(player.socketId).emit(Event.Round, round);
      socket.to(player.socketId).emit(Event.To, {
        name: ViewName.PlayerMatch,
      });
    });
    socket.emit(PlayerEvent.PlayerMatchScene, true);
    socket.emit(Event.Round, round);
    
    updateClientRoom(socket, roomId);
    
    socket.emit(Event.To, {
      name: ViewName.PlayerMatch,
    });

    callback({
      status: "OK",
      message: "Going to the next round",
    });
  }
};
