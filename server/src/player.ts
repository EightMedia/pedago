import { randomUUID } from "crypto";
import { Group, Player, ViewName } from "models";
import { Socket } from "socket.io";
import useGamesStore from "./store/games.store";

const {
  addPlayerToRoom,
  getPlayerById,
  getGroupsByRoomId,
  getRoomById,
  getRoomByGameCode,
  updatePlayer,
} = useGamesStore();

export const joinRoomByGameCode = (
  gameCode: number,
  callback: ({
    status,
    message,
    roomId,
  }: {
    status: string;
    message: string;
    roomId: string;
  }) => void
) => {
  const room = getRoomByGameCode(gameCode);

  if (room) {
    callback({
      status: "OK",
      message: "Room found",
      roomId: room.id,
    });
  } else {
    callback({
      status: "ERROR",
      message: `Room with game code ${gameCode} does not exist.`,
      roomId: "",
    });
  }
};

export const joinRoomWithName = (
  roomId: string,
  name: string,
  socket: Socket,
  callback: ({ status, message }: { status: string; message: string }) => void
) => {
  const room = getRoomById(roomId);
  const playerNameTaken = room?.players.some((p) => p.name === name);
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

    addPlayerToRoom(roomId, player);

    socket.broadcast.emit("message", `${name} has joined the game`);
    callback({
      status: "OK",
      message: "You have joined the game",
    });
    if (groupsAvaiable) {
      socket.emit("to", { name: ViewName.SelectGroup, data: {} });
    } else {
      socket.emit("to", { name: ViewName.InfoScreen, data: {} });
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
  callback: ({ status, message }: { status: string; message: string }) => void
) => {
  const player = getPlayerById(roomId, playerId);
  const group = getGroupsByRoomId(roomId)?.find((g) => g.id === groupId);

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
    updatePlayer(roomId, playerId, player);
    socket.emit("to", { name: ViewName.InfoScreen, data: {} });
    callback({
      status: "OK",
      message: "Group successfully added to Player",
    });
  }
};
