import { Group, Player, RoomDto } from "models";
import { Socket } from "socket.io-client";
import { PlayerGroupType } from "../lib/components/PlayerGroup/PlayerGroup.types";
import { LobbyType } from "../lib/views/game/Lobby/Lobby.types";
import { getPlayerId } from "./shared.factory";

const getPlayerGroupType = (
  group: Group,
  playerList: Player[],
  playerId: Player["id"]
): PlayerGroupType => {
  return {
    ...(group as Group),
    players: playerList
      .filter((p) => p.group?.id === group.id)
      .map((p) => {
        return { name: p.name, active: p.id === playerId };
      }),
  };
};

const getPlayerName = (
  id: string | undefined,
  playerList: Player[]
): Player["name"] => {
  const players: Player[] = playerList.filter((p) => p.id === id);
  if (players.length === 1) {
    return players[0].name;
  } else {
    return "";
  }
};

export const getLobbyType = (
  socket: Socket,
  round: number,
  roundMax: number,
  room: RoomDto,
  playerList: Player[]
): LobbyType => {
  const playerId = getPlayerId(socket.id, room.players);
  const playerName = getPlayerName(playerId, playerList);
  const groups = room.groups?.map((g) =>
    getPlayerGroupType(g, playerList, playerId as string)
  ) as PlayerGroupType[];
  return {
    round,
    roundMax,
    playerName,
    groups,
  };
};

export const getGroups = (
  groups: Group[],
  playerList: Player[]
): PlayerGroupType[] => {
  const lobbyGroups: PlayerGroupType[] = [];
  groups.forEach((g) =>
    lobbyGroups.push(getPlayerGroupType(g, playerList, ""))
  );
  return lobbyGroups;
};
