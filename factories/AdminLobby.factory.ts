import { PlayerGroupType } from "../lib/components/PlayerGroup/PlayerGroup.types";
import { Group, Player, RoomDto } from "./../lib/models";

const getPlayerGroupType = (
  group: Group,
  playerList: Player[]
): PlayerGroupType => {
  return {
    ...(group as Group),
    players: playerList?.filter((p) => p.group?.id === group.id)
      .map((p) => {
        return { name: p.name, active: false };
      }),
  };
};

export const getAdminLobbyType = (
  groups: Group[],
  playerList: Player[]
): PlayerGroupType[] => {
  return groups?.map((group) =>
    getPlayerGroupType(group, playerList)
  ) as PlayerGroupType[];
};

export const getLobbyRoom = (
  room: RoomDto
): { roomCode: number; id: string; players: number } => {
  return {
    roomCode: room.roomCode,
    id: room.id,
    players: room?.players?.length,
  };
};
