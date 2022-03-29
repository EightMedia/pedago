import { Player, ViewState } from "models";

export type GameType = {
  handleView: (view: ViewState) => void;
  stopRound: () => void;
  teams: Player[][];
  round: number;
};
