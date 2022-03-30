import { TeamType } from "../../../components/TeamsList/TeamsList.types";

export type GameType = {
  openSettings: () => void;
  stopRound: () => void;
  timer: boolean;
  round: {
    current: number;
    total: number;
  };
  teams: Array<TeamType>;
};
