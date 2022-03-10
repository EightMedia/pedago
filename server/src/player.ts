import { randomUUID } from "crypto";
import { Group, Player, ViewName, SocketCallback } from "models";
import { Socket } from "socket.io";
import gamesStore from "./store/games.store";

export const joinRoomByGameCode = (
  gameCode: number,
  callback: (args: SocketCallback) => void
) => {
  const room = gamesStore.getState().getRoomByGameCode(gameCode);

  if (room) {
    callback({
      status: "OK",
      message: "Room found",
      data: {
        roomId: room.id,
      },
    });
  } else {
    callback({
      status: "ERROR",
      message: `Room with game code ${gameCode} does not exist.`,
      data: {
        roomId: "",
      },
    });
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
  const groupsAvaiable = room?.groups.length;

  if (!playerNameTaken) {
    socket.join(roomId);

    const player: Partial<Player> = {
      id: randomUUID(),
      name: name,
      group: undefined,
      roomId: roomId,
      rounds: [],
    };

    gamesStore.getState().addPlayerToRoom(roomId, player);

    socket.broadcast.emit("message", `${name} has joined the game`);
    callback({
      status: "OK",
      message: "You have joined the game",
    });
    if (groupsAvaiable) {
      socket.emit("to", ViewName.SelectGroup);
    } else {
      socket.emit("to", ViewName.InfoScreen);
    }
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
  const group = gamesStore.getState().getGroupsByRoomId(roomId)?.find((g: Group) => g.id === groupId);

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
    socket.emit("to", ViewName.InfoScreen);
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
  socket.emit("to", ViewName.Lobby);
  callback({
    status: "OK",
    message: "Navigate to Lobby",
  });
};

export const gameStart = (
  playerId: string,
  socket: Socket,
  callback: (args: SocketCallback) => void
) => {

  // Set to READY in store?
  // Find couple and wait until other player is ready

  socket.emit("to", ViewName.Game);
  callback({
    status: "OK",
    message: "Start game",
  });
};
