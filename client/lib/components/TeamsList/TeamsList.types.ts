import { PlayerStatus } from "models";

export type TeamType = {
  name: string;
  status: PlayerStatus;
  players: string[];
};

export type TeamsListType = {
  teams: Array<TeamType>;
  title: string;
  emptyText: string;
};
