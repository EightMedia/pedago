import { randomUUID } from "crypto";
import { Group, Player, SocketCallback, ViewName } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

export const joinRoomByGameCode = (
  playerId: string | undefined,
  gameCode: number,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  const room = gamesStore.getState().getRoomByGameCode(gameCode);

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

  const player = room?.players?.find((p) => p.id === playerId);

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
    gamesStore
      .getState()
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
  const room = gamesStore.getState().getRoomById(roomId);
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

    gamesStore.getState().addPlayerToRoom(roomId, player);

    socket.broadcast.emit("message", `${name} has joined the game`);
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
  const player = gamesStore.getState().getPlayerById(roomId, playerId);
  const group = gamesStore
    .getState()
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
    gamesStore.getState().updatePlayer(roomId, playerId, player);
    socket.emit("to", { name: ViewName.InfoScreen });
    callback({
      status: "OK",
      message: "Player successfully added to Group",
    });
  }
};

export const requestLobby = (
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {
  socket.emit("to", { name: ViewName.Lobby });
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
  gamesStore.getState().getTeams(roomId);
  gamesStore.getState().setPlayerReady(roomId, playerId, true);

  // Find couple and wait until other player is ready

  socket.emit("to", { name: ViewName.Game });
  callback({
    status: "OK",
    message: "Start game",
  });
};

const determinePlayerView = (player: Player, socket: Socket) => {
  if (player.view === ViewName.Game) {
    const currentRound = player.rounds.length;
    switch (currentRound) {
      case 0:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[1] },
        });
        break;
      case 1:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[2] },
        });
        break;
      case 2:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[3] },
        });
        break;
      case 3:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[4] },
        });
        break;
      case 4:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[5] },
        });
        break;
      case 5:
        socket.emit("to", {
          name: ViewName.Game,
          data: { round: player.rounds[6] },
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
