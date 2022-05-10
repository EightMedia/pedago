import { Player } from "models";
import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";

export type LobbyType = {
  round: number;
  roundMax: number;
  playerName: Player["name"];
  playerId?: Player["id"];
  groups: PlayerGroupType[];
};
