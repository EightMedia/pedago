import { Player } from "models";

export type PlayerMatchType = {
  round: number;
  roundMax: number;
  teams: Player[][];
  playerId: Player["id"];
};
