import { Group, Player } from "models";

export type PlayerGroupType = {
  id: Group["id"];
  name: Group["name"];
  players?: { name: Player["name"]; active?: boolean }[];
  counter?: boolean;
  handleGroupChange?: () => void;
};
