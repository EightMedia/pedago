import { Group, Player } from "models";

export type LobbyType = {
  round: number;
  roundMax: number;
  groups: Group[];
  playerList: Player[];
  playerId: Player["id"];
};
