import { Group, Player } from "models";

export enum PlayerMatchSceneEnum {
  Wait,
  Match
}

export type PlayerMatchType = {
  round: number;
  roundMax: number;
  teamName?: number;
  teamMembers?: {
    name: Player["name"];
    group: Group["name"];
  }[];
  initialScene?: PlayerMatchSceneEnum
};
