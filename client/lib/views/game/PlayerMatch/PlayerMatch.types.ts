import { Group, Player } from "models";

export type PlayerMatchType = {
  round: number;
  roundMax: number;
  teamName: number;
  teamMembers: {
    name: Player["name"];
    group: Group["name"];
  }[];
};
