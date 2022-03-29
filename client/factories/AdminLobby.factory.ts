import { Group, Player } from "models";
import { PlayerGroupType } from "../lib/components/PlayerGroup/PlayerGroup.types";

const getPlayerGroupType = (
  group: Group,
  playerList: Player[]
): PlayerGroupType => {
  return {
    ...(group as Group),
    players: playerList
      .filter((p) => p.group?.id === group.id)
      .map((p) => {
        return { name: p.name, active: false };
      }),
  };
};

export const getAdminLobbyType = (
  groups: Group[],
  playerList: Player[]
): PlayerGroupType[] => {
  return groups.map((group) =>
    getPlayerGroupType(group, playerList)
  ) as PlayerGroupType[];
};
