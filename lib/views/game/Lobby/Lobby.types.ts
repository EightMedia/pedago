import { PlayerGroupType } from "../../../components/PlayerGroup/PlayerGroup.types";
import { Player } from "./../lib/models";

export type LobbyType = {
  round: number;
  roundMax: number;
  playerName: Player["name"];
  groups: PlayerGroupType[];
};
