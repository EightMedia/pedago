import { Group, Player, ViewName } from "models";

export type LobbyType = {
  round: number;
  roundMax: number;
  groups: Array<Group & { players: Array<{ name: Player["name"] }> }>;
};
