import { randomUUID } from "crypto";
import {
  Event,
  Group,
  Player,
  PlayerStatus,
  Round,
  SocketCallback,
  ViewName,
  ViewState
} from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";
import { determinePlayerView } from "./utils/determine-player-view.util";

const store = gamesStore.getState();

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
    const viewData = determinePlayerView(player as Player);

    const updatedPlayer: Partial<Player> = {
      ...player,
      socketId: socket.id,
      view: viewData.name,
    };
    store.updatePlayer(room.id, playerId as string, updatedPlayer);

    const playersInLobby = store
      .getRoomByRoomCode(roomCode)
      ?.players.filter((p: Player) => p.view === ViewName.Lobby);

    socket.broadcast.to(room.id).emit(Event.PlayerList, playersInLobby);
    socket.emit(Event.PlayerList, playersInLobby);
    socket.emit(Event.To, viewData);
  }
  socket.emit(Event.Room, store.getRoomByRoomCode(roomCode));
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
    const groupsAvaiable = room?.groups?.length;
    socket.join(roomId);
    const playerId = randomUUID();
    const player: Partial<Player> = {
      id: playerId,
      socketId: socket.id,
      name: name,
      group: undefined,
      roomId: roomId,
      rounds: [],
      view: groupsAvaiable ? ViewName.SelectGroup : ViewName.InfoScreen,
      status: PlayerStatus.NotStarted,
    };

    store.addPlayerToRoom(roomId, player);

    socket.broadcast.to(roomId).emit("message", `${name} has joined the game`);
    callback({
      status: "OK",
      message: "You have joined the game",
      data: {
        playerId,
      },
    });

    socket.emit(Event.Room, store.getRoomById(roomId));
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
    player.group = group as Group;
    store.updatePlayer(roomId, playerId, player);
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

  (player as Player).view = ViewName.Lobby;
  store.updatePlayer(roomId, playerId, player as Player);

  const room = store.getRoomById(roomId);
  callback({
    status: "OK",
    message: "Navigate to Lobby",
  });

  const playersInLobby = room?.players.filter(
    (p: Player) => p.view === ViewName.Lobby
  );

  socket.broadcast.to(roomId).emit(Event.PlayerList, playersInLobby);
  socket.emit(Event.To, { name: ViewName.Lobby });
  socket.emit(Event.Room, room);
  socket.emit(Event.PlayerList, playersInLobby);
};

export const gameStart = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  store.setTeamPlayerStatus(
    roomId,
    playerId,
    index as number,
    PlayerStatus.InProgress
  );
  const teamReady: boolean = store.getTeamReady(
    roomId,
    index,
    PlayerStatus.InProgress
  );

  if (teamReady) {
    callback({
      status: "OK",
      message: "Start game",
    });
    const teams = store.getTeams(roomId);
    const team = (teams as Player[][])[index];
    team.forEach((player: Player) => {
      socket
        .to(player.socketId)
        .emit(Event.To, <ViewState>{ name: ViewName.Game, round: 1 });
    });
    socket.emit(Event.To, <ViewState>{ name: ViewName.Game, round: 1 });
    socket.broadcast.to(roomId).emit(Event.Teams, teams);
  } else {
    socket.emit(Event.To, { name: ViewName.WaitingScreen });
  }
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

  store.storeRound(roomId, playerId, round);

  const index: number = store.getTeamIndex(roomId, playerId);
  store.setTeamPlayerStatus(
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
    callback({
      status: "OK",
      message: "Round saved",
    });
    const team = (store.getTeams(roomId) as Player[][])[index];
    socket.emit(Event.To, { name: ViewName.Discuss });
    team.forEach((player: Player) => {
      socket.to(player.socketId).emit(Event.To, { name: ViewName.Discuss });
    });
  } else {
    callback({
      status: "OK",
      message: "Wait for other player",
    });
    socket.emit(Event.To, { name: ViewName.WaitingScreen });
  }
};

export const storeTeamReady = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  store.setTeamReady(roomId, index, PlayerStatus.Done);

  const player = store.getPlayerById(roomId, playerId);
  const lastStoredRound = player?.rounds.length;
  console.log(player?.rounds);

  if (typeof lastStoredRound !== "number") {
    callback({
      status: "ERROR",
      message: "Could not find played rounds",
    });
    return;
  }

  if (lastStoredRound === 6) {
    callback({
      status: "OK",
      message: "Well played! Here are your results...",
    });
    socket.emit(Event.To, { name: ViewName.Result, data: { result: {} } });
    return;
  } else {
    callback({
      status: "OK",
      message: "Going to the next round",
    });
    socket.emit(Event.To, {
      name: ViewName.PlayerMatch,
      data: { round: lastStoredRound + 1 },
    });
    socket.broadcast.to(roomId).emit(Event.Teams, store.getTeams(roomId));
  }
};
