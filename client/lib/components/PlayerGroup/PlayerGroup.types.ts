import { Group, Player } from "models";

export type PlayerGroupType = Group & {
  players: Array<{ name: Player["name"] }>;
};
