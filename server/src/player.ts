import { randomUUID } from "crypto";
import { Group, Player, Round, SocketCallback, ViewName } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

const store = gamesStore.getState();

export const joinRoomByGameCode = (
  playerId: string | undefined,
  gameCode: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const room = store.getRoomByGameCode(gameCode);

  if (!room) {
    callback({
      status: "ERROR",
      message: `Room with game code ${gameCode} does not exist.`,
      data: {
        roomId: "",
      },
    });
    return;
  }

  const player = room?.players?.find((p: Player) => p.id === playerId);

  if (!player) {
    callback({
      status: "OK",
      message: "Room found",
      data: {
        roomId: room.id,
      },
    });
  } else {
    const updatedPlayer: Partial<Player> = {
      ...player,
      socketId: socket.id,
    };
    store
      .updatePlayer(room.id, playerId as string, updatedPlayer);
    determinePlayerView(updatedPlayer as Player, socket);
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
    const groupsAvaiable = room?.groups?.length;
    socket.join(roomId);

    const player: Partial<Player> = {
      id: randomUUID(),
      socketId: socket.id,
      name: name,
      group: undefined,
      roomId: roomId,
      rounds: [],
      view: groupsAvaiable ? ViewName.SelectGroup : ViewName.InfoScreen,
    };

    store.addPlayerToRoom(roomId, player);

    socket.broadcast.to(roomId).emit("message", `${name} has joined the game`);
    callback({
      status: "OK",
      message: "You have joined the game",
    });
    socket.emit("to", { name: player.view });
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
    player.group = group as Group;
    store.updatePlayer(roomId, playerId, player);
    socket.emit("to", { name: ViewName.InfoScreen });
    callback({
      status: "OK",
      message: "Player successfully added to Group",
    });
  }
};

export const requestLobby = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const player: Partial<Player> = {
    view: ViewName.Lobby,
  };
  store.updatePlayer(roomId, playerId, player);
  socket.emit("to", { name: ViewName.Lobby });

  // get players that requested lobby and broadcast the list
  const playersInLobby = store
    .getRoomById(roomId)
    ?.players.filter((p: Player) => p.view === ViewName.Lobby);
  socket.broadcast.to(roomId).emit("players", playersInLobby);

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
  store.setTeamPlayerReady(roomId, playerId, index as number, true);
  const teamReady: boolean = store.getTeamReady(roomId, index);

  if (teamReady) {
    callback({
      status: "OK",
      message: "Start game",
    });
    const team = (store.getTeams(roomId) as Player[][])[index];
    team.forEach((player: Player) => {
      socket.to(player.socketId).emit("to", { name: ViewName.Game, round: 1 });
    });
    store.setTeamReady(roomId, index, false);
  } else {
    socket.emit("to", { name: ViewName.WaitingScreen });
  }
};

export const storeRound = (
  roomId: string,
  playerId: string,
  round: Round,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  store.storeRound(roomId, playerId, round);

  const index: number = store.getTeamIndex(roomId, playerId);
  store.setTeamPlayerReady(roomId, playerId, index as number, true);
  const teamReady: boolean = store.getTeamReady(roomId, index);

  if (teamReady) {
    callback({
      status: "OK",
      message: "Round saved",
    });
    const team = (store.getTeams(roomId) as Player[][])[index];
    team.forEach((player: Player) => {
      socket.to(player.socketId).emit("to", { name: ViewName.Discuss });
    });
    store.setTeamReady(roomId, index, false);
  } else {
    socket.emit("to", { name: ViewName.WaitingScreen });
  }
};

export const storeTeamReady = (
  roomId: string,
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const index: number = store.getTeamIndex(roomId, playerId);
  store.setTeamReady(roomId, index, true);
  // NOGNEIT AF
}

const determinePlayerView = (player: Player, socket: Socket) => {
  if (player.view === ViewName.Game) {
    const currentRound = player.rounds.length;
    switch (currentRound) {
      case 0:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 1 },
        });
        break;
      case 1:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 2 },
        });
        break;
      case 2:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 3 },
        });
        break;
      case 3:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 4 },
        });
        break;
      case 4:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 5 },
        });
        break;
      case 5:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: 6 },
        });
        break;
      case 6:
        socket.emit("to", {
          name: ViewName.Result,
        });
        break;
      default:
        socket.emit("to", { name: ViewName.Lobby });
    }
  } else {
    socket.emit("to", { name: ViewName.Lobby });
  }
};
