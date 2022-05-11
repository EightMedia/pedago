import { Group, Player } from "models";

export type PlayerGroupType = {
  id: Group["id"];
  name: Group["name"];
  players?: { name: Player["name"]; id: Player["id"]; active?: boolean }[];
  counter?: boolean;
  kickPlayer?: (playerId: string) => void;
  handleGroupChange?: () => void;
};
