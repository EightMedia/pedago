import { PlayerGroupType } from "@components/PlayerGroup/PlayerGroup.types";
import { Player } from "models";

export type LobbyType = {
  round: number;
  roundMax: number;
  playerName: Player["name"];
  playerId?: Player["id"];
  groups: PlayerGroupType[];
};
