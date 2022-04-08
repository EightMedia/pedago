import { Group, Player } from "./../lib/models";

export type PlayerGroupType = {
  id: Group["id"];
  name: Group["name"];
  players?: { name: Player["name"]; active?: boolean }[];
};
